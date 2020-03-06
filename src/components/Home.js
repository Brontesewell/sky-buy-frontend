import React from 'react';
import Loading from './Loading'
 
class Home extends React.Component {

  state = {
    clickeditem: null
  }

  
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
    { this.props.isLoading('home') ? <Loading />:<div>

    <h1 className="home-title">SkyBuy☁️</h1>
    <h4 className="home-sub-title">Items of the Week</h4>
    <div className='iphonecase'>
    <h3 id="home-title">Top iPhone Cases:</h3>
            {this.props.iphones.map((item, key) => <div key={Math.random()} className='card-shop'> <h5>{item.name}</h5> <img id="img-cards" alt="" src={item.pic}></img> <h5> Price: ${item.price}</h5> </div>)}
    </div>

    <div className='clothes'>
        <h3 id="home-title">Top Clothes:</h3>
         {this.props.clothes.map((item, key) => <div key={Math.random()} className='card-shop'> <h5>{item.name}</h5> <img id="img-cards" alt="" src={item.pic}></img> <h5> Price: ${item.price}</h5> </div>)}
     </div>

     <div className='shoes'>
         <h3 id="home-title">Top Shoes:</h3>
         {this.props.shoes.map((item, key) => <div key={Math.random()} className='shoes-card'> <h5>{item.name}</h5> <img id="img-cards" alt="" src={item.pic}></img> <h5> Price: ${item.price}</h5> </div>)}
         </div>

    </div>}
    </div>
    )
  }
}
 
export default Home;
