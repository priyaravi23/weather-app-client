import React from 'react';
import { Card, Elevation, Colors } from "@blueprintjs/core";
import Address from './address';

const Weather = ({weatherData, address, current}) => {
    const currently = weatherData && weatherData.currently;
    const timezone = weatherData && weatherData.timezone;
    const icon = weatherData && currently.icon;
    const iconUrl = 'https://darksky.net/images/weather-icons';

    const cur = current && current.currently;
    console.log(cur);

    return (
        <div>
            <br/>

            <Card interactive={true} elevation={Elevation.FOUR} style={{color: Colors.COBALT1, background: Colors.GRAY5}} >
                <div className='grid-info-container'>
                    <div className='grid-info-item'>
                        <p><b>Address:</b></p>
                    </div>

                    <div className='grid-info-item'>
                        <Address address={address} />
                    </div>

                    <div className="grid-info-img-item">
                        <img className='iconSeal' src={`${iconUrl}/${icon}.png`} />
                    </div>

                    <div className='grid-info-item'>
                        <p><b>Timezone:</b></p>
                    </div>

                    <div className='grid-info-item'>
                        <p className="details">{timezone}</p>
                    </div>

                    <div className='grid-info-item'>
                        <p><b>Temperature:</b></p>
                    </div>

                    <div className='grid-info-item'>
                        <p className="details">{weatherData && currently.temperature}
                            <img
                                src="https://cdn3.iconfinder.com/data/icons/virtual-notebook/16/button_shape_oval-512.png"
                                width="7" height='7' style={{marginTop: '-3%'}} />
                            F
                        </p>
                    </div>

                    <div className='grid-info-item'>
                        <p><b>Summary:</b></p>
                    </div>

                    <div className='grid-info-item'>
                        <p className="details">{weatherData && currently.summary}</p>
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
                        {weatherData && currently.humidity}
                    </div>

                    <div className='grid-detail-item'>
                        {weatherData && currently.pressure}
                    </div>
                    <div className='grid-detail-item'>
                        {weatherData && currently.windSpeed}
                    </div>
                    <div className='grid-detail-item'>
                        {weatherData && currently.visibility}
                    </div>
                    <div className='grid-detail-item'>
                        {weatherData && currently.cloudCover}
                    </div>
                    <div className='grid-detail-item'>
                        {weatherData && currently.ozone}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Weather;