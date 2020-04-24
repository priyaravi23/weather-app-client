import React, {useState} from 'react';
import axios from 'axios';
import {Button, ControlGroup, InputGroup} from "@blueprintjs/core";
import * as classes from './search.module.scss';
import {showErrorToast} from "../utils/toasts";

const Search = ({setAddress}) => {
    const [input, setInput] = useState('2130 Wightman Street');

    const handleSearch = async () => {
        try {
            const res = await axios(`/weather/places/?address=${input}`);
            const data = res.data;
            setAddress(data.results[0]);
        } catch (ex) {
            showErrorToast('Could not fetch the address data.');
        }
    };
    return (
        <div>
            <div className={classes.searchbox}>
                <ControlGroup>
                    <InputGroup value={input} onChange={e => setInput(e.target.value)} large={true} fill={true} placeholder={'123 X Way'} />
                    <Button
                        className='bp3-large bp3-intent-primary'
                        onClick={handleSearch}
                        text={'Search'} />
                </ControlGroup>
            </div>
        </div>
    );
};

export default Search;