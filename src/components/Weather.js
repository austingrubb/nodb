import React, { Component } from 'react';
import axios from 'axios';

class Weather extends Component {
    constructor(props){
        super(props)
        this.state = {
            temperature: null,
            weather:'',
            icon:'',
            zipCode: '85355',
            cityName: 'waddell',

        }
    }
    componentDidMount(){
        function kelvToFaren(kelv){
            return Math.floor((kelv * (9/5)- 459.67));
        }
        axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode},us&APPID=d9243089f2556c263804dbef4d445f23`).then(response => {
            var tempKelvin = response.data.main.temp;
            var weather = response.data.weather[0].description;
            var icon = response.data.weather[0].icon;
            var cityname = response.data.name
            console.log(response.data)
            this.setState({
                temperature: kelvToFaren(tempKelvin),
                weather: weather,
                icon: icon,
                cityName: cityname
            })   
        })
    }

    updateZip(zip){
        function kelvToFaren(kelv){
            return Math.floor((kelv * (9/5)- 459.67));
        }
        axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=d9243089f2556c263804dbef4d445f23`).then(response => {
            var tempKelvin = response.data.main.temp;
            var weather = response.data.weather[0].description;
            var icon = response.data.weather[0].icon;
            var cityname = response.data.name;
            console.log(response.data.name)
            this.setState({
                temperature: kelvToFaren(tempKelvin),
                weather: weather,
                icon: icon,
                cityName: cityname
            })     
        })
    }

    render(){
        return(
            <div className='weatherTile'>
                <h4 className='weather-h2'>Weather:</h4>
                <p> the temperature in {this.state.cityName}:</p>
                <p className='temp'>{this.state.temperature}&#8457;</p>
                <input className='input-periphs weatherZip' onChange={(e) => this.setState({zipCode: e.target.value})} placeholder='Enter Zip Code'/>
                <button onClick={() => this.updateZip(this.state.zipCode)} className='btn input-periphs'>Submit</button>
            </div>
        )
    }
}

export default Weather;