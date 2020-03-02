import React from 'react';
import ItemCard from './ItemCard'
import ItemInfo from './ItemInfo'
import { searchForItems } from '../services/api'
import { constructItems} from '../utilities/helpers'
 
class ItemsList extends React.Component {


    state = {
        clickeditem: null
    }
    


    componentDidMount() {
        
        this.props.randomItems()
    }



    handleItemClick = (item) => {
        this.setState({
            clickeditem: item
        })
    }

    handleBackButton = () => {
        this.setState({
            clickeditem: null
        })
	}
  render() {
    console.log(this.props.item)

    return (
         <div >
   <h2>Avaliable Items</h2>
   <div className='card-container'></div>
        {this.state.clickeditem ?  <ItemInfo clickeditem={this.state.clickeditem} handleSelectClick={this.props.handleSelectClick} handleBackButton={this.handleBackButton}/> : this.props.item.map((item) => <ItemCard key={Math.random()} item={item} handleItemClick={this.handleItemClick}/>)}
         </div>
    )
  }
}
 

export default ItemsList;