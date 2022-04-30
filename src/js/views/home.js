import React from "react";
import { getFolk } from "../api";

import "../../styles/home.css";

export const Home = () => {
	const [folk, setFolk] = React.useState([]);

	React.useEffect(() => {
		const fn = async () => {
			const apiFolk = await getFolk();
			setFolk(apiFolk);
		};
		fn();
	}, []);

	return (
		<div>
			<ul>
				{folk.map((item, index) => (
					<li key={index}>
						<a href= {"/folks/" + item.uid}>{item.name}</a></li>
				))}
			</ul>
		</div>
	);

	};
