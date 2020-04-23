import React from 'react';
import {Alignment, Button, Navbar} from "@blueprintjs/core";
import {useHistory} from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    const handleLinkClick = e => {
        const {link} = e.currentTarget.dataset;
        console.log(link);
        history.push(link);
    };
    return (
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Weather Component</Navbar.Heading>
                <Navbar.Divider/>
                <Button
                    onClick={handleLinkClick}
                    data-link={'/'} minimal={true} icon={'home'} text={'Home'}/>
                <Button
                    onClick={handleLinkClick}
                    data-link={'/search'} minimal={true} icon={'search'} text={'Search'}/>
            </Navbar.Group>
        </Navbar>
    );
};

export default Header;