import React, { useState, useEffect } from "react";
import {
	ListGroup,
	ListGroupItem,
	Pagination,
	PaginationItems,
	PaginationNext,
	PaginationPrev,
	Button,
} from "react-bootstrap";
import { people } from "../apiStarWars.js";

const List = () => {
	var [data, setData] = useState([]);
	var [page, setPage] = useState(1);
	var [pages, setPages] = useState(1); //me indica el numero de paginas del footer list
	var [paginationItems, setPaginationItems] = useState([]);

	function irAPagina(id) {
		people.getQuery(id).then((data) => {
			console.log("cargando pagina...", id);
			// Se actualizan los valores del estado
			setData(data.results);
			setPage(id);
			// Esta actualizacion tiene un hook
			setPages(data.total_pages);
			console.log("Cargada pagina ", id);
		});
	}

	function siguientePagina() {
		if (page < pages);
		irAPagina(page + 1);
	}

	function previaPagina() {
		if (1 < page) {
			irAPagina(page - 1);
		}
	}

	//people.getById(1).then((data) => console.log(data));
	//people.getQuery().then((data) => console.log(data));

	useEffect(() => {
		console.log("Componente montado");
		irAPagina(1);
		return () => {
			console.log("Componente desmontado");
		};
	}, []);

	useEffect(() => {
		console.log("Actualizando paginas");
		actualizarPaginacion();
		return () => {
			console.log("Finalizada la actualizacion de paginas");
		};
	}, [page, pages]);

	function getItems() {
		if (!data) return;
		return data.map((person) => {
			return (
				<ListGroup.Item key={person.uid}>{person.name}</ListGroup.Item>
			);
		});
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
