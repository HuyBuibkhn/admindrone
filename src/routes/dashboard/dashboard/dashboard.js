import React, { Component } from 'react';

import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: '1/2018', uv: 40, pv: 24, amt: 24},
                {name: '2/2018', uv: 30, pv: 13, amt: 22},
                {name: '3/2018', uv: 20, pv: 98, amt: 22},
                {name: '4/2018', uv: 27, pv: 39, amt: 20},
                {name: '5/2018', uv: 19, pv: 48, amt: 21},
                {name: '6/2018', uv: 23, pv: 38, amt: 25},
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
                {name: '9/2018', uv: 3, pv: 4, amt: 2},
                {name: '10/2018', uv: 3, pv: 4, amt: 1},
                {name: '11/2018', uv: 3, pv: 4, amt: 2},
                {name: '12/2018', uv: 3, pv: 4, amt: 2},
            ],

        }
    }

    render() {
        const  data  = this.state.data;
        const  data1  = this.state.data1;

        return (
            <div>
                <div>
                    <div>
                        <p>Thống kê cảnh báo</p>
                    </div>
                    <ResponsiveContainer className="chart" height={300}>
                        <LineChart
                            width={600}
                            height={300}
                            data={data}
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
                <div>
                    <div>
                        <p>Thống kê sai phạm</p>
                    </div>
                    <ResponsiveContainer className="chart" height={300}>
                        <LineChart
                            width={600}
                            height={300}
                            data={data1}
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