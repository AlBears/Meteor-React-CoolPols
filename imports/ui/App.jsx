import React, { Component, PropTypes } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Polls from './Polls.jsx';
import PollsData from '../api/polls.js';

export default class App extends TrackerReact(Component) {
  constructor(){
    super();
    this.state = {
      subscription: {
        pollsData: Meteor.subscribe('polls')
      }
    }
  }
  componentWillUnmount() {
    this.state.subscription.pollsData.stop();
  }
  pollsData() {
    return PollsData.find().fetch();
  }

  render() {
    return (
      <div className="main-layout">
        <header>
          <h1>Polls</h1>
        </header>
        <Polls polls={this.pollsData()}/>
      </div>
    );
  }
}

App.propTypes = {
  polls: PropTypes.array.isRequired,
};
