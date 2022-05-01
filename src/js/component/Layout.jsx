import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Layout = () => {
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand href="#home">Star wars App</Navbar.Brand>
					</LinkContainer>
					<Nav className="me-auto">
						<LinkContainer to="/personas">
							<Nav.Link href="#">Personas</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/planets">
							<Nav.Link href="#">Planets</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/vehicles">
							<Nav.Link href="#">Vehicles</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/species">
							<Nav.Link href="#">Species</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/starships">
							<Nav.Link href="#">Starships</Nav.Link>
						</LinkContainer>
					</Nav>
				</Container>
			</Navbar>
			<Outlet />
		</div>
	);
};
export default Layout;
