import React from 'react';
 
class ItemsCard extends React.Component {
  render() {
    console.log(this.props.items)
    return (
        <div>
        <div className='card' onClick={() => this.props.handleItemClick(this.props.item)}>
    <h3>{this.props.item.title}</h3>
    </div>
    </div>
    )
  }
}
 
export default ItemsCard;