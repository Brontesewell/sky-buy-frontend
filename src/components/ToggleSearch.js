import React from 'react';
import ItemCard from './ItemCard'
import ItemInfo from './ItemInfo'
import { searchForItems } from '../services/api'
import { constructItems} from '../utilities/helpers'
import { Form, Button, FormControl } from 'react-bootstrap';
 
class ToogleSearch extends React.Component {


  render() {
    

    return (
         <div >
  <br></br>
<h2 id="title-itemslist" >Search for any Items</h2>
<Form inline >
    <div className="search-box">
   <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(event) => this.props.handleInputChange(event)}/>
   <Button variant="outline-primary"  onClick={this.props.buttonClick}>Search</Button>
   </div>
 </Form>
 <br></br>
     <br></br>
<h3 id="recommended-itemslist">Recommended Items:</h3>
<div className='card-container'></div>

        { this.props.item.map((item) => <ItemCard key={Math.random()} item={item} handleItemClick={this.props.handleItemClick}/>)}
         </div>
    )
  }
}
 

export default ToogleSearch;
