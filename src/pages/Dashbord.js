import React, {Component} from 'react';
import PageHeader from "react-bootstrap/es/PageHeader";
import Note from "../components/Note";
import Button from "react-bootstrap/es/Button";
import AddNote from "../components/AddNote";

import Loader from 'react-loaders'
import {Form, Text} from "react-form";
import {request as getNotes, removeRequest, addRequest} from "../reducers/notes.reducer";
import {connect} from "react-redux";



const mapStateToProps = (state)=> ({
    notes: state.notes.data,
});
const mapDistpathToProps = (dispatch)=> ({

    loadNotes: ()=>(dispatch(getNotes())),
    deleteNote: (key)=>(dispatch(removeRequest({id:key}))),
    addNote: (data)=>(dispatch(addRequest(data))),

})
class Dashbord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAddNote = this.handleAddNote.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    refresh() {
        getNotes().then((data) => {
                this.setState({show: false, notes: data.data});

            }
        ).catch((e) => {

            alert("Erreur connect serveur");
        });
    }

    componentWillMount() {

        this.props.loadNotes();
    }

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

     handleAddNote(values) {
         this.props.addNote(values);
         this.setState({show: false});

    }

    async handleSearch(values) {
        /*try {
            if (values['search'] && values['search'] !== '') {
                const notes = await searchNotes(values['search']);
                this.setState({show: false, notes: notes.data});
            }
        } catch (e) {
            alert("Erreur connect serveur");
        }
        */

    }

     handleRemove(key) {
     this.props.deleteNote(key);

    }

    render() {
        return (
            <div className="container-fluid">
                <Form validate={this.validateSearch} onSubmit={submittedValues => this.handleSearch(submittedValues)}>
                    {formApi => (
                        <form onSubmit={formApi.submitForm} id="form1">
                            <div className="form-group">
                                <Text field="search" id="search" className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-default">look</button>
                        </form>
                    )}
                </Form>
                <PageHeader>
                    Mes notes


                </PageHeader>

                <div className="row">
                    <Button bsStyle="success" onClick={() => {
                        this.handleShow()
                    }}>Add Note</Button>
                </div>
                <br/>
                <div className="col-md-12">
                    <div className="row">
                        <ul className="notes">

                            {this.props.notes ? this.props.notes.map((note) => (
                                <Note handleRemove={this.handleRemove} key={note._id} idnote={note._id}
                                      title={note.title} content={note.content} color={note.color}
                                      updateAt={note.updateAt}/>)) : <Loader type="line-scale" active/>}


                        </ul>
                    </div>
                    {this.props.notes && this.props.notes.length ===0 ? (<h4>no notes found</h4>) : ''}

                </div>
                <AddNote show={this.state.show} handleClose={this.handleClose} handleAddNote={this.handleAddNote}/>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDistpathToProps)(Dashbord);
