import React from 'react';
import ItemCard from './ItemCard';
import { Button } from 'react-bootstrap';
 
class ShoppingCart extends React.Component {
  
  render() {
    console.log(this.props.selectedItems)
    return (
    <div>
      <div className="row bot-army-row">
           <h1>Shopping Cart:</h1> 
          {this.props.selectedItems.map(item => <div><ItemCard item={item}/> <Button className="ui button fluid" onClick={() => this.props.removeSelectedItems(this.props.item)}> Delete Item </Button> </div>)}
          
          </div>
          </div>
    )
  }
}
// handleItemClick={this.props.removeSelectedItems}

 
export default ShoppingCart;

