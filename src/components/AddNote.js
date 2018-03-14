import React, {Component} from 'react';
import Modal from "react-bootstrap/es/Modal";

import {Form, Text, Radio, RadioGroup, Select, Checkbox, TextArea} from 'react-form';
export default class AddNote extends Component {


    constructor(propos) {
        super(propos);
        this.state = {
            show: false
        };
    }
    render() {


        const {show, handleClose} = this.props;

        const colorOptions = [
            {
                label: 'blue',
                value: 'lazur',
            },
            {
                label: 'yellow',
                value: 'yellow',
            },
            {
                label: "red",
                value: 'red',
            },
        ]
        return (<Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add new note</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
                    {formApi => (
                        <form onSubmit={formApi.submitForm} id="form2">
                            <div class="form-group">
                            <label htmlFor="firstName">Title</label>
                            <Text field="firstName" id="firstName" className="form-control" />
                            </div>
                            <div class="form-group">
                                <label htmlFor="content">content</label>
                                <TextArea field="content" id="content" className="form-control" />
                            </div>

                            <div class="form-group">
                                <label htmlFor="color">note color</label>
                                <Select field="color" id="color" options={colorOptions} className="mb-4 form-control" />
                            </div>



                            <button type="submit" className="mb-4 btn btn-primary">
                                Add
                            </button>
                        </form>
                    )}
                </Form>

            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>);
    }


}