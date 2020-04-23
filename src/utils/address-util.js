import React from 'react';
import get from 'lodash.get';

export const getFormattedAddress = address => address.formatted_address;

export const getFormattedLongAddress = address => address.address_components.map(c => {
    const type = c.types[0];
    const formattedType = type.replace(/_/g, ' ');
    return <div>{formattedType}: {c.long_name}</div>
});

export const getGeolocationFromAddress = address => get(address, 'geometry.location');