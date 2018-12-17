import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ShowViolation from "./showViolation";
class violation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            violationhide : false,
            listViolation: "1",
        };
        this.handleChange = this.handleChange.bind(this);
    }
    clickViolation =() =>{
        this.setState({  violationhide: true });
    }

    handleChange(date) {
        this.setState({
            date: date
        });
    }
    onItemClickViolation  =(event) => {
        this.setState({
            listViolation : event.currentTarget.dataset.id
        });
    }

    render() {
        const divStyle = {
            margin: '2px',
        };
        return (

            <div>
               <div>
                   <label><h2>Danh sách sai phạm</h2></label>
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
                        <div className="col-sm-4" onClick={this.clickViolation}>
                            <ul id="list-report">
                                <li className="list-group-item list-group-item-danger" onClick={this.onItemClickViolation} data-id="Nguyễn Đức Bình" >Kiểm lâm : Nguyễn Đức Bình {this.state.date.getDate()}/{this.state.date.getMonth()+1}/{this.state.date.getFullYear()}</li>
                                <li className="list-group-item list-group-item-danger"  onClick={this.onItemClickViolation} data-id="Đinh Đăng Hiếu">Kiểm lâm : Đinh Đăng Hiếu{this.state.date.getDate()}/{this.state.date.getMonth()+1}/{this.state.date.getFullYear()}</li>
                                <li className="list-group-item list-group-item-danger" onClick={this.onItemClickViolation} data-id="Nguyễn Đức Hùng">Kiểm lâm : Nguyễn Đức Hùng{this.state.date.getDate()}/{this.state.date.getMonth()+1}/{this.state.date.getFullYear()}</li>
                            </ul>
                        </div>
                        { this.state. violationhide ? <ShowViolation reson ={this.state.listViolation}  date={this.state.date}/>: null }
                    </div>

            </div>

        );
    }
}

export default violation;