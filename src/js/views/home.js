import React from "react";
import { getFolk } from "../api";
import { getPlanet } from "../api";
import { FolksCard } from "../component/folkscard";
import { FavoritesContext } from "../favorites";
import "../../styles/home.css";
import { PlanetsCard } from "../component/planetscard";

export const Home = () => {
  const [folk, setFolk] = React.useState([]);
  const [planet, setPlanet] = React.useState([]);
  const { favorites, setFavorites } = React.useContext(FavoritesContext);

  React.useEffect(() => {
    const fn = async () => {
      const apiFolk = await getFolk();
      setFolk(apiFolk);
    };
    fn();
  }, []);

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
            <FolksCard character ={item} uid = {index +1} key ={index}/>
          ))}
        </div>
      </div>
      {/* Planets card group */}
      <div className="p-3">
        <h3 className="ms-3">We Are The StarWars Planets</h3>
        <div className="d-flex flex-row flex-nowrap overflow-auto">
          {planet.map((item, index) => (
            <PlanetsCard planet ={item} uid = {index +1} key ={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};
