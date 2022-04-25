import React from "react";
import {
	Container,
	Row,
	Col,
	ListGroup,
	Card,
	ListGroupItem,
} from "react-bootstrap";

//create your first component
const Home = () => {
	return (
		<Container fluid className="justify-content-md-center">
			<Row>
				<Col>
					<Card style={{ width: "20rem" }}>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">
								Card Subtitle
							</Card.Subtitle>
							<ListGroup>
								<ListGroup.Item>Cras justo odio</ListGroup.Item>
								<ListGroup.Item>
									Dapibus ac facilisis in
								</ListGroup.Item>
								<ListGroup.Item>Morbi leo risus</ListGroup.Item>
								<ListGroup.Item>
									Porta ac consectetur ac
								</ListGroup.Item>
								<ListGroup.Item>
									Vestibulum at eros
								</ListGroup.Item>
							</ListGroup>
							<Card.Link href="#">Card Link</Card.Link>
							<Card.Link href="#">Another Link</Card.Link>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: "20rem" }}>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">
								Card Subtitle
							</Card.Subtitle>
							<ListGroup>
								<ListGroup.Item>Cras justo odio</ListGroup.Item>
								<ListGroup.Item>
									Dapibus ac facilisis in
								</ListGroup.Item>
								<ListGroup.Item>Morbi leo risus</ListGroup.Item>
								<ListGroup.Item>
									Porta ac consectetur ac
								</ListGroup.Item>
								<ListGroup.Item>
									Vestibulum at eros
								</ListGroup.Item>
							</ListGroup>
							<Card.Link href="#">Card Link</Card.Link>
							<Card.Link href="#">Another Link</Card.Link>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Img
							variant="top"
							src="holder.js/100px180?text=Image cap"
						/>
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroupItem>Cras justo odio</ListGroupItem>
							<ListGroupItem>
								Dapibus ac facilisis in
							</ListGroupItem>
							<ListGroupItem>Vestibulum at eros</ListGroupItem>
						</ListGroup>
						<Card.Body>
							<Card.Link href="#">Card Link</Card.Link>
							<Card.Link href="#">Another Link</Card.Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
