import React from "react";
import {
	Container,
	Row,
	Col,
	ListGroup,
	Card,
	ListGroupItem,
} from "react-bootstrap";
import List from "./List.jsx";

//create your first component
const Home = () => {
	return (
		<Container fluid>
			<Row>
				<Col>
					<h1 className="text-center mt-5">STAR WARS Data</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<List />
				</Col>
			</Row>
			<div className="card-footer text-muted">
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
			</div>
		</Container>
	);
};

export default Home;
