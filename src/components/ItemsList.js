import React from 'react';
import ItemCard from './ItemCard'
import ItemInfo from './ItemInfo'
import { searchForItems } from '../services/api'
import { constructItems} from '../utilities/helpers'
import { Form, Button, FormControl } from 'react-bootstrap';
 
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
  <br></br>
<h2 id="title-itemslist" >Search for any Items</h2>
<Form inline >
    <div className="search-box">
   <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(event) => this.props.handleInputChange(event)}/>
   <Button variant="outline-primary"  onClick={this.props.buttonClick}>Search</Button>
   </div>
 </Form>
 <br></br>
     <br></br>
<h3 id="recommended-itemslist">Recommended Items:</h3>
<div className='card-container'></div>
        {this.state.clickeditem ?  <ItemInfo clickeditem={this.state.clickeditem} decrementQuantity={this.decrementQuantity} incrementQuantity={this.incrementQuantity} decreaseSelectedItems={this.props.decreaseSelectedItems} handleSelectClick={this.props.handleSelectClick} handleBackButton={this.handleBackButton}/> : this.props.item.map((item) => <ItemCard key={Math.random()} item={item} handleItemClick={this.handleItemClick}/>)}
         </div>
    )
  }
}
 

export default ItemsList;
