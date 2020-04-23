import React from 'react';
import {Alignment, Button, Navbar, Colors} from "@blueprintjs/core";
import {useHistory} from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    const handleLinkClick = e => {
        const {link} = e.currentTarget.dataset;
        console.log(link);
        history.push(link);
    };
    return (
        <Navbar style={{color: Colors.LIGHT_GRAY5, background: Colors.BLACK}}>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Weather Scanner</Navbar.Heading>
                <Navbar.Divider/>
                <Button
                    className='bp3-large bp3-intent-warning'
                    onClick={handleLinkClick}
                    data-link={'/'} minimal={true} icon={'home'} text={'Home'}/>
                <Button
                    className='bp3-large bp3-intent-warning'
                    onClick={handleLinkClick}
                    data-link={'/search'} minimal={true} icon={'search'} text={'Search'}/>
            </Navbar.Group>
        </Navbar>
    );
};

export default Header;