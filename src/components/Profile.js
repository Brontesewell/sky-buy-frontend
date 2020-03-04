import React from 'react';
import ItemsCard from './ItemCard'; 

class Profile extends React.Component {


    componentDidMount() {
      if (!localStorage.getItem("fire_token")) { 
       
          this.props.setLogin(false)
          this.props.history.push("/")
             
    
        } else {
    
          this.props.isAuthenticatedUser()
         
        }
        console.log("Profile Mounted")
  }
  

  render() {
    console.log("profile props in render method: ", this.props)
    const {first_name, last_name, address} = this.props.profile

    return (
    <div > 
  <h1 class="profile" id="profile-name">{first_name} {last_name}'s Profile</h1>
  
    <h4 class="profile">Purchases:</h4>
      {this.props.items.map(item => <ItemsCard key={Math.random()} item={item} onHandleClick={this.props.onHandleClick} />)}
    </div>
    )
  }
}
 
export default Profile;
