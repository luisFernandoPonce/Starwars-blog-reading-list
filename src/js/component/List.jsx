import React, { useState, useEffect } from "react";
import {
	ListGroup,
	ListGroupItem,
	Pagination,
	PaginationItems,
} from "react-bootstrap";
import { people } from "../apiStarWars.js";

const List = () => {
	var [data, setData] = useState([
		{
			uid: "1",
			name: "Luke Skywalker",
			url: "https://www.swapi.tech/api/people/1",
		},
		{
			uid: "2",
			name: "C-3PO",
			url: "https://www.swapi.tech/api/people/2",
		},
		{
			uid: "3",
			name: "R2-D2",
			url: "https://www.swapi.tech/api/people/3",
		},
		{
			uid: "4",
			name: "Darth Vader",
			url: "https://www.swapi.tech/api/people/4",
		},
		{
			uid: "5",
			name: "Leia Organa",
			url: "https://www.swapi.tech/api/people/5",
		},
	]);

	var [page, setPage] = useState(1);
	var [pageNext, setPageNext] = useState(2);
	var [pagePrevious, setPagePrevious] = useState(0);
	var [pages, setPages] = useState(10);
	var [paginationItems, setPaginationItems] = useState([]);

	people.getById(1).then((data) => console.log(data));
	people.getQuery().then((data) => console.log(data));

	useEffect(() => {
		actualizarPaginacion();
	}, [page, pages]);

	function getItems() {
		return data.map((person) => {
			return (
				<ListGroup.Item key={person.uid}>{person.name}</ListGroup.Item>
			);
		});
	}

	function siguientePagina() {
		if (page < pages);
		setPage(page + 1);
	}
	function irAPagina(id) {
		setPage(id);
	}
	function previaPagina() {
		if (0 > page);
		setPage(page - 1);
	}
	function actualizarPaginacion() {
		var tmp = [];
		for (var i = 1; i <= pages; i++) {
			tmp.push(
				<Pagination.Item
					onClick={() => irAPagina(i)}
					key={i}
					active={i === page}>
					{i}
				</Pagination.Item>
			);
		}
		setPaginationItems(tmp);
	}

	return (
		<div>
			<ListGroup horizontal style={{ overflowX: "scroll" }}>
				{" "}
				{getItems()}
			</ListGroup>
			<Pagination>
				<Pagination.Prev onClick={previaPagina} />
				{paginationItems}
				<Pagination.Next onClick={siguientePagina} />
			</Pagination>
		</div>
	);
};
export default List;
