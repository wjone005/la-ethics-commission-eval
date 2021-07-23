import React from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed='' expand='sm' bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src="https://ethics.lacity.org/wp-content/uploads/thegem-logos/logo_90ee8a1deaeafbfabd1645f2e1f8cd90_2x.gif"
                        width="100"
                        height="50"
                        className="d-inline-block align-top"
                        />{' '}
                    
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav' >
                    <Nav className="me-auto">
                        <NavDropdown id="nav-dropdown-dark-example"title="About" menuVariant="dark">
                            <NavDropdown.Item href="https://ethics.lacity.org/mission/">Mission/History</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/commissioners/">Commissioners</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/staff/">Staff</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/meetings/">Meetings</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/jobs/">Jobs</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/contact/">Contact Us</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown id="nav-dropdown-dark-example"title="Programs" menuVariant="dark">
                            <NavDropdown.Item href="https://ethics.lacity.org/campaigns/">Campaigns</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/contracts/">Contracts</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/ethics/">Ethics</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/lobbying/">Lobbying</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown id="nav-dropdown-dark-example"title="Work" menuVariant="dark">
                            <NavDropdown.Item href="https://ethics.lacity.org/advice/">Advice</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/audits/">Audits</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/disclosure/">Disclosure</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/education/">Education</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/enforcement/">Enforcement</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/policy/">Policy</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown id="nav-dropdown-dark-example"title="Communities" menuVariant="dark">
                            <NavDropdown.Item href="https://ethics.lacity.org/bidders/">Bidders</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/candidates/">Candidates</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/city-employees/">City Employees</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/city-officials/">City Officials</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/city-commissioners/">Commissioners</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/committees/">Committees</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/contractors/">Contractors</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/contributors/">Contributors</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/departments/">Departments</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/department-heads/">Department Heads</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/independent-spenders/">Independent Spenders</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/lobbyists/">Lobbyists</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/lobbying-firms/">Lobbying Firms</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/lobbyist-employers/">Lobbyist Employers</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/major-filers/">Major Filers</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/officeholders/">Office Holders</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown id="nav-dropdown-dark-example"title="Resources" menuVariant="dark">
                            <NavDropdown.Item href="https://ethics.lacity.org/forms/">Forms</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/publications/">Publications</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/laws/">Laws</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/news/">News</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/coicodes/">COI Codes</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/elections/">Elections</NavDropdown.Item>
                            <NavDropdown.Item href="https://ethics.lacity.org/external-links/">External Links</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;