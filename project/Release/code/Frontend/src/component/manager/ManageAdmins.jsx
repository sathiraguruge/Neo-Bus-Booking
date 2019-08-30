import React, {Component} from 'react';
import ManagerList from './list/admin/adminList'
import {Button} from "react-bootstrap";
import Ripples from "react-ripples";
import QueueAnim from "rc-queue-anim";

export default class ManageAdmin extends Component {
    render() {
        return (
            <div>
                <QueueAnim duration="3000" interval="400">
                    <div key="1">
                        <Ripples>
                            <Button className="btn btn-success" onClick={() => {
                                window.location.href = "/addManager";
                            }}>Add Manager <i className="fa fa-user-plus"/></Button></Ripples>
                    </div>
                    <div key="2">
                        <ManagerList/>
                    </div>
                </QueueAnim>
            </div>
        )
    };
}