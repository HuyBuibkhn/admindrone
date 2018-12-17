/**
 * Login Page
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { loginAccount } from "../actions/AuthActions";
import LinearProgress from '@material-ui/core/LinearProgress';
import QueueAnim from 'rc-queue-anim';
import { Redirect, withRouter,  } from 'react-router-dom';
// components
import { SessionSlider } from 'Components/Widgets';

// app config
import AppConfig from 'Constants/AppConfig';

// redux action
// import {
//     loginAccount
// } from 'Actions';

class Signin extends Component {

    state = {
        username: '',
        password: ''
    }

    /**
     *
     * setState
     */
    updateLoginDetail(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    /**
     * On User Login
     */
    onLogin(e) {

        this.props.history.push('/app/dashboard');
        // this.props.login(this.state.username, this.state.password)
        //     .then(account => {
        //     this.props.history.push('/app/dashboard/ecommerce');
        // });
    }


    render() {
        const { user } = this.props;
        const { loading } = this.props;
        return (
            <QueueAnim type="bottom" duration={2000}>
                <div className="rct-session-wrapper">
                    {loading &&
                    <LinearProgress />
                    }
                    <AppBar position="static" className="session-header">
                        <Toolbar>
                            <div className="container">
                                <div className="d-flex justify-content-between">
                                    <div className="session-logo">
                                        <Link to="/">
                                            <img src={AppConfig.appLogo} alt="session-logo" className="img-fluid" width="110" height="35" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Toolbar>
                    </AppBar>
                    <div className="session-inner-wrapper">
                        <div className="container">
                            <div className="row row-eq-height">
                                <div className="col-md-6 offset-md-3 mt-50">
                                    <div className="session-body text-center">
                                        <div className="session-head mb-30">
                                            <h2 className="font-weight-bold">Login Mandexpa</h2>
                                        </div>
                                        <form onSubmit={(e) => this.onLogin(e)}>
                                            <div className="form-group">
                                                <label className="font-weight-bold" htmlFor="username">Username</label>
                                                <input type="text" className="form-control" name='username' value={this.state.username} onChange={(event) => this.updateLoginDetail(event)} required />
                                            </div>
                                            <div className="form-group">
                                                <label className="font-weight-bold" htmlFor="password">Password</label>
                                                <input type="password" className="form-control" name='password' value={this.state.password} onChange={(event) => this.updateLoginDetail(event)} required />
                                            </div>
                                            <div className="col-md-6 offset-md-3">
                                                <button type="submit" className="btn btn-outline-primary">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </QueueAnim>
        );
    }
}

// map state to props
function mapStateToProps(state) {
    return { user:  state.authUser.user }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (username, password) => dispatch(loginAccount(username, password))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signin));
