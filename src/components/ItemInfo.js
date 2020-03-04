import React from 'react';
import { Button } from 'react-bootstrap';
 
class ItemsCard extends React.Component {
  render() {
    //debugger
    return (
        
        <div>
            <div>
    <h1 className="item-info">{this.props.clickeditem.name}</h1>
        <div id="item-information">
    <h3>Price: ${this.props.clickeditem.price}</h3>
    <h3>Delivery fee: ${this.props.clickeditem.delivery_fee}</h3>
    <h3>How many SkyBuy have Sold: {this.props.clickeditem.sales}</h3>
    <h3>Manufacture Location: {this.props.clickeditem.location}</h3>
    <h3>Manufacture Shop Name: {this.props.clickeditem.shop_name}</h3>
   
<br></br>
<br></br>
<div>
    <div className="quantity">
      <strong>Add To Shopping Cart:</strong>
    <Button className="ui button fluid" onClick={() => {
      
      // increment by 1, call parent function
      this.props.incrementQuantity()
     
      this.props.handleSelectClick(this.props.clickeditem)
      
      
    }}> + </Button>
    {this.props.clickeditem.quantity ? this.props.clickeditem.quantity : <strong> 0 </strong>}
    <Button className="ui button fluid" onClick={() => {
      
      this.props.decrementQuantity()
      
      
      this.props.decreaseSelectedItems(this.props.clickeditem)
    }} > - </Button>
    </div>
    
    <br></br>
    <Button className="btn btn-secondary btn-lg" onClick={() => this.props.handleBackButton()}>Back</Button>

    </div>
    </div>
    <div id="item-image">
    <img id="image-info" alt="" src={this.props.clickeditem.pic}></img>
    </div>
    </div>
    </div>
    )
  }
}
 
export default ItemsCard;