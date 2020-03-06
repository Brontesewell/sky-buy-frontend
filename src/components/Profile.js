import React from 'react';
import ItemsCard from './ItemCard'; 
import EditAddress from './EditAddress.js'
import Loading from "./Loading"

class Profile extends React.Component {


    componentDidMount() {
      if (!localStorage.getItem("fire_token")) { 
       
          this.props.setLogin(false)
          this.props.history.push("/")
             
    
        } else {
    
          this.props.isAuthenticatedUser()
         
        }
        
  }
  

  render() {
    
    const {first_name, last_name, address} = this.props.profile

    return (
    
  <div>
   
  {this.props.isLoading("profile") ? <Loading /> : <div>
     
  <h1 className="profile" id="profile-name">{first_name} {last_name}'s Profile</h1>
    <EditAddress address={address} updateAddress={this.props.updateAddress} />
    <h4 className="profile">Purchases:</h4>
      {this.props.items.map(item => <ItemsCard key={Math.random()} item={item} onHandleClick={this.props.onHandleClick} />)}
    </div>
    }
    </div>
    )
  }
}
 
export default Profile;
