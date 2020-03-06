import React from 'react';
import ItemInfo from './ItemInfo'
import ToggleSearch from './ToggleSearch'
import Loading from './Loading';

 
class ItemsList extends React.Component {

    componentDidMount() {

       
        
        if (!localStorage.getItem("fire_token")) { 
         
            this.props.setLogin(false)
            this.props.history.push("/")
               
      
          } else {
      
            this.props.isAuthenticatedUser()
            this.props.randomItems()
          }
          
    }

    state = {
        clickeditem: null
    }
    


    incrementQuantity = () =>{
        
        
        this.setState(prevState => {
           return { clickeditem: {
                ...prevState.clickeditem,
                quantity: prevState.clickeditem.quantity ? prevState.clickeditem.quantity + 1 : 1
            }

        } 
    })
    }


    decrementQuantity = () =>{
        
        
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

        <div>
         {this.props.isLoading('itemsList') ? <div><ToggleSearch query={this.props.query}  item={this.props.item} handleInputChange={this.props.handleInputChange} buttonClick={this.props.buttonClick} handleItemClick={this.handleItemClick}/><Loading /></div> :<div >

<div className='card-container'></div>
        {this.state.clickeditem ?  <ItemInfo clickeditem={this.state.clickeditem} decrementQuantity={this.decrementQuantity} incrementQuantity={this.incrementQuantity} decreaseSelectedItems={this.props.decreaseSelectedItems} handleSelectClick={this.props.handleSelectClick} handleBackButton={this.handleBackButton}/> : <ToggleSearch query={this.props.query} handleInputChange={this.props.handleInputChange} buttonClick={this.props.buttonClick}  item={this.props.item} handleItemClick={this.handleItemClick}/>}
         </div>}
</div>
    )
  }
}
 

export default ItemsList;
