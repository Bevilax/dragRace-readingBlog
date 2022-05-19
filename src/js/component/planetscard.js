import React from "react";
import { FavoritesContext } from "../favorites";

export const PlanetsCard = (props) => {
  const { favorites, setFavorites } = React.useContext(FavoritesContext);
  const isFavorited = favorites.find((item) => item.name == props.planet.name);

  return (
    <div className="border border-success col-3 m-3">
      <div className="card-body">
        <h5 className="card-title">{props.planet.name}</h5>
        </div>
      <div className="card-footer">
        <a href={"/planets/" + props.uid} className="btn btn-primary">
          Learn More!
        </a>
        {isFavorited ? (
          <button
            onClick={() => {
              setFavorites(
                favorites.filter((object) => object.name !== props.planet.name)
              );
            }}
            className="btn btn-success"
          >
            ♡
          </button>
        ) : (
          <button
            onClick={() => {
              setFavorites([
                ...favorites,
                { name: props.planet.name, id: props.uid },
              ]);
            }}
            className="btn btn-warning"
          >
            ♡
          </button>
        )}
      </div>
    </div>
  );
};