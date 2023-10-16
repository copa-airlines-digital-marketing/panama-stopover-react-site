import React from 'react';
import {withLocalize} from "react-localize-redux";

class CheckButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.value};
    }

    onChange(e) {
        let value = e.target.value;

        this.setState({value: value}, () => typeof this.props.onUpdate === "function" ? this.props.onUpdate(value) : null);
    }

    get value() {
        return this.state.value;
    }

    render() {
        return (
            <div>
                {this.props.items.map(item => {
                    return (
                        <label id={`id-${item.value}`} key={item.value}>
                            <div className="radio-number">{item.label}</div>
                            <input
                                type="checkbox"
                                checked={this.state.value === item.value}
                                disabled={item.disabled}
                                value={item.value}
                                name={this.props.name}
                                onChange={this.onChange.bind(this)}
                            />
                            <span>
                                <b>{item.label}</b>
                            </span>
                        </label>
                    );
                })}
            </div>
        );
    }
}

export default withLocalize(CheckButton);