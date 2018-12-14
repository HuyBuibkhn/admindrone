import React, { Component } from 'react';

import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : 2018,
            data: [
                {name: '1/2018', uv: 40, pv: 24, amt: 24},
                {name: '2/2018', uv: 30, pv: 13, amt: 22},
                {name: '3/2018', uv: 20, pv: 98, amt: 22},
                {name: '4/2018', uv: 27, pv: 39, amt: 20},
                {name: '5/2018', uv: 19, pv: 48, amt: 21},
                {name: '6/2018', uv: 23, pv: 38, amt: 25},
                {name: '7/2018', uv: 34, pv: 43, amt: 21},
                {name: '8/2018', uv: 34, pv: 43, amt: 21},
                {name: '9/2018', uv: 34, pv: 43, amt: 21},
                {name: '10/2018', uv: 34, pv: 43, amt: 21},
                {name: '11/2018', uv: 34, pv: 43, amt: 21},
                {name: '12/2018', uv: 34, pv: 43, amt: 21},
            ],
            data1: [
                {name: '1/2018', uv: 4, pv: 2, amt: 2},
                {name: '2/2018', uv: 3, pv: 1, amt: 2},
                {name: '3/2018', uv: 2, pv: 9, amt: 2},
                {name: '4/2018', uv: 2, pv: 3, amt: 2},
                {name: '5/2018', uv: 1, pv: 4, amt: 2},
                {name: '6/2018', uv: 2, pv: 3, amt: 2},
                {name: '7/2018', uv: 1, pv: 4, amt: 2},
                {name: '8/2018', uv: 2, pv: 3, amt: 2},
                {name: '9/2018', uv: 3, pv: 4, amt: 2},
                {name: '10/2018', uv: 3, pv: 4, amt: 1},
                {name: '11/2018', uv: 3, pv: 4, amt: 2},
                {name: '12/2018', uv: 3, pv: 4, amt: 2},
            ],

        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        if(event.target.value==="2018"){
            this.setState({
                value : 2018,
                data: [
                    {name: '1/2018', uv: 40, pv: 24, amt: 24},
                    {name: '2/2018', uv: 30, pv: 13, amt: 22},
                    {name: '3/2018', uv: 20, pv: 98, amt: 22},
                    {name: '4/2018', uv: 27, pv: 39, amt: 20},
                    {name: '5/2018', uv: 19, pv: 48, amt: 21},
                    {name: '6/2018', uv: 23, pv: 38, amt: 25},
                    {name: '7/2018', uv: 34, pv: 43, amt: 21},
                    {name: '8/2018', uv: 34, pv: 43, amt: 21},
                    {name: '9/2018', uv: 34, pv: 43, amt: 21},
                    {name: '10/2018', uv: 34, pv: 43, amt: 21},
                    {name: '11/2018', uv: 34, pv: 43, amt: 21},
                    {name: '12/2018', uv: 34, pv: 43, amt: 21},
                ],
                data1: [
                    {name: '1/2018', uv: 4, pv: 2, amt: 2},
                    {name: '2/2018', uv: 3, pv: 1, amt: 2},
                    {name: '3/2018', uv: 2, pv: 9, amt: 2},
                    {name: '4/2018', uv: 2, pv: 3, amt: 2},
                    {name: '5/2018', uv: 1, pv: 4, amt: 2},
                    {name: '6/2018', uv: 2, pv: 3, amt: 2},
                    {name: '7/2018', uv: 1, pv: 4, amt: 2},
                    {name: '8/2018', uv: 2, pv: 3, amt: 2},
                    {name: '9/2018', uv: 3, pv: 4, amt: 2},
                    {name: '10/2018', uv: 3, pv: 4, amt: 1},
                    {name: '11/2018', uv: 3, pv: 4, amt: 2},
                    {name: '12/2018', uv: 3, pv: 4, amt: 2},
                ],
            });
        }
        if(event.target.value==="2017"){
            this.setState({
                value : 2017,
                data: [
                    {name: '1/2017', uv: 20, pv: 24, amt: 24},
                    {name: '2/2017', uv: 10, pv: 13, amt: 22},
                    {name: '3/2017', uv: 20, pv: 18, amt: 22},
                    {name: '4/2017', uv: 37, pv: 39, amt: 20},
                    {name: '5/2017', uv: 19, pv: 28, amt: 21},
                    {name: '6/2017', uv: 23, pv: 38, amt: 25},
                    {name: '7/2017', uv: 23, pv: 28, amt: 25},
                    {name: '8/2017', uv: 44, pv: 23, amt: 21},
                    {name: '9/2017', uv: 34, pv: 43, amt: 21},
                    {name: '10/2017', uv: 14, pv: 13, amt: 21},
                    {name: '11/2017', uv: 34, pv: 23, amt: 21},
                    {name: '12/2017', uv: 34, pv: 33, amt: 21},
                ],
                data1: [
                    {name: '1/2017', uv: 2, pv: 2, amt: 2},
                    {name: '2/2017', uv: 3, pv: 1, amt: 2},
                    {name: '3/2017', uv: 4, pv: 2, amt: 2},
                    {name: '4/2017', uv: 1, pv: 3, amt: 2},
                    {name: '5/2017', uv: 2, pv: 2, amt: 2},
                    {name: '6/2017', uv: 5, pv: 4, amt: 2},
                    {name: '7/2017', uv: 2, pv: 2, amt: 2},
                    {name: '8/2017', uv: 3, pv: 3, amt: 2},
                    {name: '9/2017', uv: 3, pv: 4, amt: 2},
                    {name: '10/2017', uv: 1, pv: 1, amt: 1},
                    {name: '11/2017', uv: 2, pv: 2, amt: 2},
                    {name: '12/2017', uv: 3, pv: 2, amt: 2},
                ],
            });
        }
        if(event.target.value==="2016"){
            this.setState({
                value : 2016,
                data: [
                    {name: '1/2016', uv: 20, pv: 14, amt: 24},
                    {name: '2/2016', uv: 40, pv: 13, amt: 12},
                    {name: '3/2016', uv: 30, pv: 18, amt: 22},
                    {name: '4/2016', uv: 37, pv: 49, amt: 10},
                    {name: '5/2016', uv: 29, pv: 18, amt: 31},
                    {name: '6/2016', uv: 33, pv: 28, amt: 45},
                    {name: '7/2016', uv: 33, pv: 28, amt: 45},
                    {name: '8/2016', uv: 24, pv: 43, amt: 51},
                    {name: '9/2016', uv: 24, pv: 43, amt: 51},
                    {name: '10/2016', uv: 24, pv: 41, amt: 11},
                    {name: '11/2016', uv: 24, pv: 13, amt: 41},
                    {name: '12/2016', uv: 24, pv: 3, amt: 22},
                ],
                data1: [
                    {name: '1/2016', uv: 4, pv: 2, amt: 2},
                    {name: '2/2016', uv: 1, pv: 1, amt: 2},
                    {name: '3/2016', uv: 3, pv: 1, amt: 2},
                    {name: '4/2016', uv: 4, pv: 4, amt: 2},
                    {name: '5/2016', uv: 2, pv: 3, amt: 2},
                    {name: '6/2016', uv: 4, pv: 2, amt: 2},
                    {name: '7/2016', uv: 1, pv: 4, amt: 2},
                    {name: '8/2016', uv: 2, pv: 3, amt: 2},
                    {name: '9/2016', uv: 2, pv: 1, amt: 2},
                    {name: '10/2016', uv: 1, pv: 5, amt: 1},
                    {name: '11/2016', uv: 0, pv: 2, amt: 2},
                    {name: '12/2016', uv: 2, pv: 4, amt: 2},
                ],
            });
        }
    }
    render() {

        return (
            <div>
                <div>
                    <label>Chọn thống kê theo năm : </label>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option key={2018} selected value="2018">2018</option>
                        <option key={2017} value="2017">2017</option>
                        <option  key={2016} value="2016">2016</option>
                    </select>
                </div>
                <div>
                    <div>
                        <p>Thống kê cảnh báo</p>
                    </div>
                    <ResponsiveContainer className="chart" height={300}>
                        <LineChart
                            width={600}
                            height={300}
                            data={this.state.data}
                            margin={{top: 5, right: 30, left: 20, bottom: 5}}
                        >
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                            {/*<Line type="monotone" dataKey="uv" stroke="#82ca9d" />*/}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div>
                    <div>
                        <p>Thống kê sai phạm</p>
                    </div>
                    <ResponsiveContainer className="chart" height={300}>
                        <LineChart
                            width={600}
                            height={300}
                            data={this.state.data1}
                            margin={{top: 5, right: 30, left: 20, bottom: 5}}
                        >
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

        );
    }
}

export default dashboard;