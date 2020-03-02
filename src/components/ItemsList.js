import React from 'react';
import ItemCard from './ItemCard'
import ItemInfo from './ItemInfo'
 
class ItemsList extends React.Component {

    state = {
        item: null
    }

    

    handleItemClick = (item) => {
        this.setState({
            item: item
        })
    }

    handleBackButton = () => {
        this.setState({
            item: null
        })
	}
  render() {
    console.log(this.props.items)

    return (
         <div >
   <h2>Avaliable Items</h2>
   <div className='card-container'></div>
        {this.state.item ?  <ItemInfo item={this.state.item} handleSelectClick={this.props.handleSelectClick} handleBackButton={this.handleBackButton}/> : this.props.item.map((item) => <ItemCard key={Math.random()} item={item} handleItemClick={this.handleItemClick} filteredData={this.props.filteredData}/> )}
         </div>
    )
  }
}
 

export default ItemsList;