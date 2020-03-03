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
import { searchForItems } from '../services/api'
import { constructItems} from '../utilities/helpers'


const taobaoHeaders = {
  "x-rapidapi-host": "taobao-api.p.rapidapi.com",
  "x-rapidapi-key": "pgIpYdsMbLmshKSnodVWVQOZrSirp1U6HnIjsni2mklfznQrJ2",
  "Accept": "application/json"

}

class Routes extends React.Component {
  state = {
    selectedItems: [],
    item: [
    ],
    purchasedItems: [],
    auth: {
      email: "",
      userId: "",
      loggedIn: false
    },
    query: "",
    clothes: [],
    iphones: [],
    shoes: []
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

  randomItems = () => {
    
    searchForItems("dog", 50).then(data => {
            
   
    console.log(data["result"]["item"])    

    this.setState(prevState => {
    return {
     ...prevState,
     item: constructItems(data["result"]["item"]), 
    }

   })
    }).catch(err => console.log(err))
}


topIphoneCases = () => {
 
  searchForItems("iphone case", 4).then(data => {

  console.log(data["result"]["item"])    

  this.setState(prevState => {
  return {
   ...prevState,
   iphones: constructItems(data["result"]["item"]), 
  }
 })
  }).catch(err => console.log(err))
}

topClothes = () => {

  searchForItems("clothes", 4).then(data => {

  console.log(data["result"]["item"])    

  this.setState(prevState => {
  return {
   ...prevState,
   clothes: constructItems(data["result"]["item"]), 
  }
 })
  }).catch(err => console.log(err))
}

topShoes = () => {

  searchForItems("shoes", 4).then(data => {

  console.log(data["result"]["item"])    

  this.setState(prevState => {
  return {
   ...prevState,
   shoes: constructItems(data["result"]["item"]), 
  }
 })
  }).catch(err => console.log(err))
}


  handleInputChange = (event) => {
    //debugger
    const input = event.target.value;
   
    this.setState({
      query: input,
    })
  };
  

  buttonClick = () => {
    searchForItems(this.state.query, 50).then(data => this.setState(prevState => {
      return {
       ...prevState,
       item: constructItems(data["result"]["item"]), 
      }}))
  }



  handleSelectClick = (item) => {
    
    // check if item is already in SelectedItems.
    // if it is, it will have a quantity key, with a value from 1..n
      // just increment that value by one
    // if its not already in Selected Items, add it to selected items with a quantity key, with a value of 1
       
    //item = {name: "jason"}
    // newItem, with additional key
     // newItem = {...item, quantity: item.quantity + 1} 

     const found = this.state.selectedItems.find(i => i.external_id === item.external_id)
      
      if (found) {
        this.setState(prevState => ({
          ...prevState,
          selectedItems: prevState.selectedItems.map(i => {
            if (i.external_id === item.external_id) {
              return { ...i, quantity: i.quantity + 1}
            } else {
              return i
            }
          })
        }))} else {
          //debugger
          this.setState(prevState => {

       return {...prevState,
            selectedItems: [...prevState.selectedItems, {
              ...item, quantity: 1
            }]
        }
      }, () => console.log("new value for selectedState", this.state.selectedItems))
      }
    }


      decreaseSelectedItems = (item) => {

        // check to see if item is in selectedItems
          // if item isnt in selectedIItems, do nothing
          // if item is in selectedItems
            // if its quantity is one, remove the item from selectedItems
            // else its quantity is more than one, decrease its value by 1      
            const found = this.state.selectedItems.find(i => i.external_id === item.external_id)
            if (found) {
              if (item.quantity > 1) {
              this.setState(prevState => ({
                ...prevState,
                selectedItems: prevState.selectedItems.map(i => {
                  if (i.external_id === item.external_id) {
                    return { ...i, quantity: i.quantity - 1}
                  } else {
                    return i
                  }
                })
              })
              )
            }
            else {
              this.setState(prevState => ({
                ...prevState,
                selectedItems: prevState.selectedItems.filter(i => i.external_id !== item.external_id )
              }))
            } 
            
            }

        const newSelected = this.state.selectedItems.filter(piece => piece !== item)
        this.setState(prevState => ({
            ...prevState,
            selectedItems: newSelected
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
                 { this.state.auth.loggedIn ? < NavBar handleInputChange={this.handleInputChange} query={this.state.query} buttonClick={this.buttonClick} handleLogOut={this.handleLogOut} />: null}
                     <Switch>
                     <Route exact path="/" render={(routerProps) => <Login setLogin={this.setLogin} {...routerProps} handleLogin={this.handleLogin} signOut={this.props.signOut} user={this.props.user} auth={this.state.auth} signInWithGoogle={this.props.signInWithGoogle} />}/>
                     <Route exact path="/home" render={(routerProps) => <Home topIphoneCases={this.topIphoneCases} iphones={this.state.iphones} clothes={this.state.clothes} topClothes={this.topClothes} topShoes={this.topShoes} shoes={this.state.shoes} item={this.state.item} handleSelectClick={this.handleSelectClick} isAuthenticatedUser={this.isAuthenticatedUser} {...routerProps} setLogin={this.setLogin} /> }/>
                     <Route exact path="/profile" render={(routerProps) => <Profile {...routerProps} setLogin={this.setLogin} isAuthenticatedUser={this.isAuthenticatedUser}/>}/> 
                     <Route exact path="/shoppingcart" render={(routerProps) => <ShoppingCart {...routerProps} setLogin={this.setLogin} isAuthenticatedUser={this.isAuthenticatedUser} selectedItems={this.state.selectedItems} removeSelectedItems={this.removeSelectedItems}/>}/> 
    <Route exact path="/itemslist" render={(routerProps) => <ItemsList {...routerProps} decreaseSelectedItems={this.decreaseSelectedItems} setLogin={this.setLogin} isAuthenticatedUser={this.isAuthenticatedUser} item={this.state.item} handleSelectClick={this.handleSelectClick} randomItems={this.randomItems}/>} /> 
                     </Switch>

              
              </div>
        
    )
  }
}

export default withRouter(Routes);
