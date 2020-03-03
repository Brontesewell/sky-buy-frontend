import React from 'react';
import ItemCard from './ItemCard'
import ItemInfo from './ItemInfo'
import {authInCompDidMount} from '../services/api'
 
class Home extends React.Component {

  componentDidMount() {
    if (!localStorage.getItem("fire_token")) { 
         
      this.props.setLogin(false)
      this.props.history.push("/")
         

    } else {

      this.props.isAuthenticatedUser()
      this.props.topIphoneCases()
     
    }
    console.log("Home Mounted")
   
  }

 

  state = {
    clickeditem: null
  }



handleItemClick = (item) => {
  this.setState({
      clickeditem: item
  })
}

handleBackButton = () => {
  this.setState({
      clickeditem: null
  })
}


  render() {
    return (
    <div>
    <h1 className="home-title">SkyBuy☁️</h1>
    <div className='iphonecase'>
    <h3 id="iphone-title">Top iPhone Cases:</h3>
        {this.state.clickeditem ?  <ItemInfo clickeditem={this.state.clickeditem} handleSelectClick={this.props.handleSelectClick} handleBackButton={this.handleBackButton}/> : this.props.item.map((item) => <ItemCard key={Math.random()} className="columnshome" item={item} handleItemClick={this.handleItemClick} />)}
         </div>
     <h3 id="iphone-title">Top Clothes:</h3>
    </div>
    )
  }
}
 
export default Home;
