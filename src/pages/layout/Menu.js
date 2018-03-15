import React, {Component} from 'react';
import { Nav, Navbar, NavItem } from "react-bootstrap";



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
                </Navbar.Collapse>
            </Navbar>


        );
    }
}

export default Menu;
