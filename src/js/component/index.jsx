import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home.jsx";
import List from "./List.jsx";
import Layout from "./Layout.jsx";

const Index = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="personas" element={<List />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};
export default Index;
