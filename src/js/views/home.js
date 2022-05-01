import React from "react";
import { getFolk } from "../api";
// import { getFolkById } from "../api";
import "../../styles/home.css";

export const Home = () => {
	const [folk, setFolk] = React.useState([]);

	// const [folking, setFolking] = React.useState(null);
    // const params = useParams ()

	React.useEffect(() => {
		const fn = async () => {
			const apiFolk = await getFolk();
			setFolk(apiFolk);
		};
		fn();
	}, []);

	// React.useEffect(() => {
	// 	const gn = async () => {
	// 		const apiFolk = await getFolkById(params.id);
	// 		setFolking(apiFolk);
	// 	};
	// 	gn();
	// }, []);

	return (
		<div>
			<div className="card-group">
			{folk.map((item, index) => (
				<div key={index} className="col-2">
				<div className="card-body">
					<h5 className="card-title">{item.name}</h5>
					{/* <p>Gender:{folking !==null ? folking.gender : ""}</p>
					<p>Eye-Color:{folking !==null ? folking.eye_color : ""}</p>
					<p>Hair-Color:{folking !==null ? folking.hair_color : ""}</p> */}
				</div>
				<div className="card-footer">
						<a href={"/folks/" + item.uid} className="btn btn-primary">Learn More!</a>
				</div>
			</div>
			))}
			</div>
		</div>
	);

	};
