import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home.jsx";
import Layout from "./Layout.jsx";
import ListPeople, { People } from "./people"; //se hace referencia a la carpeta
import ListPlanets, { Planet } from "./planets";
import ListVehicles, { Vehicle } from "./vehicles";
import ListSpecies, { Specie } from "./species";
import ListStarships, { Starship } from "./starships";

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
						<Route path="planets/:id" element={<Planet />} />
						<Route path="vehicles" element={<ListVehicles />} />
						<Route path="vehicles/:id" element={<Vehicle />} />
						<Route path="species" element={<ListSpecies />} />
						<Route path="species/:id" element={<Specie />} />
						<Route path="starships" element={<ListStarships />} />
						<Route path="starships/:id" element={<Starship />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};
//{/*ingreso los parametros para que los pueda usar en el archivo people.jsx*/}
export default Index;
