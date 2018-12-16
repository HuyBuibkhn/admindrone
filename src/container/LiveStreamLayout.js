/**
 * App Routes
 */
import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

// app default layout
import RctAppLayout from 'Components/RctAppLayout';

// router service
import routerService from "../services/_routerService";
import LiveStream from "Routes/dashboard/livestream";
import ListDrone from "Routes/live/list/ListDrone";
import RctDefaultLayout from "./DefaultLayout";
import {Switch, Router, BrowserRouter} from 'react-router-dom'

class LiveStreamLayout extends Component {
    render() {
        const {match, location} = this.props;
        if (location.pathname === '/live') {
            location.pathname = '/live/list'
        }
        console.log('props', location);

        return (
            <RctAppLayout>
                <Switch location={location}>
                    <Route path={'/live/list'} component={ListDrone}/>
                    <Route path={'/live/livestream'} component={LiveStream}/>
                </Switch>
                {/*<ListDrone/>*/}
            </RctAppLayout>
        );
    }
}

export default withRouter(connect(null)(LiveStreamLayout));
