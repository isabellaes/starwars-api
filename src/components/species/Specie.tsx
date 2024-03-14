import { useEffect, useState } from "react";

interface Props {
  url: string;
}

type SWSpecie = {
  name: string;
};

const Specie = (props: Props) => {
  const [specie, setSpecie] = useState({} as SWSpecie);

  useEffect(() => {
    const fetchSpecie = async () => {
      try {
        const url = props.url;
        const response = await fetch(url);
        const result = await response.json();
        if (!ignore) {
          setSpecie(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    let ignore = false;
    fetchSpecie();
    return () => {
      ignore = true;
    };
  }, []);
  return <>{specie ? <p>{specie.name}</p> : <>Loading...</>}</>;
};

export default Specie;
