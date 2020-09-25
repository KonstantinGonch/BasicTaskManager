import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Auth } from './components/Auth';
import { Registration } from "./components/Registration"


import './custom.css'

export default class App extends Component {
	static displayName = App.name;

	render() {
		return (
			<Layout>
				<Route exact path='/' component={Auth} />
				<Route exact path='/register' component={Registration} />
				<Route exact path='/home' component={Home} />
			</Layout>
		);
	}
}

