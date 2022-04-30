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
			<div className="card-group">
			{folk.map((item, index) => (
				<div key={index} className="col-2">
				<div className="card-body">
					<h5 className="card-title">{item.name}</h5>
				</div>
				<div className="card-footer">
						<a href={"/folks/" + item.uid} className="btn btn-primary">{item.name}</a>
				</div>
			</div>
			))}
			</div>
		</div>
	);

	};
