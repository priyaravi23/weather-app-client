import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from "./components/header";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Search from "./components/search";
import Address from "./components/address";
import Weather from "./components/weather";

import './App.scss';
import {getGeolocationFromAddress} from "./utils/address-util";

function App() {

    const [address, setAddress] = useState(null);
    const [weather, setWeather] = useState(null);
    const [geolocation, setGeoLocation] = useState(null);

    // todo get geolocation
    useEffect(() => {
        // get and set the current geo location
    }, []);

    // Set the geolocation every time the address changes
    useEffect(() => setGeoLocation(getGeolocationFromAddress(address)), [address]);

    // Get the weather data every time the geolocation changes
    useEffect(() => {
        (async () => {
            if (geolocation && geolocation.lat) {
                const {lat, lng} = geolocation;
                const res = await axios(`http://localhost:3000/weather/dark-sky?lat=${lat}&lng=${lng}`);
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
                        <Address address={address}/>
                        <Weather weatherData={weather} />
                    </Route>
                    <Route path={'/'}>
                        <div>Home Component</div>
                        <Weather weatherData={weather} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;