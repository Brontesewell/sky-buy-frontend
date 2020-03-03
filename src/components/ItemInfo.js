import React from 'react';
import { Button } from 'react-bootstrap';
 
class ItemsCard extends React.Component {
  render() {
    debugger
    return (
        
        <div>
            <div className="item-info">
        <h1>MORE INFO ON PRODUCT</h1>
    <h3>{this.props.clickeditem.name}</h3>
    <h4>Price: ${this.props.clickeditem.price}</h4>
    <h4>delivery fee: ${this.props.clickeditem.delivery_fee}</h4>
    <img id="img-cards" alt="" src={this.props.clickeditem.pic}></img>
    <br></br>
    <br></br>
    <Button className="btn btn-secondary" onClick={() => this.props.handleBackButton()}>Back</Button>

    <div className="quantity">
      Add To Shopping Cart: 
    <Button className="ui button fluid" onClick={() => {
      
      // increment by 1
     
      this.props.handleSelectClick(this.props.clickeditem)
    
    
    }}> + </Button>
    {this.props.clickeditem.quantity ? this.props.clickeditem.quantity : 0}
    <Button className="ui button fluid" > - </Button>
    </div>

    </div>
    
    </div>
    )
  }
}
 
export default ItemsCard;