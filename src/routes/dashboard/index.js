import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// async components
import {

    AsyncDashboardComponent,
    AsyncReportComponent
} from 'Components/AsyncComponent/AsyncComponent';

const Dashboard = ({ match }) => (

    <div className="dashboard-wrapper">
        <Switch>
            <Route path={`${match.url}/dashboard`} component={AsyncDashboardComponent} />
            <Route path={`${match.url}/report`} component={AsyncReportComponent} />
        </Switch>
    </div>
);

export default Dashboard;