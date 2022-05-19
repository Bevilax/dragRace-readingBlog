import React from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../favorites";

export const NavBar = () => {
	const { favorites, setFavorites } = React.useContext(FavoritesContext);
  console.log(favorites);
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
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {`Favorites (${favorites.length})`}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
		  {favorites.map((item, index) => {
          return (
            <li className="dropdown-item" key={index} href="#">
              {item.name}
            </li>
          );
        })}
          </ul>
        </div>
			</nav>
		</div>
	);
};
