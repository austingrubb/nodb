import React, { Component } from 'react';
import StateFull from './components/StateFull';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';
import RandomTrumpQuotes from './components/Random'
import Personalized from './components/Personalized'
const baseUrl = '/api/get_all_Groceries'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      item: "",
      type: "Healthy Food",
      groceries: [],
      price: '',
      updatedPrice: null,
      name: "austin",
      id: 0,
      text: ''
     }
    this.updateGroceries = this.updateGroceries.bind( this );
    this.deleteGroceries = this.deleteGroceries.bind( this );
    this.createGroceries = this.createGroceries.bind( this );
    this.groceriesType = this.groceriesType.bind( this );
    this.personalizedQuote = this.personalizedQuote.bind(this);
  }

  componentDidMount(){
    axios.get('/api/get_all_Groceries').then(response => {
      console.log(response)
      this.setState({
        groceries: response.data
      })
    })
  }

  randomTrumpQuotes = () =>{
    axios.get(`https://api.whatdoestrumpthink.com/api/v1/quotes/random`).then((response) =>{
      this.setState({
        randomTrumpQuotesArr: response.data.message
      })
    }) 
  } 

  personalizedQuote(name) {
    console.log(name)
    axios.get(`https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=${name}`).then((response) =>{
      console.log(response)
      this.setState({
        personalizedQuote: response.data.message
    })
    })    
  }

  updateGroceries(id, price) {
    console.log(id, price)
    axios.put(`${baseUrl}?id=${id}`,{price} ).then(response => {
      this.setState({
        groceries:response.data
        })
      })
    }
  deleteGroceries(id) {
    console.log('this got hit')
    axios.delete(`${baseUrl}/${id}`).then(response => {
      // console.log(response.data)
      this.setState({
        groceries:response.data
      })
    })
  }
 createGroceries() {
   console.log(this.state)
      let newGroceries = {
      type: this.state.type,
      item: this.state.item,
      price: this.state.price
    }
  axios.post(`${baseUrl}`, newGroceries).then(response =>{
    //console.log(response)
    console.log(response.data)
    this.setState({
      groceries: response.data,
      type: 'Healthy Food',
      item: '',
      price: '',
    })
  }).catch( err => console.log(err))

}
groceriesType = (pt) =>{
  this.setState({
    type: pt
  })
}

handleChange = (key,value) =>{
  this.setState({[key]:value})
}
 render() {
  let Junk = this.state.groceries.map(groceries => {
    console.log(groceries.type)
        if(groceries.type === 'Healthy Food'){
          return <StateFull
                  key={groceries.id}
                  id={groceries.id}
                  type={groceries.type}
                  item={groceries.item}
                  price={groceries.price}
                  updatedPrice = {this.state.updatedPrice}
                  updateGroceries ={this.updateGroceries}
                  handleChange ={this.handleChange}
                  deleteGroceries ={this.deleteGroceries}
                />
       }})
       let healthyFood =  this.state.groceries.map(groceries => {
         console.log(groceries.type)
        if(groceries.type === 'Junk Food'){
          return <StateFull
                  key={groceries.id}
                  id={groceries.id}
                  type={groceries.type}
                  item={groceries.item}
                  price={groceries.price}
                  updatedPrice = {this.state.updatedPrice}
                  updateGroceries ={this.updateGroceries}
                  handleChange ={this.handleChange}
                  deleteGroceries ={this.deleteGroceries}
                />
       }})
      //  console.log(this.state.updatedPrice)
 return (
      <div className='Groceries-list'>
        <Header/>
        <div className='weather'>
        <Weather/>
        </div>
        <div>
        <div className='grocery-input-container'>
        <div className='grocery-dropdown'>
          <select onChange={(e) => this.groceriesType(e.target.value)} value={this.state.type}>
            <option value="Healthy Food">Healthy Food</option>,
            <option value="Junk Food">Junk Food</option>
          </select>
        </div>
            <input onChange={(e) => this.handleChange("item",e.target.value)} value={this.state.item}placeholder='Item Name'/>
            <input onChange={(e) => this.handleChange("price",e.target.value)} value={this.state.price}placeholder='Item Price'/>
            <button onClick={this.createGroceries}>Add Groceries</button>
        </div>
        <div className='food-container'>
          <div>
            {Junk}
          </div>
          <div>
            {healthyFood}
          </div>
        </div>
        </div>
        <RandomTrumpQuotes randomTrumpQuotesArr={this.state.randomTrumpQuotesArr}  randomTrumpQuotes={this.randomTrumpQuotes}/>
        <Personalized personalizedQuoteString={this.state.personalizedQuote} personalizedQuote={this.personalizedQuote}/>
      </div>
   );
  }
 }
 

export default App;
