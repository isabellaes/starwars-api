import { useEffect, useState } from "react";

interface Props {
  url: string;
}

type SWStarship = {
  name: string;
};

const Starship = (props: Props) => {
  const [starship, setStarship] = useState({} as SWStarship);

  useEffect(() => {
    const fetchStarship = async () => {
      try {
        const url = props.url;
        const response = await fetch(url);
        const result = await response.json();
        if (!ignore) {
          setStarship(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    let ignore = false;
    fetchStarship();
    return () => {
      ignore = true;
    };
  }, []);
  return <>{starship ? <p>{starship.name}</p> : <>Loading...</>}</>;
};

export default Starship;
