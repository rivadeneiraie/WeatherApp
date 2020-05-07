import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ForecastExtended from './../components/ForecastExtended';
import { getForecastDataFromCities, getCity } from './../reducers/'

class ForecastExtendedContainer extends Component {
    render() {
        const { city, forecastData} = this.props;
        return (
            city ?
                <ForecastExtended city={city} forecastData={forecastData}></ForecastExtended>
            :
                <h3>Cargando pronóstico</h3>
            
        )
    }; 
};

ForecastExtendedContainer.propTypes = {
    city:PropTypes.string.isRequired,
    forecastData:PropTypes.array,
}

const mapStateToPros = state => ({
    city : getCity(state),
    forecastData: getForecastDataFromCities(state),
})

export default  connect(mapStateToPros, null)(ForecastExtendedContainer);