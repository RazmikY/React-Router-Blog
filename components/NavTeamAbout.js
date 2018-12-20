import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem } from 'react-bootstrap';

const NavTeamAbout = ({ data }) => (
    <div>
        <Nav>
            {data.map((i,index) => (
                <NavItem key={index}>
                    {i}
                </NavItem>
            ))}
        </Nav>
    </div>
);

NavTeamAbout.propTypes = {
    data : PropTypes.array
};

export default NavTeamAbout;
