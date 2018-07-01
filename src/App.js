import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
const baseUrl = '/api/get_all_parts'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      parts: []
     }
    this.updatePart = this.updatePart.bind( this );
    this.deletePart = this.deletePart.bind( this );
    this.createPart = this.createPart.bind( this );

  }

  componentDidMount(){
    axios.get('/api/get_all_parts').then(results => {
      console.log(results)
      this.setState({
        parts: results.data
      })
    })
  }

  updatePart(id,part) {
      axios.put(`${baseUrl}/part?id=${id}`, {part}).then(results => {
        this.setState({
          parts:results.data
        })
      })
    }
  deletePart(id) {
    axios.delete(`${baseUrl}/part?id=${id}`).then(results => {
      this.setState({
        parts:results.data
      })
    })
  }
 createPart(part) {

  axios.part(`${baseUrl}/part`, {part}).then(results =>{
    this.setState({
      parts:results.data
    })
  })
}

 render() {
    let myParts = this.state.parts.map(part => {
      return <ul key={part.id}>
        <li>{part.item}</li>
        <li>{part.type}</li>
      </ul>
    })
 return (
      <div className='car-parts'>
        <div className ='type'>#type of part</div>
        <div className='partId'>#part ID</div>
        <ul>
          {myParts}
        </ul>
      </div>
   );
  }
 }


export default App;
