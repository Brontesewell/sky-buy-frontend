import React from 'react';
import { Button } from 'react-bootstrap';
 
class ItemsCard extends React.Component {
  render() {
    console.log(this.props.item)
    return (
        
        <div>
            <div className="item-info">
        <h1>MORE INFO ON PRODUCT</h1>
    <h3>{this.props.item.name}</h3>
    <h4>Price: ${this.props.item.price}</h4>
    <h4>delivery fee: ${this.props.item.delivery_fee}</h4>
    <img id="img-cards" alt="" src={this.props.item.pic}></img>
    <br></br>
    <Button className="btn btn-secondary" onClick={() => this.props.handleBackButton()}>Back</Button>
    <Button className="ui button fluid" onClick={() => this.props.handleSelectClick(this.props.item)}> Add to Shopping Cart </Button>
    </div>
    
    </div>
    )
  }
}
 
export default ItemsCard;