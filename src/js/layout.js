import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Folks } from "./views/folks";
import { Planets } from "./views/planets";
import { Single } from "./views/single";
import { FavoritesContext } from "./favorites";
import injectContext from "./store/appContext";

import { NavBar } from "./component/navbar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const [favorites, setFavorites] = React.useState ([])

	return (
		<div>
		<FavoritesContext.Provider value ={{ favorites, setFavorites}}>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavBar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/folks/:id">
							<Folks/>
						</Route>
						<Route exact path="/planets/:id">
							<Planets/>
						</Route>
						<Route exact path="/vehicle/:id">
							<h1>Vehicle</h1>
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</FavoritesContext.Provider>
	</div>
	);
};

export default injectContext(Layout);
