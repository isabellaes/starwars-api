import { useEffect, useState } from "react";
import Person from "../person/Person";

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

const Container = () => {
  const [persons, setPersons] = useState([] as SWPerson[]);
  useEffect(() => {
    const fetchPersons = async () => {
      const url = "https://swapi.py4e.com/api/people/";

      try {
        const response = await fetch(url);
        const result = await response.json();

        if (!ignore) {
          setPersons(result.results);
        }
      } catch (error) {}
    };
    let ignore = false;
    fetchPersons();
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <div className="container">
      {persons?.map((person) => (
        <Person key={person.name} url={person.url} />
      ))}
    </div>
  );
};

export default Container;
