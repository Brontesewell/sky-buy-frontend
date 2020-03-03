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
      this.props.topClothes()
      this.props.topShoes()
     
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
    <h3 id="home-title">Top iPhone Cases:</h3>
            {this.props.iphones.map((item) => <ItemCard key={Math.random()} className="columnshome" item={item} handleItemClick={this.handleItemClick} />)}
    </div>

    <div className='clothes'>
        <h3 id="home-title">Top Clothes:</h3>
         {this.props.clothes.map((item) => <ItemCard key={Math.random()} className="columnshome" item={item} handleItemClick={this.handleItemClick} />)}
     </div>

     <div className='shoes'>
         <h3 id="home-title">Top Shoes:</h3>
         {this.props.shoes.map((item) => <div key={Math.random()} className='card'> <h5>{this.props.item.name}</h5> <img id="img-cards" alt="" src={this.props.item.pic}></img> <h5> Price: ${this.props.item.price}</h5> </div>)}
         </div>

    </div>
    )
  }
}
 
export default Home;
