import React, { Component } from 'react';
import StateFull from './components/StateFull';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Weather from './components/Weather';
import RandomTrumpQuotes from './components/Random'
const baseUrl = '/api/get_all_Groceries'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      item: "",
      type: "Heathy",
      groceries: [],
      price: null,
      updatedPrice: null,
      name: "austin",
      id: 0,
      text: ''
     }
    this.updateGroceries = this.updateGroceries.bind( this );
    this.deleteGroceries = this.deleteGroceries.bind( this );
    this.createGroceries = this.createGroceries.bind( this );
    this.groceriesType = this.groceriesType.bind( this );
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
    axios.get(`https://api.whatdoestrumpthink.com/api/` + 'v1/quotes/random').then((response) =>{
      this.setState({
        randomTrumpQuotesArr: response.data.message
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
   
    })
  })

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
  let newGroceries = this.state.groceries.map(groceries => {
        return (<StateFull
                  key={groceries.id}
                  id={groceries.id}
                  type={groceries.type}
                  item={groceries.item}
                  price={groceries.price}
                  updatedPrice = {this.state.updatedPrice}
                  updateGroceries ={this.updateGroceries}
                  handleChange ={this.handleChange}
                  deleteGroceries ={this.deleteGroceries}
                />)
       })
       console.log(this.state.updatedPrice)
 return (
      <div className='Groceries-list'>
        <Header/>
        <Weather/>
        <RandomTrumpQuotes randomTrumpQuotesArr={this.state.randomTrumpQuotesArr}  randomTrumpQuotes={this.randomTrumpQuotes}/>
        <div>
          <select onChange={(e) => this.groceriesType(e.target.value)} >
            <option>Heathy Food</option>,
            <option>Junk Food</option>
          </select>
         <input onChange={(e) => this.handleChange("item",e.target.value)}/>
         <input onChange={(e) => this.handleChange("price",e.target.value)}/>
        <button onClick={this.createGroceries}>Add Groceries</button>
        <ol>
          {newGroceries}
        </ol>
        </div>
        <Footer/>
      </div>
   );
  }
 }
 

export default App;
