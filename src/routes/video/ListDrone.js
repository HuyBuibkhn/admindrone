import React, {Component} from 'react'
import RctAppLayout from "Components/RctAppLayout";
import '../../assets/css/app.css';
import {withRouter, Link} from 'react-router-dom'
import data from './data';
import Collapsible from 'react-collapsible';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import imgDrone1 from "Assets/img/drone1.jpg";
import imgMap from "Assets/img/map.png";
import {Button} from 'reactstrap'

// import iconClose from '../..'


class ListDrone extends Component {

    constructor(props) {
        super(props);
        console.log('data', data.drones);
        let d = [];
        d.push({
            area: 'Khu vực 1A',
            ranger: 'Nguyễn Đức Bình',
            drones: data.drones.slice(0, 50)
        });
        d.push({
            area: 'Khu vực 1B',
            ranger: 'Đinh Đăng Hiếu',
            drones: data.drones.slice(50, 100)
        });
        d.push({
            area: 'Khu vực 1C',
            ranger: 'Lưu Danh Tuấn',
            drones: data.drones.slice(100, 150)
        });
        d.push({
            area: 'Khu vực 2A',
            ranger: 'Nguyễn Văn Hùng',
            drones: data.drones.slice(150, 200)
        });
        d.push({
            area: 'Khu vực 2B',
            ranger: 'Đỗ Minh Hải',
            drones: data.drones.slice(200, 250)
        });
        d.push({
            area: 'Khu vực 2C',
            ranger: 'Nguyễn Đức Hùng',
            drones: data.drones.slice(250, 300)
        });
        d.push({
            area: 'Khu vực 3A',
            ranger: 'Vũ Minh Hiếu',
            drones: data.drones.slice(300, 350)
        });
        d.push({
            area: 'Khu vực 3B',
            ranger: 'Lưu Hồng Quân',
            drones: data.drones.slice(350, 400)
        });
        d.push({
            area: 'Khu vực 3C',
            ranger: 'Cù Thái Phú',
            drones: data.drones.slice(400, 450)
        });
        d.push({
            area: 'Khu vực 3D',
            ranger: 'Nguyễn Thiện Anh',
            drones: data.drones.slice(450, 500)
        });
        this.d = d;
        this.state = {
            selectedDrone: null,
            viewMap: false,
            viewDetail: false
        }
    }


    render() {
        return (
            <div className="ecom-dashboard-wrapper">
                <Button color="info" style={{marginTop: 10, marginBottom: 10}}
                        onClick={() => this.setState({viewMap: !this.state.viewMap})}>{this.state.viewMap ? 'Ẩn' : 'Xem'} bản
                    đồ</Button>
                {
                    this.state.viewMap &&
                    <img src={require('../../assets/img/map_al.png')}
                         style={{width: '100%', height: 'auto', marginBottom: 10}}/>
                }
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{flex: 1, paddingRight: 20}}>
                        {
                            this.d.map((item, index) => {
                                return (
                                    <div style={{marginBottom: 20}}>
                                        <Collapsible
                                            key={index}
                                            trigger={
                                                <div style={{
                                                    width: '100%',
                                                    backgroundColor: '#3B5998',
                                                    padding: 10,
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    paddingRight: 10
                                                }}>
                                                <span
                                                    style={{color: 'white', marginLeft: 10, flex: 1}}>{item.area}</span>
                                                    <svg
                                                        version="1.1" id="Capa_1" x="0px" y="0px" width="12px"
                                                        height="12px"
                                                        viewBox="0 0 292.362 292.362">
                                                        <g>
                                                            <path
                                                                d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424   C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428   s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"
                                                                fill="#FFFFFF"/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            }>
                                            <table style={{width: '100%'}} className="table-drone">
                                                <thead style={{width: '100%', backgroundColor: 'white'}}>
                                                <th style={{width: '20%'}}>DRONE</th>
                                                <th style={{width: '25%'}}>KIỂM LÂM QUẢN LÝ</th>
                                                <th style={{width: '10'}}>TRẠNG THÁI</th>
                                                <td style={{width: '10%', textAlign: 'center'}}/>
                                                <td style={{width: '10%'}}/>
                                                </thead>
                                                {
                                                    item.drones.map((drone, index) => {
                                                        return (
                                                            <tr style={{
                                                                width: '100%',
                                                                paddingTop: 10,
                                                                paddingBottom: 10,
                                                                height: 40,
                                                                backgroundColor: drone === this.state.selectedDrone ? '#e6e6e6' : 'white'
                                                            }} key={index}>
                                                                <td style={{width: '20%'}}>{`Drone ${drone.id + 1}. Số hiệu: ${drone.code}`}</td>
                                                                <td style={{
                                                                    width: '25%',
                                                                    color: '#6e727a'
                                                                }}>{item.ranger}</td>
                                                                <td style={{width: '10%', color: '#6e727a'}}>Active</td>
                                                                <td style={{width: '10%', textAlign: 'center'}}>
                                                                    <Link className="view-live-stream"
                                                                          to={'/video/video'} onClick={() => {
                                                                        console.log('props', this.props)
                                                                    }}>
                                                                        Xem video
                                                                    </Link>
                                                                </td>
                                                                <td style={{width: '10%', textAlign: 'center'}}>
                                                                    <a className="view-detail-drone"
                                                                       onClick={() => this.setState({
                                                                           selectedDrone: drone,
                                                                           viewDetail: true
                                                                       })}>
                                                                        Xem thông tin
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </table>
                                        </Collapsible>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        this.state.viewDetail &&
                        <div style={{width: 300}}>
                            <a style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} onClick={() => this.setState({viewDetail: false, selectedDrone: null})}>
                                <img src={require('../../assets/img/arrow-point-to-right.png')} style={{width: 10, height: 10, marginRight: 10}} />
                                Đóng
                            </a>
                            <br/>
                            <b>Chi tiết:</b>
                            <img src={imgDrone1} style={{width: 250, height: 140}}/>
                            <table style={{width: '100%'}}>
                                <tr>
                                    <td width={'70%'}>Mã số</td>
                                    <td>{this.state.selectedDrone.id + 1}</td>
                                </tr>
                                <tr>
                                    <td>Số hiệu</td>
                                    <td>{this.state.selectedDrone.code}</td>
                                </tr>
                                <tr>
                                    <td>Năm sản xuất</td>
                                    <td>{this.state.selectedDrone.year}</td>
                                </tr>
                                <tr>
                                    <td>Hãng sản xuất</td>
                                    <td>DJI (Đài Loan)</td>
                                </tr>
                                <tr>
                                    <td>Thời lượng bay hôm nay (giờ)</td>
                                    <td>8</td>
                                </tr>
                            </table>
                            <br/>
                            {/*</div>*/}
                            <b>Lộ trình bay</b>
                            <img src={imgMap} style={{width: '100%', height: 'auto'}}/>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(ListDrone)
