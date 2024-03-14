import { useEffect, useState } from "react";
import Person from "../person/Person";

type SWPerson = {
  name: string;
  hair_color: string;
  eye_color: string;
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
        <Person
          key={person.name}
          name={person.name}
          hair_color={person.hair_color}
          eye_color={person.eye_color}
        />
      ))}
    </div>
  );
};

export default Container;
