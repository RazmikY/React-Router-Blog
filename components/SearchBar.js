import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            searchItem: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.OnSubmit = this.OnSubmit.bind(this);
        this.ComponentChange = this.ComponentChange.bind(this);
    }
    OnSubmit(e) {
        e.preventDefault();
        alert(`${this.state.searchItem}`);
        this.setState({ show: false });
    }
    handleChange(e) {
        this.setState({
            searchItem: e.target.value
        });
    }
    ComponentChange () {
        this.setState({
            show: !this.state.show
        });
    }
    render() {
        let searchbar;
        if (this.state.show) {
            searchbar = (
                <form onSubmit={this.OnSubmit}>
                    <input type="search" onChange={this.handleChange} />
                </form>
            );
        } else {
            searchbar = (
                <div>
                    <i className='fas fa-search fa' onClick={this.ComponentChange} />
                </div>
            );
        }
        return <div className='searchbar'>{searchbar}</div>;
    }
}

export default SearchBar;
