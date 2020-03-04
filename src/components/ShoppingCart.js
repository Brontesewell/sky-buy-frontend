import React from 'react';
import ItemCard from './ItemCard';
import BuyItems from './BuyItems'
import { Button } from 'react-bootstrap';
import {buyItems} from '../services/api'
 
class ShoppingCart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

componentCleanUp = () => {
  console.log("component clean up called")
  localStorage.setItem('selectedItems', JSON.stringify(this.props.selectedItems));
}


componentDidMount() {
      if (!localStorage.getItem("fire_token")) { 
        
          this.props.setLogin(false)
          this.props.history.push("/")
          
        } else {
    
          this.props.isAuthenticatedUser()
          this.props.updateStateFromShoppingCart();
          window.addEventListener('beforeunload', this.componentCleanUp)
        }
        console.log("Shopping Cart Mounted")

  }
  
  render() {
    console.log(this.props.selectedItems)
    
    return (
    <div className="shopping-cart">
      <br></br>
           <h1>Shopping Cart:</h1> 
      
    {this.props.selectedItems.map(item => <div className="shopping-div"> <div id="item-card-div"><h3 id="itemnameshop">{item.name}</h3> <img id="img-card-shopping"src={item.pic}></img></div>  <div id="quantity"><h3><strong>Quantity:</strong>{item.quantity}</h3></div> <div id="price"><br></br><h3><strong>Price per item:</strong> ${item.price}</h3><br></br><h3><strong>Total Price:</strong> ${(item.price) * (item.quantity)}</h3></div>  <div id="button-div"> <Button className="ui button fluid" onClick={() => this.props.removeSelectedItems(item)}> Delete Item </Button></div> </div>)}
          <br></br>
          <br></br>
    <h3><strong>Total Price:</strong> ${this.props.selectedItems.map(item => (item.price) * (item.quantity)).reduce((a, b) => a + b, 0)}</h3>
    <button onClick={() => {buyItems(this.props.selectedItems, localStorage.getItem("fire_token"), this.props.userId); this.props.removingAllSelectedItemsFromBuy(); this._onButtonClick()}} className="btn-lg btn-outline-primary" >Buy</button> 
    {this.state.showComponent ?
           <BuyItems /> :
           null
        }
         </div>
    )
  }
}

export default ShoppingCart;

