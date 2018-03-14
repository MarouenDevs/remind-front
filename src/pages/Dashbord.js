import React, {Component} from 'react';
import PageHeader from "react-bootstrap/es/PageHeader";
import Note from "../components/Note";
import FormGroup from "react-bootstrap/es/FormGroup";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/es/Button";
import Form from "react-bootstrap/es/Form";
import Glyphicon from "react-bootstrap/es/Glyphicon";
import AddNote from "../components/AddNote";


class Dashbord extends Component {
    constructor(props) {
        super(props);
        const d = new Date();
        this.state = {
            show: false,
            notes: [{
                id: 1,
                title: "title 1",
                content: "my content 1",
                updateAt: d.toDateString(),
                color: 'lazur',
            },
                {
                    id: 2,
                    title: "title 1",
                    content: "my content 1",
                    updateAt: d.toDateString(),
                    color: 'red',

                },
                {
                    id: 4,
                    title: "title 1",
                    content: "my content 1",
                    updateAt: d.toDateString(),
                    color: 'red',

                },
                {
                    id: 5,
                    title: "title 1",
                    content: "my content 1",
                    updateAt: d.toDateString(),
                    color: 'yellow',

                }]
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);


    }

    componentWillMount() {

    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {

        return (
            <div className="container-fluid">

                <PageHeader>
                    Mes notes
                    <Form inline>
                        <FormGroup>
                            <FormControl type="text" placeholder="Recherche "/>
                        </FormGroup>{' '}
                        <Button type="submit">look</Button>
                    </Form>


                </PageHeader>

                <div className="row">
                    <Button bsStyle="success" onClick={()=>{this.handleShow()}}>Add Note</Button>
                </div>
                <br/>
                <div className="col-md-12">
                    <div className="row">
                        <ul className="notes">

                            {this.state.notes.map((note) => (
                                <Note key={note.id} title={note.title} content={note.content} color={note.color}
                                      updateAt={note.updateAt}/>))}


                        </ul>
                    </div>


                </div>
                <AddNote  show={this.state.show} handleClose={this.handleClose}/>
            </div>
        );
    }
}

export default Dashbord;
