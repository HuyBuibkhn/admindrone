import React, {Component} from 'react'import ReactPlayer from "react-player";class ShowReport extends Component {    constructor(props) {        super(props);        this.state = {            videohide: false        };    }    onItem1Click = () => {        if (this.state.videohide === true) {            this.setState({videohide: false});        }        if (this.state.videohide === false) {            this.setState({videohide: true});        }    }    render() {        return (            <div className="col-8">                Ví trí:                {this.props.id}                <br/>                    Chọn drone để quan sát:                {this.numberList(this.props.id)}                <div className='player-wrapper'>                    { this.state.videohide ?                        <ReactPlayer                            className='react-player'                            // style={{                            //     position: 'absolute',                            //     top: 0,                            //     left: ((index % 2) * 50) + '%'                            // }}                            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'                            controls={true}                            width={'100%'}                            height={'100%'}                        />: null }                </div>            </div>        );    }    numberList(id) {        console.log(id);        if (id === "41 22.2110, 2 8.4228"){            return(                <ul className="list-group">                    <li className="list-group-item list-group-item-warning" onClick={this.onItem1Click}>Số hiệu: cclOi  Người điều khiển: Nguyễn Đức Bình</li>                    <li className="list-group-item list-group-item-warning" onClick={this.onItem1Click}>Số hiệu: yDb8j  Người điều khiển: Đinh Đăng Hiếu</li>                    <li className="list-group-item list-group-item-warning" onClick={this.onItem1Click}>Số hiệu: PXoUS  Người điều khiển: Lưu Danh Tuấn</li>                </ul>            );        }        else if (id === "42 23.2028, 2 2.3448"){            return(                <ul className="list-group">                    <li className="list-group-item list-group-item-warning" onClick={this.onItem1Click}>Số hiệu: xcq5p  Người điều khiển: Nguyễn Văn Hùng</li>                    <li className="list-group-item list-group-item-warning" onClick={this.onItem1Click}>Số hiệu: 8XkUV  Người điều khiển: Đỗ Minh Hải</li>                    <li className="list-group-item list-group-item-warning" onClick={this.onItem1Click}>Số hiệu: Kemxs  Người điều khiển: Nguyễn Đức Hùng</li>                </ul>            );        }        else if (id === "40 13.1018, 3 4.5008"){            return(                <ul className="list-group">                    <li className="list-group-item list-group-item-warning" onClick={this.onItem1Click}>Số hiệu: DU1y9  Người điều khiển: Vũ Minh Hiếu</li>                    <li className="list-group-item list-group-item-warning" onClick={this.onItem1Click}>Số hiệu: 7AdGB  Người điều khiển: Lưu Hồng Quân</li>                </ul>            );        }        else if (id === "44 22.2228, 2 6.1228"){            return(                <ul className="list-group">                    <li className="list-group-item list-group-item-warning" onClick={this.onItem1Click}>Số hiệu: JEA0p  Người điều khiển: Cù Thái Phú</li>                    <li className="list-group-item list-group-item-warning" onClick={this.onItem1Click}>Số hiệu: OAOyM  Người điều khiển: Nguyễn Thiện Anh</li>                    <li className="list-group-item list-group-item-warning" onClick={this.onItem1Click}>Số hiệu: Nr0YK  Người điều khiển: Đinh Đăng Hiếu</li>                </ul>            );        }        else if (id === "28 26.1528, 3 3.4788"){            return(                <ul className="list-group">                    <li className="list-group-item list-group-item-warning" onClick={this.onItem1Click}>Số hiệu: VNppx  Người điều khiển: Nguyễn Đức Bình</li>                    <li className="list-group-item list-group-item-warning" onClick={this.onItem1Click}>Số hiệu: C7nYG  Người điều khiển: Nguyễn Thiện Anh</li>                    <li className="list-group-item list-group-item-warning" onClick={this.onItem1Click}>Số hiệu: U8x8L  Người điều khiển: Đinh Đăng Hiếu</li>                </ul>            );        }        else if (id === "46 24.1022, 1 5.3998"){            return(                <ul className="list-group">                    <li className="list-group-item list-group-item-warning" onClick={this.onItem1Click}>Số hiệu: 7AdGB  Người điều khiển:Lưu Hồng Quân</li>                    <li className="list-group-item list-group-item-warning" onClick={this.onItem1Click}>Số hiệu: U8x8L  Người điều khiển: Nguyễn Đức Hùng</li>                    <li className="list-group-item list-group-item-warning" onClick={this.onItem1Click}>Số hiệu: Kemxs  Người điều khiển: Đỗ Minh Hải</li>                </ul>            );        }    }}export default ShowReport;