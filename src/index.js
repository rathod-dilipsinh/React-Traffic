import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TrafficLight from './components/traffic_light';

class App extends Component {
  
  render() {
	return (
      <div>   
		<TrafficLight />
	  </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
