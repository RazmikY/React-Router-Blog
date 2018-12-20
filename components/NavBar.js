import React from 'react';
import SearchBar from './SearchBar';
import NavTeamAbout from './NavTeamAbout';
import Category from './Category';
import { Navbar } from 'react-bootstrap';

const dataAbout = ['About', 'Cooperation', 'Contact'];
const dataCategory = [
    'Nature',
    'People',
    'Trips',
    'Animals',
    'Fashions',
    'Tesh'
];

const NavBar = () => (
    <Navbar collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href='#main'>Blog Template</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Navbar.Form pullLeft>
                <SearchBar />
            </Navbar.Form>
            <NavTeamAbout data={dataAbout} />
            <Category items={dataCategory} />
        </Navbar.Collapse>
    </Navbar>
);

export default NavBar;
