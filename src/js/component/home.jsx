import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

//create your first component
const Home = () => {
	return (
		<Container fluid>
			<Row>
				<Col>
					<h1 className="text-center mt-5">Star Wars Data</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<h1>Pagina principal</h1>
				</Col>
			</Row>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</Container>
	);
};

export default Home;
