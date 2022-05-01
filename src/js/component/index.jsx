import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home.jsx";
import Layout from "./Layout.jsx";
import ListPeople, { People } from "./people"; //se hace referencia a la carpeta
import ListPlanets, { Planets } from "./planets";

const Index = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="personas" element={<ListPeople />} />
						<Route path="personas/:id" element={<People />} />
						<Route path="planets" element={<ListPlanets />} />
						<Route path="planets/:id" element={<Planets />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};
//{/*ingreso los parametros para que los pueda usar en el archivo people.jsx*/}
export default Index;
