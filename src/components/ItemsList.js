import React from 'react';
import ItemCard from './ItemCard'
import ItemInfo from './ItemInfo'
import { searchForItems } from '../services/api'
import { constructItems} from '../utilities/helpers'
 
class ItemsList extends React.Component {

    componentDidMount() {
        
        if (!localStorage.getItem("fire_token")) { 
         
            this.props.setLogin(false)
            this.props.history.push("/")
               
      
          } else {
      
            this.props.isAuthenticatedUser()
            this.props.randomItems()
          }
          console.log("ItemsList Mounted")
    }

    state = {
        clickeditem: null
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
        {this.state.clickeditem ?  <ItemInfo clickeditem={this.state.clickeditem} handleSelectClick={this.props.handleSelectClick} handleBackButton={this.handleBackButton}/> : this.props.item.map((item) => <ItemCard key={Math.random()} item={item} handleItemClick={this.handleItemClick} filteredData={this.props.filteredData}/> )}
         </div>
    )
  }
}
 

export default ItemsList;