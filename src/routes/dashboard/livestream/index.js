import React, {Component} from 'react'
import RctAppLayout from '../../../components/RctAppLayout'
import {
    ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, Input,
    Modal, ModalHeader, ModalFooter, ModalBody,
    Button
} from 'reactstrap';
import data from '../../../routes/video/data'
import DatePicker from "react-datepicker";
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css";
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet
import {Media, Player, controls} from 'react-media-player'
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import imgDrone1 from '../../../assets/img/drone1.jpg'
import imgMap from '../../../assets/img/map.png'
import '../../../assets/css/app.css'


const {PlayPause, MuteUnmute} = controls;


export default class LiveStream extends Component {

    constructor(props) {
        super(props);
        this.relatedDrones = [];
        for (let i = 0; i < 3; i++) {
            let index = Math.floor(Math.random() * 500);
            let relatedDrone = data.drones[index];
            this.relatedDrones.push(relatedDrone)
        }
        this.state = {
            dropdownOpen: false,
            drones: data.drones,
            droneInputSearch: '',
            selectedDrone: null,
            selectedDroneIndex: 0,
            startDate: new Date(),
            showModalDatePicker: false,
            flyTime: 7 * 60 * 60,
            dronePosition: {
                bottom: 380,
                right: 130
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        setInterval(() => {
            let flyTime = this.state.flyTime += 1;
            this.setState({flyTime})
        }, 1000);
        setInterval(() => {
            if (this.state.showModalDatePicker) {
                let right = this.state.dronePosition.right += 0.1;
                let bottom = this.state.dronePosition.bottom -= 0.2;
                let dronePosition = {
                    bottom: bottom,
                    right: right
                };
                this.setState({dronePosition})
            }
        }, 1000)
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    calculateFlyTime() {
        let ss = this.state.flyTime % 60;
        let mm = Math.floor((this.state.flyTime - ss) / 60) % 60;
        let hh = Math.floor(this.state.flyTime / 3600);
        return (hh < 10 ? ('0' + hh) : hh) + ':' + (mm < 10 ? ('0' + mm) : mm) + ':' + (ss < 10 ? ('0' + ss) : ss)
    }

    render() {
        let selectedDrone = this.state.drones[this.state.selectedDroneIndex];
        return (
            <div>
                <div className="ecom-dashboard-wrapper" style={{backgroundColor: 'white'}}>
                    {/*<PageTitleBar title={<IntlMessages id="sidebar.ecommerce"/>} match={match}/>*/}
                    <ButtonDropdown isOpen={this.state.dropdownOpen}
                                    toggle={() => this.setState({dropdownOpen: !this.state.dropdownOpen})}>
                        <DropdownToggle caret>
                            {`Drone ${selectedDrone.id + 1}. Số hiệu: ${selectedDrone.code}`}
                        </DropdownToggle>
                        <DropdownMenu style={{overflowY: 'scroll', maxHeight: 150}}>
                            <InputGroup>
                                <Input placeholder="Tìm kiếm số hiệu drone..." onChange={(e) => {
                                    console.log('evt', e.target.value);
                                    this.setState({droneInputSearch: e.target.value})
                                }}/>
                            </InputGroup>
                            {
                                this.state.drones.filter(drone => drone.code.toLowerCase().indexOf(this.state.droneInputSearch.toLowerCase()) !== -1).map((drone, index) => {
                                    return (<DropdownItem
                                        onClick={() => {
                                            this.relatedDrones = [];
                                            for (let i = 0; i < 3; i++) {
                                                let index = Math.floor(Math.random() * 500);
                                                let relatedDrone = data.drones[index];
                                                this.relatedDrones.push(relatedDrone)
                                            }
                                            this.setState({
                                                droneInputSearch: '',
                                                selectedDroneIndex: this.state.drones.indexOf(drone)
                                            });
                                        }}
                                        key={index}>{`Drone ${drone.id + 1}. Số hiệu: ${drone.code}`}</DropdownItem>)
                                })
                            }
                        </DropdownMenu>
                    </ButtonDropdown>
                    <br/><br/>

                    {/*<Media>*/}
                    <div className="media" style={{display: 'flex'}}>
                        <div className="media-player"
                             style={{width: '70%', flexDirection: 'row', height: '100%'}}>
                            {/*<iframe frameBorder="0" allowFullScreen="1"*/}
                            {/*style={{width: '70%', height: '70%', position: 'absolute', top: 100, bottom: 0}}*/}
                            {/*allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"*/}
                            {/*title="YouTube video player"*/}
                            {/*height={'100%'}*/}
                            {/*src="https://www.youtube.com/embed/h3YVKTxTOgU?controls=0&amp;showinfo=0&amp;modestbranding=1&amp;enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A8080&amp;widgetid=1"*/}
                            {/*id="widget2"/>*/}

                            <div className='player-wrapper'>
                                <ReactPlayer
                                    className='react-player'
                                    // style={{
                                    //     position: 'absolute',
                                    //     top: 0,
                                    //     left: ((index % 2) * 50) + '%'
                                    // }}
                                    playing={true}
                                    muted={true}
                                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                    controls={true}
                                    width={'100%'}
                                    height={'100%'}
                                />
                            </div>
                            <br/>
                            Các video cùng quét qua vị trí này:
                            {
                                this.relatedDrones.map((drone, index) => {
                                    // let i = Math.floor(Math.random() * 500);
                                    // let drone = this.state.drones[i];
                                    return (
                                        <div>
                                            <br/>
                                            <Link to={""}
                                                  style={{marginBottom: 5}}>{`Drone ${drone.id + 1}. Số hiệu: ${drone.code}`}</Link>
                                            <div className='player-wrapper'>
                                                <ReactPlayer
                                                    className='react-player'
                                                    playing={true}
                                                    muted={true}
                                                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                                                    controls={true}
                                                    width={'100%'}
                                                    height={'100%'}
                                                />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {/*<div style={{width: '70%', height: '100%'}}/>*/}
                        </div>
                        <div style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            height: 100,
                            paddingLeft: 20,
                            // marginTop: 20
                        }}>
                            {/*<div style={{marginTop: 20, display: 'flex', flexDirection: 'column'}}>*/}
                            <b>Chi tiết:</b>
                            <img src={imgDrone1} style={{width: 250, height: 140}}/>
                            <table style={{width: '100%'}}>
                                <tr>
                                    <td width={'70%'}>Mã số</td>
                                    <td>{selectedDrone.id + 1}</td>
                                </tr>
                                <tr>
                                    <td>Số hiệu</td>
                                    <td>{selectedDrone.code}</td>
                                </tr>
                                <tr>
                                    <td>Năm sản xuất</td>
                                    <td>{selectedDrone.year}</td>
                                </tr>
                                <tr>
                                    <td>Hãng sản xuất</td>
                                    <td>DJI (Đài Loan)</td>
                                </tr>
                                <tr>
                                    <td>Thời lượng bay hôm nay (hh:mm:ss)</td>
                                    <td>{this.calculateFlyTime()}</td>
                                </tr>
                            </table>
                            <br/>
                            {/*</div>*/}
                            <b>Lộ trình bay</b>
                            <img src={imgMap} style={{width: '100%', height: 'auto'}}/>
                            <a style={{color: 'blue'}} onClick={() => this.setState({showModalDatePicker: true})}>Phóng
                                to</a>
                            ----------------------------------------------------------------------
                            <b>Cảnh báo:</b>
                            <table className="warning-table">
                                <tr>
                                    <th style={{width: '10%', padding: 5, textAlign: 'center'}}>STT</th>
                                    <th style={{padding: 5, textAlign: 'center'}}>Nội dung</th>
                                    <th style={{textAlign: 'center', padding: 5}}>Thời gian</th>
                                </tr>
                                <tr>
                                    <td style={{width: '10%', padding: 0, textAlign: 'center'}}>1</td>
                                    <td>Cháy rừng</td>
                                    <td style={{width: '30%', textAlign: 'center'}}><a href={""}>03:01</a></td>
                                </tr>
                                <tr>
                                    <td style={{width: '10%', padding: 0, textAlign: 'center'}}>1</td>
                                    <td>Cháy rừng</td>
                                    <td style={{width: '30%', textAlign: 'center'}}><a href={""}>03:01</a></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    {/*</Media>*/}

                    <Modal isOpen={this.state.showModalDatePicker}
                           style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                           contentClassName={"modal-map"}
                           toggle={() => this.setState({showModalDatePicker: false})}>
                        <ModalHeader>Modal title</ModalHeader>
                        <ModalBody>
                            <div>
                                <img src={require('../../../assets/img/map.png')}
                                     style={{width: '100%', height: 'auto'}}/>
                                <img src={require('../../../assets/img/drone.png')} style={{
                                    width: 30, height: 30, position: 'absolute', zIndex: 1000,
                                    bottom: this.state.dronePosition.bottom,
                                    right: this.state.dronePosition.right
                                }}/>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={() => {
                                this.setState({showModalDatePicker: false});
                            }}>Okey</Button>{' '}
                        </ModalFooter>
                    </Modal>

                </div>
            </div>
        );
    }
}
