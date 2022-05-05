import React from "react";
import { FavoritesContext } from "../favorites";

export const FolksCard = (props) => {
  const { favorites, setFavorites } = React.useContext(FavoritesContext);
  const isFavorited = favorites.includes(props.uid);
  return (
    <div className="border border-success col-3 m-3">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
      </div>
      <div className="card-footer">
        <a href={"/folks/" + props.uid} className="btn btn-primary">
          Learn More!
        </a>
        {isFavorited ? (
          <button
            onClick={() => {
              setFavorites(favorites.filter((uid) => uid !== props.uid));
            }}
            className="btn btn-success"
          >
            Unloved
          </button>
        ) : (
          <button
            onClick={() => {
              setFavorites([...favorites, props.uid]);
            }}
            className="btn btn-warning"
          >
            Loved
          </button>
        )}
      </div>
    </div>
  );
};
