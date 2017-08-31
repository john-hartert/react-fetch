import React, { Component } from 'react';
// import MartaDashboard from './MartaDashboard.js';
import './DropDown.css';

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Choose a stop'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('Your choice' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <p className="pick_stop">Pick your stop</p>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="first choice">1 choice</option>
                        <option value="second choice">2 choice</option>
                        <option value="third choice">3 choice</option>
                        <option value="fourth choice">4 choice</option>
                        <option value="fifth choice">5 choice</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}











export default DropDown;