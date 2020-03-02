import React from 'react';
import {
    BrowserRouter as Router, Switch, withRouter,
    Route
  } from 'react-router-dom';
import NavBar from './NavBar';
import Profile from './Profile';
import Home from './Home';
import ShoppingCart from './ShoppingCart'
import ItemsList from './ItemsList'
import Login from './Login'
import {authenticate} from '../services/api'
import {extractItemsFromPurchases} from '../utilities/helpers'




class Routes extends React.Component {
  state = {
    selectedItems: [],
    item: [
        { id: 1, title: 'Computer', price: 15, img_url: 'https://images.unsplash.com/photo-1525385444278-b7968e7e28dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' },
        { id: 2, title: 'iPhone', price: 10, img_url: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' },
        { id: 3, title: 'Head Phones', price: 20, img_url: 'https://images.unsplash.com/photo-1562770584-eaf50b017307?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2663&q=80' }
    ],
    purchasedItems: [],
    auth: {
      email: "",
      userId: "",
      loggedIn: false
    }
  }

  componentDidMount() {
    
     console.log("Routes Mounted")
   
  }

  isAuthenticatedUser = () => {
    authenticate(localStorage.getItem("fire_token")).then(resp => {
      if (!resp.errors) {  // authenticated
        this.setState(prevState => {
          return {
            ...prevState,
            purchasedItems: extractItemsFromPurchases(resp.purchases),
            auth: {
              ...prevState.auth,
              email: resp.email,
              userId: resp.id,
              loggedIn: true
            }
          }
        })
           
      } else { // not auth, redirect to login
        //this.props.history.push("/")
        this.setState({
          purchasedItems: [],
          item: [],
          selectedItems: [],
          auth: {
            email: "",
            userId: null,
            loggedIn: false
          }
        }, () => this.props.history.push("/"))
      }
    })
  }

  handleLogin = (resp) => {
    this.setState(prevState => {
      return {
        ...prevState,
        purchasedItems: extractItemsFromPurchases(resp.purchases),
        auth: {
          ...prevState.auth,
          email: resp.email,
          userId: resp.id,
          loggedIn: true
        }
      }
    }, () => {
      if (this.state.auth.loggedIn) {
        if (this.props.location.pathname === "/") {
           this.props.history.push("/home")
        }
      }
    })
  }

  setLogin = (newValue) => {
    this.setState(prevState => {
      return {
        ...prevState,
        auth: {
          ...prevState.auth,
          loggedIn: newValue
        }
      }
    } )
  }

  handleLogOut = () => {

    // clear the token
    localStorage.removeItem("fire_token")
    // sign out of google
    this.props.signOut() 

      // update state
      this.setState(prevState => {
        return {
          ...prevState,
          purchasedItems: [],
          item: [],
          selectedItems: [],
          auth: {
             userId: null,
             email: "",
             loggedIn: false
          }
        }
      }, () => this.props.history.push("/"))
 

  }

  handleSelectClick = (item) => {
    
    this.setState(prevState => ({
            ...prevState,
            selectedItems: [...prevState.selectedItems, item]
    
        }))
  }


  removeSelectedItems = (item) => {
    const newSelected = this.state.selectedItems.filter(piece => piece !== item)
    this.setState(prevState => ({
        ...prevState,
        selectedItems: newSelected
    }))
}


  render() {
    console.log("Routes component, props:", this.props)
    return (  
        
              <div> 
                 { this.state.auth.loggedIn ? < NavBar handleLogOut={this.handleLogOut} />: null}
                     <Switch>
                     <Route exact path="/" render={(routerProps) => <Login setLogin={this.setLogin} {...routerProps} handleLogin={this.handleLogin} signOut={this.props.signOut} user={this.props.user} auth={this.state.auth} signInWithGoogle={this.props.signInWithGoogle} />}/>
                     <Route exact path="/home" render={(routerProps) => <Home isAuthenticatedUser={this.isAuthenticatedUser} {...routerProps} setLogin={this.setLogin} /> }/>
                     <Route exact path="/profile" render={(routerProps) => <Profile {...routerProps} setLogin={this.setLogin} isAuthenticatedUser={this.isAuthenticatedUser}/>}/> 
                     <Route exact path="/shoppingcart" render={(routerProps) => <ShoppingCart {...routerProps} setLogin={this.setLogin} isAuthenticatedUser={this.isAuthenticatedUser} selectedItems={this.state.selectedItems} removeSelectedItems={this.removeSelectedItems}/>}/> 
                     <Route exact path="/itemslist" render={(routerProps) => <ItemsList {...routerProps} setLogin={this.setLogin} isAuthenticatedUser={this.isAuthenticatedUser} item={this.state.item} handleSelectClick={this.handleSelectClick}/>}/> 
                     </Switch>

               
                
              </div>
        
    )
  }
}

export default withRouter(Routes);
