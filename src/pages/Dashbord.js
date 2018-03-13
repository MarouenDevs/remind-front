import React, {Component} from 'react';
import PageHeader from "react-bootstrap/es/PageHeader";
import Note from "../components/Note";


class Dashbord extends Component {
    constructor(props) {
        super(props);
          const d= new Date();
        this.state = {
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


    }

    componentWillMount() {

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

                            {this.state.notes.map((note) => (
                                <Note key={note.id} title={note.title} content={note.content} color={note.color}
                                      updateAt={note.updateAt}/>))}


                        </ul>
                    </div>


                </div>
            </div>
        );
    }
}

export default Dashbord;
