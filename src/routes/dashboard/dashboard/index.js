/**
 * SAAS Dashboard
 */
import React, { Component } from 'react'

// intl messages
import IntlMessages from 'Util/IntlMessages';
import dashboard from './dashboard';
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

export default class Dashbaord extends Component {
    render() {
        const { match } = this.props;
        return (
            <div className="Dashboard">
                <PageTitleBar title={<IntlMessages id="Dashboard" />} match={match} />
            </div>
        )
    }
}
