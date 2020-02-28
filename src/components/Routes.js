import React from 'react';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
import NavBar from './NavBar';
import Profile from './Profile';
import Home from './Home';
import ShoppingCart from './ShoppingCart'
import ItemsList from './ItemsList'


class Routes extends React.Component {
  state = {
    selectedItems: [],
      item: [
        { id: 1, title: 'Computer' },
        { id: 2, title: 'iPhone' },
        { id: 3, title: 'Head Phones' }
      ]
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
    console.log(this.props)
    return (  
        <Router>
              <div> 
        < NavBar />
                    {/* <route path="" render={(routerProps) => <Welcom />}></route> */}
                     {/* <route path="" render={(routerProps) => <Login />}></route>
                     <route path="" render={(routerProps) => <SignUp/>}></route>  */}
                     <Route path="/home" render={(routerProps) => <Home />}/>
                     <Route path="/profile" render={(routerProps) => <Profile/>}/> 
                     <Route path="/shoppingcart" render={(routerProps) => <ShoppingCart selectedItems={this.state.selectedItems} removeSelectedItems={this.removeSelectedItems}/>}/> 
                     {/* <route path="/itemsearch" render={(routerProps) => <itemsSearch/>}></route>  */}
                     <Route path="/itemslist" render={(routerProps) => <ItemsList item={this.state.item} handleSelectClick={this.handleSelectClick}/>}/> 
                     {/* <route path="" render={(routerProps) => <ItemsCard/>}></route>  */}
                     {/* <route path="" render={(routerProps) => <itemInfo/>}></route>  */}

                {/* {true ? < NavBar />: null} */}
                
              </div>
                </Router>
    )
  }
}

export default Routes;
