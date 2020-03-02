import React from 'react';
 
class ItemsCard extends React.Component {
  render() {
    console.log(this.props.items)
    return (
        <div>
    {/* <div>{this.props.filteredData.map(i => <p>{i.name}</p>)}</div> */}
    <div className='card' onClick={() => this.props.handleItemClick(this.props.item)}>
    <h3>{this.props.item.name}</h3>
    <img id="img-cards" alt="" src={this.props.item.pic}></img>
    <h5> Price: ${this.props.item.price}</h5>
    </div>
    </div>
    )
  }
}

 
export default ItemsCard;