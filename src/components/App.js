import React from 'react';
import '../App.css';
import Routes from './Routes';


class App extends React.Component {
  state = {
    items: [
      { id: 1, title: 'Computer' },
      { id: 2, title: 'iPhone' },
      { id: 3, title: 'Head Phones' }
    ]
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
