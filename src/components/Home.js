import React from 'react';

import {authInCompDidMount} from '../services/api'
 
class Home extends React.Component {

  componentDidMount() {
    if (!localStorage.getItem("fire_token")) { 
         
      this.props.setLogin(false)
      this.props.history.push("/")
         

    } else {

      this.props.isAuthenticatedUser()
     
    }
    console.log("Home Mounted")
   
  }

  render() {
    return (
    <div>
    <h1>Home Page</h1>
    </div>
    )
  }
}
 
export default Home;
