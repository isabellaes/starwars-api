import { useEffect, useState } from "react";
import "./person.scss";
import Homeworld from "../homeworld/Homeworld";
import Specie from "../species/Specie";
import Starship from "../starship/Starship";
import Vechile from "../vechile/Vechile";
import Film from "../film/Film";

type SWPerson = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: any[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

interface Props {
  url: string;
}

const Person = (props: Props) => {
  const [person, setPerson] = useState({} as SWPerson);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const url = props.url;
        const response = await fetch(url);
        const result = await response.json();
        if (!ignore) {
          setPerson(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    let ignore = false;
    fetchPerson();
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <div className="person">
      <h2>Person</h2>
      {person
        ? `Name: ${person.name}, Haircolor: ${person.hair_color}, Eyecolor: ${person.eye_color}`
        : "Loading..."}
      <h2>Homeworld</h2>
      <Homeworld url={person.homeworld}></Homeworld>
      <h2>Species</h2>
      {person.species.map((specie) => (
        <Specie url={specie} key={specie} />
      ))}

      <h2>Starships</h2>
      {person.starships.map((starship) => (
        <Starship key={starship} url={starship} />
      ))}

      <h2>Vechiles</h2>
      {person.vehicles.map((vechile) => (
        <Vechile key={vechile} url={vechile} />
      ))}

      <h2>Films</h2>
      {person.films.map((film) => (
        <Film url={film} key={film} />
      ))}
    </div>
  );
};

export default Person;
