import React, { useState, useEffect, useContext } from "react";
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
        <h1>hi {folk !==null ? folk.name : ""}</h1>
    )
}

