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
const authenticatedOptions = (
	<>
		<LinkContainer to="/user" style={linkStyle}>
			<Nav.Link>My Page</Nav.Link>
		</LinkContainer>
		<LinkContainer to="/search" style={linkStyle}>
			<Nav.Link>Add Log</Nav.Link>
		</LinkContainer>
		<NavDropdown bg="dark" title="User" menuVariant="dark">
			<NavDropdown.Item>
				<LinkContainer to="/change-password" style={linkStyle}>
					<Link>Change Password</Link>
				</LinkContainer>
			</NavDropdown.Item>
			<NavDropdown.Item>
				<LinkContainer to="sign-out" style={linkStyle}>
					<Link>Sign Out</Link>
				</LinkContainer>
			</NavDropdown.Item>
		</NavDropdown>
	</>
)

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

const alwaysOptions = <></>

const Header = ({ user }) => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand>
					<Link to="/user" style={linkStyle}>
						Movie Logger
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						{user && (
							<span className="navbar-text mr-2">
								Welcome, {user.email}
							</span>
						)}

						{alwaysOptions}
						{user ? authenticatedOptions : unauthenticatedOptions}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
