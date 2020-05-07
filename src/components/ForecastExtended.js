import React from 'react';
import PropTypes from 'prop-types';

import ForecastItem from './ForecastItem';

import './styles.css';

const renderForecatItemDays = forecastData => (
    forecastData.map(forecast => (
        <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay}  
            hour={forecast.hour} 
            data={forecast.data} 
        ></ForecastItem>
    ))
);

const renderProgress = () => (
    <h3>cargando pronóstico extendido</h3>
);

const ForecastExtended = ({ city, forecastData }) => (
    <div>
        <h2 className='forecast-title'>{`Pronóstico extendido de ${city}`}</h2>
        { forecastData ?
            renderForecatItemDays(forecastData)
        :
            renderProgress()
        }
    </div>
)

ForecastExtended.propTypes = {
    city:PropTypes.string.isRequired,
    forecastData:PropTypes.array,
};

export default ForecastExtended;