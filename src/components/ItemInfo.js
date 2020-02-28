import React from 'react';
import { Button } from 'react-bootstrap';
 
class ItemsCard extends React.Component {
  render() {
    console.log(this.props.item)
    return (
        
        <div>
            <div className="item-info">
        <h1>MORE INFO ON PROUDUCT</h1>
    <h3>{this.props.item.title}</h3>
    <Button className="btn btn-secondary" onClick={() => this.props.handleBackButton()}>Back</Button>
    <Button className="ui button fluid" onClick={() => this.props.handleSelectClick(this.props.item)}> Add to Shopping Cart </Button>
    </div>
    
    </div>
    )
  }
}
 
export default ItemsCard;