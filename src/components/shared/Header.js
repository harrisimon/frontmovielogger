import React, { Fragment, useState } from "react"

import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import { LinkContainer } from "react-router-bootstrap"
import { PersonCircle } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import { NavDropdown } from "react-bootstrap"
const linkStyle = {
	color: "white",
	textDecoration: "none",
}


const Header = ({ user }) => {
	console.log(user)
	const unauthenticatedOptions = (
		<>
			<LinkContainer to="/sign-up" style={linkStyle}>
				<Nav.Link>Sign Up</Nav.Link>
			</LinkContainer>
			<LinkContainer to="/sign-in" style={linkStyle}>
				<Nav.Link>Sign In</Nav.Link>
			</LinkContainer>
		</>
	)
	const authenticatedOptions = (
		<>
			<LinkContainer to="/my-logs" style={linkStyle}>
				<Nav.Link>My Logs</Nav.Link>
			</LinkContainer>
			<LinkContainer to="/search" style={linkStyle}>
				<Nav.Link>Add Log</Nav.Link>
			</LinkContainer>
			<NavDropdown bg="dark" title={user ?  `${user.email}`:''} menuVariant="dark">
				<LinkContainer to="/change-password" style={linkStyle}>
					<NavDropdown.Item >
						<Nav.Link style={linkStyle}>Change Password</Nav.Link>
					</NavDropdown.Item>
				</LinkContainer>
				<LinkContainer to="sign-out" style={linkStyle}>
					<NavDropdown.Item>
						<Nav.Link style={linkStyle}>Sign Out</Nav.Link>
					</NavDropdown.Item>
				</LinkContainer>
			</NavDropdown>
		</>
	)
	
	
	const alwaysOptions = <></>
	return (
		<Navbar bg="dark" variant="dark" expand="md" style={{fontFamily:'Antonio'}}>
			<Container>
				<Navbar.Brand>
					<Link to="/user" style={linkStyle}>
						Movie Logger
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						

						{alwaysOptions}
						{user ? authenticatedOptions : unauthenticatedOptions}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
