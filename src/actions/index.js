import transformForecast from './../services/transformForecast';
import transformWeather from './../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const SET_WEATHER_CITY = "SET_WEATHER_CITY";
export const GET_WEATHER_CITY = "GET_WEATHER_CITY";

const setCity = payload => ({ type: SET_CITY, payload});
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload});

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload});

/*******************************************************************************************/

const url = 'https://api.openweathermap.org/data/2.5/';
const api_key = '81b877a6966f2e7434c86563ec5a19dd';

export const setSelectedCity = payload => {
    return (dispatch, getState) => {

        const url_forecast = `${url}forecast?q=${payload}&appid=${api_key}`;

        //activar en el estado un indicadorde busqueda de datos 
        dispatch(setCity(payload));

        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;
        const now = new Date();

        if (date && (now - date) < 1*60*1000)
        {
            return;
        }
        
        return fetch(url_forecast).then(
                    data =>(
                        data.json()
                    )
                ).then(
                    forecast => 
                    {
                        const forecastData = transformForecast(forecast);
                        console.log (forecastData);
                        //moficiar el estado con el resultado de la promise  (fetch)
                        dispatch(setForecastData({ city: payload, forecastData }));
                    }
                );
    }
};


export const setWeather = payload => {
    return dispatch => {

        payload.forEach(city => {

            dispatch(setWeatherCity(city));
            const url_weather = `${url}weather?q=${city}&appid=${api_key}`;

            return fetch(url_weather).then(data => {
                return data.json();
            }).then(weather_data => {
                const weather = transformWeather(weather_data);
                dispatch(getWeatherCity({ city, weather }));
            });
    
        })
    }
}