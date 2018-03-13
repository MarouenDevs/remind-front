import React, {Component} from 'react';
import Panel from "react-bootstrap/es/Panel";
import {Table} from "react-bootstrap";
import PageHeader from "react-bootstrap/es/PageHeader";
import Glyphicon from "react-bootstrap/es/Glyphicon";
import Button from "react-bootstrap/es/Button";


class Dashbord extends Component {
    constructor(props) {
        super(props);


    }

    registerSocket(state, cb) {

        this.props.socket.on('rider', function (data) {
            let riders = state.riders;
            riders[data.rider_id] = data;
            cb.setState(riders);
            localStorage.setItem('state', JSON.stringify(cb.state));
        });
    }

    render() {

        return (
            <div className="row">
                <PageHeader>
                    Mes notes

                </PageHeader>


                <div className="col-md-12">


                        <div className="row">
                            <ul className="notes">
                                <li>
                                    <div className="rotate-1 lazur-bg">
                                        <small>12:03:28 12-04-2014</small>
                                        <h4>Awesome title</h4>
                                        <p>The years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                        <Button bsSize="xsmall">
                                            <Glyphicon glyph="star" /> Star
                                        </Button>
                                    </div>
                                </li>
                                <li>
                                    <div className="rotate-2 red-bg">
                                        <small>12:03:28 12-04-2014</small>
                                        <h4>Awesome date</h4>
                                        <p>The years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                        <a href="#" className="text-danger pull-right"><i className="fa fa-trash-o "></i></a>
                                    </div>
                                </li>
                                <li>
                                    <div className="rotate-1 yellow-bg">
                                        <small>12:03:28 12-04-2014</small>
                                        <h4>Awesome project</h4>
                                        <p>The years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                        <a href="#" className="text-danger pull-right"><i className="fa fa-trash-o "></i></a>
                                    </div>
                                </li>
                            </ul>
                        </div>


                </div>
            </div>
        );
    }
}

export default Dashbord;
