import React from "react";
import { getFolk } from "../api";
import { getPlanet } from "../api";
import { FolksCard } from "../component/folkscard";
import { FavoritesContext } from "../favorites";
import "../../styles/home.css";

export const Home = () => {
  const [folk, setFolk] = React.useState([]);
  const { favorites, setFavorites } = React.useContext(FavoritesContext);

  React.useEffect(() => {
    const fn = async () => {
      const apiFolk = await getFolk();
      setFolk(apiFolk);
    };
    fn();
  }, []);

  const [planet, setPlanet] = React.useState([]);

  React.useEffect(() => {
    const fn = async () => {
      const apiPlanet = await getPlanet();
      setPlanet(apiPlanet);
    };
    fn();
  }, []);

  return (
    <div>
      {/* Character card group */}
      <div className="p-3">
        <h3 className="ms-3">We Are The StarWars Characters</h3>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          {folk.map((item, index) => (
            <FolksCard nme ={item.name} uid = {item.uid} key ={index}/>
          ))}
        </div>
      </div>
      {/* Planets card group */}
      <div className="p-3">
        <h3 className="ms-3">We Are The StarWars Planets</h3>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          {planet.map((item, index) => (
            <div key={index} className="border border-success col-3 m-3">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
              </div>
              <div className="card-footer">
                <a href={"/planets/" + item.uid} className="btn btn-primary">
                  Learn More!
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
