import React, {Component} from 'react';
import Modal from "react-bootstrap/es/Modal";

import {Form, Text, Select, TextArea} from 'react-form';

export default class AddNote extends Component {


    constructor(propos) {
        super(propos);
        this.state = {
            show: false,

        };

        this.validate = this.validate.bind(this);
    }

    validate(values) {
        let result = {title: null, content: null, color: null};
        if (values['title'] === '' || !values['title']) {
            result['title'] = "title is requied";
        }
        if (values['content'] === '' || !values['content']) {
            result['content'] = "content is requied";
        }

        if (values['color'] === '' || !values['color']) {
            result['color'] = "color is requied";
        }

        return result;

    }

    render() {


        const {show, handleClose, handleAddNote} = this.props;

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

                <Form validate={this.validate} onSubmit={submittedValues => handleAddNote(submittedValues)}>
                    {formApi => (
                        <form onSubmit={formApi.submitForm} id="form2">
                            <div className="form-group">
                                <label htmlFor="title">Title <span className="requiredElem">*</span></label>
                                <Text field="title" id="title" className="form-control"/>
                                <p className="error-msg">{formApi.errors ? formApi.errors.title : ''}</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">content</label>
                                <TextArea field="content" id="content" className="form-control"/>
                                <p className="error-msg">{formApi.errors ? formApi.errors.content : ''}</p>
                            </div>

                            <div className="form-group">
                                <label htmlFor="color">note color</label>
                                <Select field="color" id="color" options={colorOptions} className="mb-4 form-control"/>
                                <p className="error-msg">{formApi.errors ? formApi.errors.color : ''}</p>
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