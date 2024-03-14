import { useEffect, useState } from "react";
type SWHomeworld = {
  climate: string;
  diameter: string;
  gravity: string;
  name: string;
  population: string;
  rotation_period: string;
  surface_water: string;
  terrain: string;
};

interface Props {
  url: string;
}
const Homeworld = (props: Props) => {
  const [homeworld, setHomeworld] = useState({} as SWHomeworld);

  useEffect(() => {
    const fetchHomeworld = async () => {
      try {
        const url = props.url;
        const response = await fetch(url);
        const result = await response.json();
        if (!ignore) {
          setHomeworld(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    let ignore = false;
    fetchHomeworld();
    return () => {
      ignore = true;
    };
  }, []);
  return <>{homeworld ? <p>{homeworld.name}</p> : <>Loading...</>}</>;
};

export default Homeworld;
