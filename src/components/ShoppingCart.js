import React from 'react';
import { Button } from 'react-bootstrap';
import Checkout from './Checkout';
 
class ShoppingCart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      purchaseSuccess: false

    };
  
  }

updatePurchaseSuccess = (newValue) => {
   this.setState(prevState => {
     return {
       ...prevState,
       purchaseSuccess: newValue
     }
   })
}  

componentCleanUp = () => {
  
  localStorage.setItem('selectedItems', JSON.stringify(this.props.selectedItems));
}


componentDidMount() {
      if (!localStorage.getItem("fire_token")) { 
        
          this.props.setLogin(false)
          this.props.history.push("/")
          
        } else {
    
          this.props.isAuthenticatedUser()
          this.props.updateStateFromShoppingCart();
          this.updatePurchaseSuccess(false)
          window.addEventListener('beforeunload', this.componentCleanUp)
        }
        

  }

  calculateItemPrice = () => {

    return this.props.selectedItems.map(item => (item.price) * (item.quantity + 1)).reduce((a, b) => a + b, 0)

  }
  
  render() {
  
    
    const { t } = this.props;
    return (

    <div className="shopping-cart">
      <br></br>
      <h1>Shopping Cart</h1>
      
    {this.props.selectedItems.map(item => <div className="shopping-div" key={Math.random()}> <div id="item-card-div"><h3 id="itemnameshop">{item.name} </h3> <img id="img-card-shopping"src={item.pic}></img></div>  <div id="quantity"><h3><strong>Quantity:</strong>{item.quantity +1}</h3></div> <div id="price"><br></br><h3><strong>Price per item:</strong> ${item.price}</h3><br></br><h3><strong>Total Price:</strong> ${(item.price) * (item.quantity)}</h3></div>  <div id="button-div"> <Button className="ui button fluid" onClick={() => this.props.removeSelectedItems(item)}> Delete Item </Button></div> </div>)}
          <br></br>
          <br></br>
         {this.props.selectedItems.length > 0 && <Checkout selectedItems={this.props.selectedItems} updatePurchaseSuccess={this.updatePurchaseSuccess} userId={this.props.userId} removingAllSelectedItemsFromBuy={this.props.removingAllSelectedItemsFromBuy} total={this.calculateItemPrice()} />}

    {this.props.selectedItems.length > 0 ? <h3><strong>Total Price:</strong> ${this.calculateItemPrice()}</h3> : <h3></h3>}
 
     {this.state.purchaseSuccess && <p>Purchase Success!</p>}
         </div>
    )
  }
  
}

export default ShoppingCart


