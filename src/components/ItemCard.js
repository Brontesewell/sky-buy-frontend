import React from 'react';
 
class ItemsCard extends React.Component {
  render() {
   
    return (
        <div>
    <div className='card' onClick={() => this.props.handleItemClick(this.props.item)}>
    <h5>{this.props.item.name}</h5>
    <img id="img-cards" alt="" src={this.props.item.pic}></img>
    <br></br>
    <h5> Price: ${this.props.item.price}</h5>
    </div>
    </div>
    )
  }
}
 
export default ItemsCard;