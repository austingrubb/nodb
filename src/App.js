import React, { Component } from 'react';
import StateFull from './components/StateFull';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Weather from './components/Weather';
const baseUrl = '/api/get_all_parts'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      item: "",
      type: "Performance",
      carParts: [],
      price: null,
      updatedPrice: null
     }
    this.updatePart = this.updatePart.bind( this );
    this.deletePart = this.deletePart.bind( this );
    this.createPart = this.createPart.bind( this );
    this.partType = this.partType.bind( this );
  }

  componentDidMount(){
    axios.get('/api/get_all_parts').then(response => {
      //console.log(response)
      this.setState({
        carParts: response.data
      })
    })
  }

  updatePart(id, price) {
    console.log(id, price)
    axios.put(`${baseUrl}?id=${id}`,{price} ).then(response => {
      this.setState({
        carParts:response.data
        })
      })
    }
  deletePart(id) {
    //console.log('this got hit')
    axios.delete(`${baseUrl}/${id}`).then(response => {
      //console.log(response.data)
      this.setState({
        carParts:response.data
      })
    })
  }
 createPart() {
   //console.log(this.state)
      let newParts = {
      type: this.state.type,
      item: this.state.item,
      price: this.state.price
    }
  axios.post(`${baseUrl}`, newParts).then(response =>{
    //console.log(response)
    //console.log(response.data)
    this.setState({
      carParts: response.data,
   
    })
  })

}
partType = (pt) =>{
  this.setState({
    type: pt
  })
}

handlChange = (key,value) =>{
  //console.log(value)
  this.setState({[key]:value})
}
 render() {
   //console.log(this.state.carParts)
  //   let newParts = this.state.carParts.map(part => {
  //     return (
  //       <div key={part.id}>
  //       <ul>
  //       <li>{part.item}</li>
  //       <li>{part.type}</li>
  //       <li>{part.price}</li>
  //     </ul>
  //     <button onClick={()=> this.updatePart(part.id,this.state.price)}>Update Part</button>
  //     <input onChange={(e) => this.handlChange("price",e.target.value)}/>
  //     <button onClick={()=> this.deletePart(part.id,this.state.part)}>Delete Part</button>


  //     </div>)
  //  })
  let newParts = this.state.carParts.map(part => {
        return (<StateFull
                  key={part.id}
                  id={part.id}
                  type={part.type}
                  item={part.item}
                  price={part.price}
                  updatedPrice = {this.state.updatedPrice}
                  updatePart ={this.updatePart}
                  handlChange ={this.handlChange}
                  deletePart ={this.deletePart}
                />)
       })
       console.log(this.state.updatedPrice)
 return (
      <div className='car-parts'>
        <Header/>
        <Weather/>
        <div>
          <select onChange={(e) => this.partType(e.target.value)} >
            <option>Performance</option>,
            <option>Maintenance</option>
          </select>
         <input onChange={(e) => this.handlChange("item",e.target.value)}/>
         <input onChange={(e) => this.handlChange("price",e.target.value)}/>
        <button onClick={this.createPart}>Create Part</button>
        <ol>
          {newParts}
        </ol>
        </div>
        <Footer/>
      </div>
   );
  }
 }
 

export default App;
