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
    


<<<<<<< HEAD
   
=======
    incrementQuantity = () =>{
        
        console.log(this)
        this.setState(prevState => {
           return { clickeditem: {
                ...prevState.clickeditem,
                quantity: prevState.clickeditem.quantity ? prevState.clickeditem.quantity + 1 : 1
            }

        } 
    })
    }


    decrementQuantity = () =>{
        
        console.log(this)
        this.setState(prevState => {
           return { clickeditem: {
                ...prevState.clickeditem,
                quantity: prevState.clickeditem.quantity ? prevState.clickeditem.quantity - 1 : 0
            }

        } 
    })
    }
  
    componentDidMount() {
        
        this.props.randomItems()
    }

>>>>>>> 8ef6b1387cd380a3f149228e6a198f0d39f50d75


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
    

    return (
         <div >
   <h2>Avaliable Items</h2>
   <div className='card-container'></div>
        {this.state.clickeditem ?  <ItemInfo clickeditem={this.state.clickeditem} decrementQuantity={this.decrementQuantity} incrementQuantity={this.incrementQuantity} decreaseSelectedItems={this.props.decreaseSelectedItems} handleSelectClick={this.props.handleSelectClick} handleBackButton={this.handleBackButton}/> : this.props.item.map((item) => <ItemCard key={Math.random()} item={item} handleItemClick={this.handleItemClick}/>)}
         </div>
    )
  }
}
 

export default ItemsList;