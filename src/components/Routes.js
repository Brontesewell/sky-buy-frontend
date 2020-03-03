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
    item: [],
    query: "",
    clothes: [],
    iphones: [],
    shoes: []
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
            const found = this.state.selectedItems.find(i => i.external_id === item.id)
            if (found) {
              if (item.quantity > 1) {
              this.setState(prevState => ({
                ...prevState,
                selectedItems: prevState.map(i => {
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
                selectedItems: prevState.filter(i => i.external_id !== item.external_id )
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
    console.log(this.props)
    return (  
        <Router>
              <div> 
        < NavBar handleInputChange={this.handleInputChange} query={this.state.query} buttonClick={this.buttonClick}/>
                    {/* <route path="" render={(routerProps) => <Welcom />}></route> */}
                     {/* <route path="" render={(routerProps) => <Login />}></route>
                     <route path="" render={(routerProps) => <SignUp/>}></route>  */}
                     <Route path="/home" render={(routerProps) => <Home topIphoneCases={this.topIphoneCases} iphones={this.state.iphones} clothes={this.state.clothes} topClothes={this.topClothes} topShoes={this.topShoes} shoes={this.state.shoes} item={this.state.item} handleSelectClick={this.handleSelectClick}/>}/>
                     <Route path="/profile" render={(routerProps) => <Profile/>}/> 
                     <Route path="/shoppingcart" render={(routerProps) => <ShoppingCart selectedItems={this.state.selectedItems} removeSelectedItems={this.removeSelectedItems}/>}/> 
                     {/* <route path="/itemsearch" render={(routerProps) => <itemsSearch/>}></route>  */}
                     <Route path="/itemslist" render={(routerProps) => <ItemsList item={this.state.item} handleSelectClick={this.handleSelectClick} randomItems={this.randomItems}/>}/> 
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
