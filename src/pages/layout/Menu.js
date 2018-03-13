import React, {Component} from 'react';

import { Nav, Navbar, NavItem } from "react-bootstrap";
import FormGroup from "react-bootstrap/es/FormGroup";
import Button from "react-bootstrap/es/Button";
import FormControl from "react-bootstrap/es/FormControl";


class Menu extends Component {


    render() {

        return (

            <Navbar staticTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Remind</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/">
                            Notes
                        </NavItem>
                        <NavItem eventKey={2} href="/archives">
                            Archive
                        </NavItem>

                    </Nav>
                    <Navbar.Form >
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>{' '}
                        <Button type="submit">Submit</Button>
                    </Navbar.Form>


                </Navbar.Collapse>
            </Navbar>


        );
    }
}

export default Menu;
