import React, { Fragment, useState } from "react"

import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import { LinkContainer } from "react-router-bootstrap"

import { Link } from "react-router-dom"
const linkStyle = {
	color: "white",
	textDecoration: "none",
}
const authenticatedOptions = (
	<>
			<LinkContainer to="/change-password" style={linkStyle}>
		<Nav.Link>
				Change Password
		</Nav.Link>
			</LinkContainer>
			<LinkContainer to="/sign-out" style={linkStyle}>
		<Nav.Link>
				Sign Out
		</Nav.Link>
			</LinkContainer>
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

const alwaysOptions = (
	<>
		<LinkContainer to="/" style={linkStyle}>
			<Nav.Link>My Page</Nav.Link>
		</LinkContainer>
	</>
)


const Header = ({ user }) => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand>
					<Link to="/" style={linkStyle}>
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
