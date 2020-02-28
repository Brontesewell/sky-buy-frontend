import React from 'react';
import '../App.css';
import Routes from './Routes';
import {searchForItems} from '../services/api.js'
import {constructItems} from '../utilities/helpers.js'


class App extends React.Component {
  state = {
    ownedItems: [
      { id: 1, title: 'Computer' },
      { id: 2, title: 'iPhone' },
      { id: 3, title: 'Head Phones' }
    ],
     searchedItems: []
  }

  componentDidMount() {
    searchForItems("cat", 1).then(data => this.setState(prevState => {
     return {
      ...prevState,
      searchedItems: constructItems(data["result"]["item"]) 
     } 

    }))
  } 

  render() {
    console.log(this.state.items)
    return(  
      
    <div> 
      
                < Routes />
              </div>
              
    )
  }
}

export default App;
