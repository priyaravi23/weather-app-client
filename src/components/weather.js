import React from 'react';

const Weather = ({weatherData}) => {
    return (
        <div>
            <h3>Weather Data</h3>
            <code>
                {weatherData && JSON.stringify(weatherData)}
            </code>
        </div>
    );
};

export default Weather;