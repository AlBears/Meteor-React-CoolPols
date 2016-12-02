import React, { Component, PropTypes } from 'react';


export default class App extends Component {
  render() {
    polls = this.props.polls.map(function(poll){
      return <div key={poll._id}>{poll.question}</div>
    });
    return (
      <div className="main-layout">
        <header>
          <h1>Polls</h1>
        </header>
        {polls}
      </div>
    );
  }
}

App.propTypes = {
  polls: PropTypes.array.isRequired,
};
