import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ShowReport from "./showReport"
class dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            reporthide : false,
            listN : "1",
            listW : "2"
        };
        this.handleChange = this.handleChange.bind(this);
    }
    clickReport =() =>{
        this.setState({ reporthide: true });
    }

    handleChange(date) {
        this.setState({
            date: date
        });
    }
    handleChangeReport(a) {
        console.log(a);
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
                    <div className="row">
                        <div className="col-sm-4" onClick={this.clickReport}>
                            <ul id="list-report">
                                <li className="list-group-item list-group-item-danger" onClick={this.handleChangeReport(1)}>Cháy rừng 2:00 AM {this.state.date.getDate()}/{this.state.date.getMonth()}/{this.state.date.getFullYear()}</li>
                                <li className="list-group-item list-group-item-danger" onClick={this.handleChangeReport(2)}>Chặt phá 3:00 AM {this.state.date.getDate()}/{this.state.date.getMonth()}/{this.state.date.getFullYear()}</li>
                                <li className="list-group-item list-group-item-danger" onClick={this.handleChangeReport(3)}>Cháy rừng  8:00 AM {this.state.date.getDate()}/{this.state.date.getMonth()}/{this.state.date.getFullYear()}</li>
                                <li className="list-group-item list-group-item-danger" onClick={this.handleChangeReport(4)}>Cháy rừng 9:00 PM {this.state.date.getDate()}/{this.state.date.getMonth()}/{this.state.date.getFullYear()}</li>
                                <li className="list-group-item list-group-item-danger" onClick={this.handleChangeReport(5)}>Chặt  phá 11:00 PM {this.state.date.getDate()}/{this.state.date.getMonth()}/{this.state.date.getFullYear()}</li>
                                <li className="list-group-item list-group-item-danger" onClick={this.handleChangeReport(6)}>Cháy rừng  11:30 PM {this.state.date.getDate()}/{this.state.date.getMonth()}/{this.state.date.getFullYear()}</li>
                            </ul>
                        </div>
                        { this.state.reporthide ? <ShowReport /> : null }
                    </div>

            </div>

        );
    }
}

export default dashboard;