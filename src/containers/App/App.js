import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import styles from './styles.module.css';

class App extends React.Component {

	static propTypes = {
		routes: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}

	content() {
		return(
			<Router />
		)
	}

	render() {
		return (
			<div>
				{this.content}
			</div>
		)
	}
}

module.exports = App;