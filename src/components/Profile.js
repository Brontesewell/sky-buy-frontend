import React from 'react';
 
class Profile extends React.Component {


    componentDidMount() {
      if (!localStorage.getItem("fire_token")) { 
       
          this.props.setLogin(false)
          this.props.history.push("/")
             
    
        } else {
    
          this.props.isAuthenticatedUser()
         
        }
        console.log("ItemsList Mounted")
  }
  

  render() {
    return (
    <div>
    <h1>Profile Page</h1>
    </div>
    )
  }
}
 
export default Profile;
