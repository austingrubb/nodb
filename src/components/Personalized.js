import React , {Component} from 'react';

class Personalized extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'austin'
        }
    }

    handleChange = (key, value) => {
        this.setState({[key]:value})
    }
   render() {
       console.log(this.state.name)
   return (
        <div className= "personalizedTrumpQuote">
           <input name="name" onChange={(e) => this.handleChange(e.target.name, e.target.value)}/>
           <button onClick={()=> this.props.personalizedQuote(this.state.name)}>Personal Quote</button>
            <p>{this.props.personalizedQuoteString}</p>
        </div>
     );
    }
   }
   
  
  export default Personalized;