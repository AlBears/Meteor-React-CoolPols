import React, {Component, PropTypes} from 'react';

export default class Option extends Component {
    constructor(props) {
        super(props);
        this.options = props.options;
    }

    perc(votes) {
        let maxValue = 0;
        this.options.forEach(function(el) {
            if (el.votes > maxValue)
                maxValue = el.votes;
            }
        )
        let perc = 100 * votes / maxValue;
        if (isNaN(perc))
            perc = 0;
        return `${perc}%`;
    }
    renderOptions() {
        return this.options.map((option) => (
            <div className="option-item" key={option.index}>
                <span className="badge badge-votes pull-right">{option.votes}</span>
                <div className="bar">
                    <svg className="svg" width="100%" height="25">
                        <rect className="rec-bgd" width="100%" height="100%"/>
                        <rect className="rec" width={this.perc(option.votes)} height="100%"/>
                    </svg>
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
