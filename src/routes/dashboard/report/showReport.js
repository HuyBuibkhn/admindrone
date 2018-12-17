import React, {Component} from 'react'




class ShowReport extends Component {

    render() {
        return (
            <div className="col-8">
                Ví trí:
                    "N "E
                <div>
                    Chọn drone để quan sát:
                    <ul>
                        <li>
                            {require('Assets/img/device-1.jpg')}
                        </li>
                        <li>
                        </li>
                        <li>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ShowReport;
