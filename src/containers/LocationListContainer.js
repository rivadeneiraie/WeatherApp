import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LocationList from './../components/LocationList';

import { setSelectedCity  } from './../actions';

class LocationListContainer extends Component {

    handleSelectionLocation = city => {
        this.props.setCity(city);
    }

    render() {
        return (
            <LocationList 
                cities={this.props.cities} 
                onSelectedLocation={this.handleSelectionLocation}
            ></LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities:PropTypes.array.isRequired,
  }
  
const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
});

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);