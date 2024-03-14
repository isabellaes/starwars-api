import { useEffect, useState } from "react";
import "./person.scss";

type SWPerson = {
  name: string;
  hair_color: string;
  eye_color: string;
};

const Person = (props: SWPerson) => {
  const [person, setPerson] = useState({} as SWPerson);

  useEffect(() => {
    setPerson(props);
  }, []);
  return (
    <div className="person">
      {person
        ? `Name: ${person.name}, Haircolor: ${person.hair_color}, Eyecolor: ${person.eye_color}`
        : "Loading..."}
    </div>
  );
};

export default Person;
