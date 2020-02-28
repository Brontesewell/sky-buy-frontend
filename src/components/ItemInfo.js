import React from 'react';
// import ShoppingCart from './ShoppingCart';
 
class ItemsCard extends React.Component {
  render() {
    console.log(this.props.item)
    return (
        
        <div>
            <div className="item-info">
        <h1>MORE INFO ON PROUDUCT</h1>
    <h3>{this.props.item.title}</h3>
    <button className="ui button fluid" onClick={() => this.props.handleBackButton()}>Back</button>
    <button className="ui button fluid" onClick={() => this.props.handleSelectClick(this.props.item)}> Add to Shopping Cart </button>
    </div>
    
    </div>
    )
  }
}
 
export default ItemsCard;