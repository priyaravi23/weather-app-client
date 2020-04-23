import React from 'react';
import {getFormattedAddress} from "../utils/address-util";

const Address = ({address}) => {
    return (
        <React.Fragment>
            <span>{address && getFormattedAddress(address).split(',').map(x => x.trim()).join('\n')}</span>
        </React.Fragment>

    );
};

export default Address;