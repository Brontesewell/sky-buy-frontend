import React from 'react';
import ItemCard from './ItemCard';
import { Button } from 'react-bootstrap';
 
class ShoppingCart extends React.Component {
  
  render() {
    console.log(this.props.selectedItems)
    return (
    <div className="shopping-cart">
           <h1>Shopping Cart:</h1> 
      <div className="shopping-cart">
    {this.props.selectedItems.map(item => <div className="shopping-div"> <div id="item-card-div"><h2>{item.name}</h2> <img id="img-card-shopping"src={item.pic}></img></div> <div id="price"><h3>Price: ${item.price}</h3></div>  <div id="button-div"> <Button className="ui button fluid" onClick={() => this.props.removeSelectedItems(item)}> Delete Item </Button></div> </div>)}
          </div>
    <h3> Total Price: ${this.props.selectedItems.map(item => item.price)}</h3>
          </div>
    )
  }
}
// handleItemClick={this.props.removeSelectedItems}

 
export default ShoppingCart;

