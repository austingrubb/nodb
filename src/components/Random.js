import React , {Component} from 'react';

class RandomTrumpQuotes extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

   render() {
   return (
        <div className= "RandomTrumpQuotes">
           <button onClick={()=> this.props.randomTrumpQuotes()}>Trump Quotes</button>
            <p>{this.props.randomTrumpQuotesArr}</p>
        </div>
     );
    }
   }
   
  
  export default RandomTrumpQuotes;