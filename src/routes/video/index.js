import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {
    AsyncAgencyDashboardComponent,
    AsyncEcommerceDashboardComponent, AsyncNewsDashboardComponent,
    AsyncSaasDashboardComponent
} from "Components/AsyncComponent/AsyncComponent";
import React, {Component} from "react";
import VideoLayout from "../../container/VideoLayout";
import ListDrone from "Routes/video/ListDrone";
import RctAppLayout from "Components/RctAppLayout";
import LiveStream from "Routes/dashboard/livestream";
import connect from "react-redux/es/connect/connect";
//
// const Dashboard = ({ match, location }) => (
//     <div className="dashboard-wrapper">
//         <Switch location={location}>
//             {/*<Redirect exact from={`${match.url}/`} to={`${match.url}/video`} />*/}
//             <Route path={'/list'} component={ListDrone}/>
//             <Route path={`/video`} component={VideoLayout} />
//             {/*<Route path={`${match.url}/`}/>*/}
//         </Switch>
//     </div>
// );
//
// export default Dashboard;

class Video extends Component {
    render() {
        const {match, location} = this.props;
        if (location.pathname === '/video') {
            location.pathname = '/video/list'
        }
        console.log('props', location);

        return (
            <RctAppLayout>
                <Switch location={location}>
                    <Route path={'/video/list'} component={ListDrone}/>
                    <Route path={'/video/video'} component={VideoLayout}/>
                </Switch>
                {/*<ListDrone/>*/}
            </RctAppLayout>
        );
    }
}

export default withRouter(connect(null)(Video));
