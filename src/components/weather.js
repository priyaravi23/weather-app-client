import React from 'react';
import { Card, Elevation, Colors } from "@blueprintjs/core";
import Address from './address';

const Weather = ({weatherData, address, details}) => {
    const curr = weatherData && weatherData.currently;
    const timezone = weatherData && weatherData.timezone;
    const icon = weatherData && curr.icon;
    const iconUrl = 'https://darksky.net/images/weather-icons';

    const summary = details.currently && details.currently.summary;
    const temperature = details.currently && details.currently.temperature;
    const pressure = details.currently && details.currently.pressure;
    const windSpeed = details.currently && details.currently.windSpeed;
    const visibility = details.currently && details.currently.visibility;
    const cloudCover = details.currently && details.currently.cloudCover;
    const ozone = details.currently && details.currently.ozone;
    const humidity = details.currently && details.currently.humidity;
    const currentGeoIcon = details.currently && details.currently.icon;

    return (
        <div>
            <br/>

            <Card interactive={true} elevation={Elevation.FOUR} style={{color: Colors.COBALT1, background: Colors.GRAY5}} >
                <div className='grid-info-container'>
                    <div className='grid-info-item'>
                        <p><b>Address:</b></p>
                    </div>

                    <div className='grid-info-item'>
                        { details && !address
                            ? (<code>
                                {   `${details.city}
                                    ${details.state_prov} ${details.zipcode}
                                    ${details.country_code3}` }
                                </code>)
                            : <Address address={address} />
                        }
                    </div>

                    <div className="grid-info-img-item">
                        <img className='iconSeal' src={ details && !address ? `${iconUrl}/${currentGeoIcon}.png` : `${iconUrl}/${icon}.png`} />
                    </div>

                    <div className='grid-info-item'>
                        <p><b>Timezone:</b></p>
                    </div>

                    <div className='grid-info-item'>
                        <p className="details">
                            { details && !address ? details.timezone : timezone}</p>
                    </div>

                    <div className='grid-info-item'>
                        <p><b>Temperature:</b></p>
                    </div>

                    <div className='grid-info-item'>
                        <p className="details">
                            { details && !address ? temperature : weatherData && curr.temperature}
                             °F
                        </p>
                    </div>

                    <div className='grid-info-item'>
                        <p><b>Summary:</b></p>
                    </div>

                    <div className='grid-info-item'>
                        <p className="details">
                            { details && !address ? summary : weatherData && curr.summary}</p>
                    </div>
                </div>

                <br />

                <div className='grid-detail-container'>
                    <div className='grid-detail-item'>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-16-512.png"
                            width="30" height="30" data-placement="top" data-placement="top"
                            title="Humidity"/>
                    </div>
                    <div className='grid-detail-item'>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-25-512.png"
                            width="30" height="30" data-toggle="tooltip" data-placement="top"
                            title="Pressure"/>
                    </div>
                    <div className='grid-detail-item'>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-27-512.png"
                            width="30" height="30" data-toggle="tooltip" data-placement="top"
                            title="WindSpeed"/>
                    </div>
                    <div className='grid-detail-item'>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-30-512.png"
                            width="30" height="30" data-toggle="tooltip" data-placement="top"
                            title="Visibility"/>
                    </div>
                    <div className='grid-detail-item'>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-28-512.png"
                            width="30" height="30" data-toggle="tooltip" data-placement="top"
                            title="cloudCover"/>
                    </div>
                    <div className='grid-detail-item'>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/weather-74/24/weather-24-512.png"
                            width="30" height="30" data-toggle="tooltip" data-placement="top"
                            title="Ozone"/>
                    </div>

                    <div className='grid-detail-item'>
                        { details && !address ? humidity : weatherData && curr.humidity}
                    </div>

                    <div className='grid-detail-item'>
                        { details && !address ? pressure : weatherData && curr.pressure}
                    </div>
                    <div className='grid-detail-item'>
                        { details && !address ? windSpeed : weatherData && curr.windSpeed}
                    </div>
                    <div className='grid-detail-item'>
                        { details && !address ? visibility : weatherData && curr.visibility}
                    </div>
                    <div className='grid-detail-item'>
                        { details && !address ? cloudCover : weatherData && curr.cloudCover}
                    </div>
                    <div className='grid-detail-item'>
                        { details && !address ? ozone : weatherData && curr.ozone}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Weather;