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
        { id: 1, name: 'Computer', price: 15, pic: 'https://images.unsplash.com/photo-1525385444278-b7968e7e28dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' },
        { id: 2, name: 'iPhone', price: 10, pic: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' },
        { id: 3, name: 'Head Phones', price: 20, pic: 'https://images.unsplash.com/photo-1562770584-eaf50b017307?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2663&q=80' }
    ],
    query: "",
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
       item: constructItems(data["result"]["item"]) 
      }}))
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
        < NavBar handleInputChange={this.handleInputChange} query={this.state.query} buttonClick={this.buttonClick}/>
                    {/* <route path="" render={(routerProps) => <Welcom />}></route> */}
                     {/* <route path="" render={(routerProps) => <Login />}></route>
                     <route path="" render={(routerProps) => <SignUp/>}></route>  */}
                     <Route path="/home" render={(routerProps) => <Home />}/>
                     <Route path="/profile" render={(routerProps) => <Profile/>}/> 
                     <Route path="/shoppingcart" render={(routerProps) => <ShoppingCart selectedItems={this.state.selectedItems} removeSelectedItems={this.removeSelectedItems}/>}/> 
                     {/* <route path="/itemsearch" render={(routerProps) => <itemsSearch/>}></route>  */}
                     <Route path="/itemslist" render={(routerProps) => <ItemsList item={this.state.item} handleSelectClick={this.handleSelectClick} filteredData={this.state.filteredData}/>}/> 
                     {/* <route path="" render={(routerProps) => <ItemsCard/>}></route>  */}
                     {/* <route path="" render={(routerProps) => <itemInfo/>}></route>  */}

                {/* {true ? < NavBar />: null} */}
                {/* <div>{this.props.filteredData.map(i => <p>{i.name}</p>)}</div> */}
              </div>
                </Router>
    )
  }
}

export default Routes;
