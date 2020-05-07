import convert from 'convert-units';

import 
{ 
     CLOUDY
    ,SUN 
    ,RAIN
    ,SNOW
    ,THUNDER
    ,DRIZZLE
} from './../constants/weathers'


const getWeatherState = weather => {
    const { id } = weather[0];

    if          (id < 300) {
        return THUNDER;
    } else if   (id >= 300 && id < 400)
    {
        return DRIZZLE;
    } else if   (id >= 400 && id < 600)
    {
        return RAIN;
    } else if   (id >= 600 && id < 700)
    {
        return SNOW;
    } else if   (id >= 700 && id <= 800)
    {
        return SUN;
    } else    
    {
        return CLOUDY;
    }
}

const getTemp = kelvin => {
    return Number(convert(kelvin).from('K').to('C').toFixed(3));
}

const transformWeather = weather_data => {
    const {weather } = weather_data;
    const { humidity, temp  } = weather_data.main;
    const { speed } = weather_data.wind;
    
    const weatherState = getWeatherState(weather); 

    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
    }
    return data;
}

export default transformWeather;