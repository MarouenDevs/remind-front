import React, {Component} from 'react';
import Modal from "react-bootstrap/es/Modal";
import Button from "react-bootstrap/es/Button";

export default class AddNote extends Component {


    constructor(propos) {
        super(propos);
        this.state = {
            show: false
        };
    }
    render() {
        const {show, handleClose} = this.props;
        return (<Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Add new note</h4>


            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>);
    }


}