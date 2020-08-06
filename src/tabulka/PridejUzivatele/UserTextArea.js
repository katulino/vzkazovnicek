import React, { Component } from 'react';

export default class UserTextArea extends Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.value };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
    const value = event.target.value;
    this.setState({ value });
    this.props.onChange(value);
			}
    render() {
        const { name, label } = this.props;

        return (
            <label htmlFor={name}>
                {label}
                <textarea id={name} type="text" name={name} required
                    value={this.state.value}
                    onChange={this.handleChange} />
            </label>
        );
    }
}

