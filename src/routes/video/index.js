import {Redirect, Route, Switch} from "react-router-dom";
import {
    AsyncAgencyDashboardComponent,
    AsyncEcommerceDashboardComponent, AsyncNewsDashboardComponent,
    AsyncSaasDashboardComponent
} from "Components/AsyncComponent/AsyncComponent";
import React from "react";
import VideoLayout from "../../container/VideoLayout";

const Dashboard = ({ match }) => (
    <div className="dashboard-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/video`} />
            <Route path={`/video`} component={VideoLayout} />
            {/*<Route path={`${match.url}/`}/>*/}
        </Switch>
    </div>
);

export default Dashboard;
