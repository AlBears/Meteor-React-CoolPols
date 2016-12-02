import React, {Component, PropTypes} from 'react';

export default class Option extends Component {
    renderOptions() {
        let options = this.props.options;
        return options.map((option) => (
            <div className="option-item" key={option.index}>
                <span className="badge badge-votes pull-right">{option.votes}</span>
                <div className="bar">
                    <span className="option">{option.option}</span>
                </div>
            </div>
        ))
    }
    render() {
        return (
            <div>{this.renderOptions()}</div>
        );
    }
}

Option.propTypes = {
    options: PropTypes.array.isRequired
};
