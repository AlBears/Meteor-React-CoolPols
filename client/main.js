import React from 'react';
import ReactDOM from 'react-dom'

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  ReactDOM.render(<App polls={polls}/>, document.getElementById('render-target'));
});
