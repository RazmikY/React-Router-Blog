import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem } from 'react-bootstrap';

class Category extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            focused: ''
        };
    }  
    clicked(index) {
        this.setState({
            focused: index
        });
    }
    render() {
        var self = this;
        return (
            <div className='category'>
                <Nav pullRight>
                    {this.props.items.map(function(m, index) {
                        var style = '';
                        if (self.state.focused === index) {
                            style = 'active';
                        }
                        return (
                            <NavItem
                                className={style}
                                onClick={self.clicked.bind(self, index)}
                                key={index}
                            >
                                {m}
                            </NavItem>
                        );
                    })}
                </Nav>
            </div>
        );
    }
}

Category.propTypes = {
    items: PropTypes.array.isRequired
};
export default Category;
