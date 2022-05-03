import React from "react";
import { useParams } from "react-router-dom";
import { getFolkById } from "../api";

export const Folks = () => {
    const [folk, setFolk] = React.useState(null);
    const params = useParams ()

    React.useEffect(() => {
		const fn = async () => {
			const apiFolk = await getFolkById(params.id);
			setFolk(apiFolk);
		};
		fn();
	}, []);

    return (
<div className="card mb-3">
    <div className="row g-0">
        <div className="col-md-4">
        <img src="..." className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">I am {folk !==null ? folk.result.properties.name : ""}</h5>
            <p className="card-text">{folk !==null ? folk.result.description : ""}</p>
        </div>
        </div>
    </div>
</div>
    )
}

