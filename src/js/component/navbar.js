import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
	return (
		<div className="NavigationBar">
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
				<div className="NavTitle">
					<Link to="/">
					<span className="navbar-brand text-white">React Boilerplate</span>
					</Link>
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="dropdown">
					<button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Dropdown button
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li><a className="dropdown-item" href="#">Favorites</a></li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
