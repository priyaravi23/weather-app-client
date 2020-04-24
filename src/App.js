import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from "./components/header";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Search from "./components/search";
import Weather from "./components/weather";
import './App.scss';
import {getGeolocationFromAddress} from "./utils/address-util";
const ip = require('public-ip');

function App() {

    const [address, setAddress] = useState(null);
    const [currenGeoLocation, setCurrenGeoLocation] = useState({});
    const [weather, setWeather] = useState(null);
    const [geolocation, setGeoLocation] = useState(null);

    // todo get geolocation
    useEffect(() => {
        // get and set the current geo location
        // current geo 'http://ip-api.com/json'

        (async () => {
            const ipAddr = await ip.v6();
            const resa = await axios(`/weather/current-geo?ip=${ipAddr}`);
            const {latitude, longitude} = resa.data;
            const resb = await axios(`/weather/dark-sky?lat=${latitude}&lng=${longitude}`);
            const details = {
                ...resa.data,
                ...resb.data
            };

            setCurrenGeoLocation(details);
        })();
    }, []);

    // Set the geolocation every time the address changes
    useEffect(() => setGeoLocation(getGeolocationFromAddress(address)), [address]);

    // Get the weather data every time the geolocation changes
    useEffect(() => {
        (async () => {
            if (geolocation && geolocation.lat) {
                const {lat, lng} = geolocation;
                const res = await axios(`/weather/dark-sky?lat=${lat}&lng=${lng}`);
                setWeather(res.data);
            }
        })();
    }, [geolocation]);

    return (
        <Router>
            <Header/>
            <div className={'app-container'}>
                <Switch>
                    <Route path={'/search'}>
                        <Search setAddress={setAddress}/>
                        {/*<Address address={address}/>*/}
                        <Weather details={currenGeoLocation}
                                 address={address}
                                 weatherData={weather}
                        />
                    </Route>
                    <Route path={'/'}>
                        <Weather details={currenGeoLocation}
                                 address={address}
                                 weatherData={weather} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;