import React from 'react';
import {getFormattedAddress, getFormattedLongAddress} from "../utils/address-util";
import {Icon} from "@blueprintjs/core";

const Address = ({address}) => {
    return (
        <div>
            <br/>
            <Icon icon={'office'} />
            <pre>{address && getFormattedAddress(address).split(',').map(x => x.trim()).join('\n')}</pre>
            <br/>
            <div>
                {address && getFormattedLongAddress(address)}
            </div>
        </div>

    );
};

export default Address;