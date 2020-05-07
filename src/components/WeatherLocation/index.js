import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

import Location from './Location'
import WeatherData from './WeatherData'
import transformWeather from './../../services/transformWeather'

import './style.css';

const url = 'https://api.openweathermap.org/data/2.5/weather';
const api_key = '81b877a6966f2e7434c86563ec5a19dd';

class WeatherLocation extends Component {

    constructor({ city }){
        super();
        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount(){
        const { city } = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}`;

        fetch(api_weather).then(data => {
            return data.json();
        }).then(weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data });
        });
    }

    render = () => {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return (
            <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ? 
                    <WeatherData data={data}></WeatherData> 
                : 
                    <CircularProgress />
                }
            </div>
        );
    };

};

WeatherLocation.propTypes = {
    city:PropTypes.string.isRequired,
    onWeatherLocationClick:PropTypes.func,
}

export default WeatherLocation;