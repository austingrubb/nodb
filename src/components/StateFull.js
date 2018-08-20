import React , {Component} from 'react';

class StateFull extends Component {
    constructor(props){
      super(props);
      this.state = {
        updatedPrice:''
       }
    }

    handleChange = (key, value) =>{
        console.log(value)
        this.setState({[key]:value})
      }
  
   render() {
      {this.props.test}
   return (
        <div className='Groceries-item'>
           <div key={this.props.id}>
                <ul>
                <li><span>Item: </span>{this.props.item}</li>
                <li><span>type: </span>{this.props.type}</li>
                <li><span>price: </span>${this.props.price}</li>
            </ul>

            <div className='Groceries-item-class'>
                <button onClick={()=> this.props.updateGroceries(this.props.id, this.state.updatedPrice)}>Update</button>
                <input name="updatedPrice" onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
                <button onClick={()=> this.props.deleteGroceries(this.props.id, this.props.groceries)}>Delete</button>
            </div>

            </div>
        </div>
     );
    }
   }
   
  
  export default StateFull;
  