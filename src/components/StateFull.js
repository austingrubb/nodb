import React , {Component} from 'react';

class StateFull extends Component {
    constructor(props){
      super(props);
      this.state = {
        updatedPrice:''
       }
    }

    handlChange = (key, value) =>{
        //console.log(value)
        this.setState({[key]:value})
      }
  
   render() {
      {this.props.test}
   return (
        <div className='car-part'>
           <div key={this.props.id}>
                <ul>
                <li><span>Item: </span>{this.props.item}</li>
                <li><span>type: </span>{this.props.type}</li>
                <li><span>price: </span>${this.props.price}</li>
            </ul>

            <div className='ic'>
                <button onClick={()=> this.props.updatePart(this.props.id, this.state.updatedPrice)}>Update Part</button>
                <input name="updatedPrice" onChange={(e) => this.handlChange(e.target.name, e.target.value)}/>
                <button onClick={()=> this.props.deletePart(this.props.id, this.props.part)}>Delete Part</button>
            </div>

            </div>
        </div>
     );
    }
   }
   
  
  export default StateFull;
  