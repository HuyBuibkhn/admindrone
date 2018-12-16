import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            date: date
        });
    }
    render() {
        const divStyle = {
            margin: '2px',
        };
        return (

            <div>
               <div>
                   <label><h2>Danh sách cảnh báo</h2></label>
               </div>
                <div>
                    <div style={divStyle}>Chọn ngày: </div>
                    <DatePicker
                        selected={this.state.date}
                        onChange={this.handleChange}
                    />
                </div>
                <br/>
                <ul className="list-group col-4 ">
                    <li className="list-group-item list-group-item-danger">Cháy rừng 2:00 AM {this.state.date.getDate()}/{this.state.date.getMonth()}/{this.state.date.getFullYear()}</li>
                    <li className="list-group-item list-group-item-danger">Chặt phá 3:00 AM {this.state.date.getDate()}/{this.state.date.getMonth()}/{this.state.date.getFullYear()}</li>
                    <li className="list-group-item list-group-item-danger">Cháy rừng  8:00 AM {this.state.date.getDate()}/{this.state.date.getMonth()}/{this.state.date.getFullYear()}</li>
                    <li className="list-group-item list-group-item-danger">Cháy rừng 9:00 PM {this.state.date.getDate()}/{this.state.date.getMonth()}/{this.state.date.getFullYear()}</li>
                    <li className="list-group-item list-group-item-danger">Chặt  phá 11:00 PM {this.state.date.getDate()}/{this.state.date.getMonth()}/{this.state.date.getFullYear()}</li>
                    <li className="list-group-item list-group-item-danger">Cháy rừng  11:30 PM {this.state.date.getDate()}/{this.state.date.getMonth()}/{this.state.date.getFullYear()}</li>
                </ul>

            </div>

        );
    }
}

export default dashboard;