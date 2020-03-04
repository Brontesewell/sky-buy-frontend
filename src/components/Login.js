import React, {Component} from 'react'
import {authenticate, authInCompDidMount} from '../services/api'


class Login extends Component {
   




  render() {
      
      
      
      return <div>

<h1 className="login-title">SkyBuy☁️</h1>
<br></br>
           { !this.props.auth.loggedIn && <button onClick={() => 
            {
              
              
              this.props.signInWithGoogle().then(data => {
                console.log("signed in with google", data.credential.idToken)
                
                // set token
                
                localStorage.setItem("fire_token", data.credential.idToken)
                this.props.setLogin(true)
                // set auth status 
                // redirect to Home
                this.props.history.push("/home")
                
                
              }).catch(err => console.log(err))
            
            
            }   } id="login-button" className="btn btn-outline-primary btn-lg" >Sign In With Google</button>}  
      </div>
  }






} 

export default Login