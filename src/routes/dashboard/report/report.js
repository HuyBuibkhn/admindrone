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
            listid: "1",
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
    onItemClick  =(event) => {
        this.setState({
            listid : event.currentTarget.dataset.id
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
                    <div className="row">
                        <div className="col-sm-4" onClick={this.clickReport}>
                            <ul id="list-report">
                                <li className="list-group-item list-group-item-danger" onClick={this.onItemClick} data-id="41 22.2110, 2 8.4228" >Cháy rừng 2:00 AM {this.state.date.getDate()}/{this.state.date.getMonth()+1}/{this.state.date.getFullYear()}</li>
                                <li className="list-group-item list-group-item-danger"  onClick={this.onItemClick} data-id="42 23.2028, 2 2.3448">Chặt phá 3:00 AM {this.state.date.getDate()}/{this.state.date.getMonth()+1}/{this.state.date.getFullYear()}</li>
                                <li className="list-group-item list-group-item-danger" onClick={this.onItemClick} data-id="40 13.1018, 3 4.5008">Cháy rừng  8:00 AM {this.state.date.getDate()}/{this.state.date.getMonth()+1}/{this.state.date.getFullYear()}</li>
                                <li className="list-group-item list-group-item-danger" onClick={this.onItemClick} data-id="44 22.2228, 2 6.1228">Cháy rừng 9:00 PM {this.state.date.getDate()}/{this.state.date.getMonth()+1}/{this.state.date.getFullYear()}</li>
                                <li className="list-group-item list-group-item-danger" onClick={this.onItemClick} data-id="28 26.1528, 3 3.4788">Chặt  phá 11:00 PM {this.state.date.getDate()}/{this.state.date.getMonth()+1}/{this.state.date.getFullYear()}</li>
                                <li className="list-group-item list-group-item-danger" onClick={this.onItemClick} data-id="46 24.1022, 1 5.3998">Cháy rừng  11:30 PM {this.state.date.getDate()}/{this.state.date.getMonth()+1}/{this.state.date.getFullYear()}</li>
                            </ul>
                        </div>
                        { this.state.reporthide ? <ShowReport id={this.state.listid}/> : null }
                    </div>

            </div>

        );
    }
}

export default dashboard;