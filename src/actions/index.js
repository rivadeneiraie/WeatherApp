import transformForecast from './../services/transformForecast'

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload});
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload});

/*******************************************************************************************/

const url = 'https://api.openweathermap.org/data/2.5/forecast';
const api_key = '81b877a6966f2e7434c86563ec5a19dd';

export const setSelectedCity = payload => {
    return dispatch => {

        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        //activar en el estado un indicadorde busqueda de datos 
        dispatch(setCity(payload));

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
