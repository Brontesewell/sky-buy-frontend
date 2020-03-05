import React, {Component} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import {buyItems} from '../services/api'

// stripe test card num 4000 0025 0000 3155


class Checkout extends Component {

    onToken = (token) => {
        fetch('/save-stripe-token', {
          method: 'POST',
          body: JSON.stringify(token),
        }).then(response => {
          response.json().then(data => {
            alert(`We are in business, ${data.email}`);
          });
        });
      }

    onClosed = () => {
        buyItems(this.props.selectedItems, localStorage.getItem("fire_token"), this.props.userId)
        // clear cart
        this.props.removingAllSelectedItemsFromBuy()
        this.props.updatePurchaseSuccess(true)
    }  

    render() {
        return (
          // ...
          <StripeCheckout
            token={this.onToken}
            stripeKey="pk_test_GAarGnWbeSB4S407vJtXTLzJ"
            name="SkyBuy"
            description="Earth's greatest E-commerce Entity"
            amount={this.props.total * 100}
            currency="CNY"
            componentClass="div"
            locale="en"
            email="support@skyBuy.com"
            shippingAddress={true}
            billingAddress={false}
            zipcode={false}
            alipay={true}
            bitcoin={true}
            allowRememberMe={true}
            reconfigureOnUpdate={false}
            closed={this.onClosed}


          />
        )
      }
    }
   
export default Checkout