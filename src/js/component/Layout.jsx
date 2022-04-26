import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const Layout = () => {
	return (
		<div>
			<h1> MY API STARWARS</h1>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
};
export default Layout;
