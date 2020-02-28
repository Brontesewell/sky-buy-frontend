import React from 'react';
import ItemCard from './ItemCard';
 
class ShoppingCart extends React.Component {
  
  render() {
    console.log(this.props.selectedItems)
    return (
    <div>
      <div className="row bot-army-row">
           <h1>Shopping Cart:</h1> 
          {this.props.selectedItems.map(item => <ItemCard item={item} handleItemClick={this.props.removeSelectedItems}/>)}
          </div>
          </div>
    )
  }
}


 
export default ShoppingCart;

