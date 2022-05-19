import React from "react";
import { useParams } from "react-router-dom";
import { getPlanetById } from "../api";

export const Planets = () => {
    const [planet, setPlanet] = React.useState(null);
    const params = useParams ()

    React.useEffect(() => {
		// const fn = async () => {
		// 	const apiPlanet = await getPlanetById(params.id);
		// 	setPlanet(apiPlanet);
		// };
		// fn();
        getPlanetById (params.id).then(info => setPlanet(info))
	}, []);

    return (
<div className="card mb-3">
    <div className="row g-0">
        <div className="col-md-4">
        <img src="..." className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">I am {planet !==null ? planet.name : ""}</h5>
        </div>
        </div>
    </div>
</div>
    )
}