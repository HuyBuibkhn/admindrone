/**
 * Dasboard Routes
 */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// async components
import {
    AsyncEcommerceDashboardComponent,
    AsyncSaasDashboardComponent,
    AsyncAgencyDashboardComponent,
    AsyncNewsDashboardComponent, AsyncDashboardComponent
} from 'Components/AsyncComponent/AsyncComponent';

const Dashboard = ({ match }) => (
   <div className="dashboard-wrapper">
      <Switch>

          <Route path={`${match.url}/dashboard`} component={AsyncDashboardComponent} />
         <Route path={`${match.url}/ecommerce`} component={AsyncEcommerceDashboardComponent} />
         <Route path={`${match.url}/saas`} component={AsyncSaasDashboardComponent} />
         <Route path={`${match.url}/agency`} component={AsyncAgencyDashboardComponent} />
         <Route path={`${match.url}/news`} component={AsyncNewsDashboardComponent} />
      </Switch>
   </div>
);

export default Dashboard;
