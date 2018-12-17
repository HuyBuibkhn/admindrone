import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// async components
import {

    AsyncDashboardComponent,
    AsyncReportComponent,
    AsyncViolationComponent
} from 'Components/AsyncComponent/AsyncComponent';

const Dashboard = ({ match }) => (

    <div className="dashboard-wrapper">
        <Switch>
            <Route path={`${match.url}/dashboard`} component={AsyncDashboardComponent} />
            <Route path={`${match.url}/report`} component={AsyncReportComponent} />
            <Route path={`${match.url}/violation`} component={AsyncViolationComponent} />
        </Switch>
    </div>
);

export default Dashboard;