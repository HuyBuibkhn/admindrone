import React, {Component} from 'react'
import ReactPlayer from "react-player";




class ShowViolation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videohide: false
        };
    }


    render() {
        return (
            <div className="card col-8">
                <div className="card-header">
                    Thông tin sai phạm
                </div>
            <div className="card-body">
                Tên kiểm lâm:
                {this.props.reson}
                <br/>
                <br/>
                {this.numberList(this.props.reson)}
                <div className='player-wrapper'>
                    { this.state.videohide ?
                        <ReactPlayer
                            className='react-player'
                            // style={{
                            //     position: 'absolute',
                            //     top: 0,
                            //     left: ((index % 2) * 50) + '%'
                            // }}
                            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                            controls={true}
                            width={'100%'}
                            height={'100%'}
                        />: null }
                </div>
            </div>
            </div>
        );
    }
    numberList(reson) {
        if (reson === "Nguyễn Đức Bình"){
            return(
                <div>
                    <p>
                        Ngày làm nhiệm vụ: {this.props.date.getDate()}/{this.props.date.getMonth()+1}/{this.props.date.getFullYear()}
                    </p>
                    <p>Drone được giao: 7AdGB
                    </p>
                    <p> Lỗi vi phạm : Sao chép video </p>
                    <p>Video trùng lặp với ngày: 2/5/2018</p>
                </div>

            );
        }
        else  if (reson === "Đinh Đăng Hiếu"){
            return(
                <div>
                    <p>
                        Ngày làm nhiệm vụ: {this.props.date.getDate()}/{this.props.date.getMonth()+1}/{this.props.date.getFullYear()}
                    </p>
                    <p>Drone được giao:  U8x8L
                    </p>
                    <p> Lỗi vi phạm : Không làm nhiệm vụ </p>
                </div>
            );
        }
        else  if (reson === "Nguyễn Đức Hùng"){
            return(
                <div>
                    <p>
                        Ngày làm nhiệm vụ: {this.props.date.getDate()}/{this.props.date.getMonth()+1}/{this.props.date.getFullYear()}
                    </p>
                    <p>Drone được giao: Kemxs
                    </p>
                    <p>Lỗi vi phạm : Sao chép video </p>
                    <p>Video trùng lặp với ngày: 1/3/2018</p>
                </div>
            );
        }

    }
}

export default ShowViolation;