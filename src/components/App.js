import React from 'react';
import '../App.css';
import Routes from './Routes';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import {BrowserRouter as Router} from 'react-router-dom'

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const gProvider = new firebase.auth.GoogleAuthProvider();
gProvider.setCustomParameters({
  prompt: 'select_account'
}) 
const providers = {
  googleProvider: gProvider 
};

class App extends React.Component {
 

  componentDidMount() {
    
     // check to see if token, if so, authenticate
     
       
      


  }

  render() {
   
    return (
    <div>
     <Router>
     <Routes signInWithGoogle={this.props.signInWithGoogle} user={this.props.user} signOut={this.props.signOut} />
     </Router>
     

    </div>


    )
  }
}


export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
