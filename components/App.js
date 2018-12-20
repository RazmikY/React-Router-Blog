import React , {Component} from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import CarouselPage from './CarouselPage';
import StaticComponent from './StaticComponent';
import Main from './Main';
import Footer from './Footer';




export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='container'>                
                <NavBar />
                <CarouselPage />
                <StaticComponent />
                <Route to='/main' component={Main} />
                <StaticComponent />
                <Footer />
            </div>
        );
    }
}