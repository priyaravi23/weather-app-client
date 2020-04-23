import React, {useState} from 'react';
import axios from 'axios';
import {Button, ControlGroup, InputGroup} from "@blueprintjs/core";

import * as classes from './search.module.scss';
import {showErrorToast, showSuccessToast} from "../utils/toasts";

const Search = ({setAddress}) => {
    const [input, setInput] = useState('278 Vista Roma');
    const handleSearch = async () => {
        try {
            const res = await axios(`http://localhost:3000/weather/places/?address=${input}`);
            const data = res.data;
            setAddress(data.results[0]);
            showSuccessToast('Fetched the address info.');
        } catch (ex) {
            showErrorToast('Could not fetch the address data.');
        }
    };
    return (
        <div>
            <div className={classes.searchbox}>
                <ControlGroup>
                    <InputGroup value={input} onChange={e => setInput(e.target.value)} large={true} fill={true} placeholder={'123 X Way'} />
                    <Button onClick={handleSearch} text={'Search'} />
                </ControlGroup>
            </div>
        </div>
    );
};

export default Search;