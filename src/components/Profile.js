import React from 'react';
 
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
    return (
    <div>
    <h1>Hello @User</h1>

    <h4>Purchases:</h4>
    </div>
    )
  }
}
 
export default Profile;
