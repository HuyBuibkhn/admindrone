/**
 * App.js Layout Start Here
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

// rct theme provider
import RctThemeProvider from './RctThemeProvider';

//Horizontal Layout
import HorizontalLayout from './HorizontalLayout';

//Agency Layout
import AgencyLayout from './AgencyLayout';

//Main App
import RctDefaultLayout from './DefaultLayout';

// boxed layout
import RctBoxedLayout from './RctBoxedLayout';
import VideoLayout from "./VideoLayout";
import LiveStream from "Routes/dashboard/livestream";
import LiveStreamLayout from "./LiveStreamLayout";

/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
const InitialPath = ({ component: Component, ...rest }) =>
	<Route
		{...rest}
		render={props => <Component {...props} />}
	/>;

class App extends Component {
	render() {
		const { location, match, user } = this.props;
		console.log('match', match);
		if (location.pathname === '/') {
			// return <Redirect to={'/app/dashboard/ecommerce'} />;
			return <Redirect to={'/app/dashboard/ecommerce'} />;
		}
		return (
			<RctThemeProvider>
				<NotificationContainer />
				<InitialPath
					path={`${match.url}app`}
					authUser={user}
					component={RctDefaultLayout}
				/>
				<Route path="/horizontal" component={HorizontalLayout} />
				<Route path="/agency" component={AgencyLayout} />
				<Route path="/boxed" component={RctBoxedLayout} />
				<Route path='/video' component={VideoLayout}/>
				<Route path='/live' component={LiveStreamLayout}/>
			</RctThemeProvider>
		);
	}
}

// map state to props
const mapStateToProps = ({ authUser }) => {
	const { user } = authUser;
	return { user };
};

export default connect(mapStateToProps)(App);
