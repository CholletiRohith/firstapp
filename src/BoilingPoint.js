import { render } from '@testing-library/react';
import React from 'react';

function BoilingPoint(props) {
    if (Number.isNaN(props.value)) {
        return '';
    }
    else{
        if (props.scale == 'c') {
            return toCelsius(props.value);
        }
        else {
            return toFahrenheit(props.value);
        }
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

const scaleNames =
{
    c: "Celsius",
    f: "Fahrenhiet"
};
class Boil extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            temp: ""
        }
    }

    handleChange(e) {
        this.setState({
            temp: e.target.value
        })
    }
    render() {
        let scale = this.props.scale;
        return (
            <fieldset>
                <label>Enter the scale that you want to know {scaleNames[scale]}</label> <br />
                <input type="text" value={this.state.temp} onChange={e => this.handleChange(e)}></input>


                <BoilingPoint scale={scale} value={this.state.temp} />
            </fieldset>
        )
    }
}
export default Boil;