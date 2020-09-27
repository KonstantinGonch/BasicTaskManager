import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Auth } from './components/Auth';
import { Registration } from "./components/Registration"
import { TaskList } from './components/TaskList';

import './custom.css'

export default class App extends Component {
	static displayName = App.name;

	render() {
		return (
			<Layout>
				<Route exact path='/' component={Auth} />
				<Route exact path='/register' component={Registration} />
				<Route exact path='/tasklist' component={TaskList} />
			</Layout>
		);
	}
}

