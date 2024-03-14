import { useEffect, useState } from "react";

interface Props {
  url: string;
}

type SWVechile = {
  name: string;
};

const Vechile = (props: Props) => {
  const [vechile, setVechile] = useState({} as SWVechile);
  useEffect(() => {
    const fetchVechile = async () => {
      try {
        const url = props.url;
        const response = await fetch(url);
        const result = await response.json();
        if (!ignore) {
          setVechile(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    let ignore = false;
    fetchVechile();
    return () => {
      ignore = true;
    };
  }, []);
  return <>{vechile ? <p>{vechile.name}</p> : <>Loading...</>}</>;
};

export default Vechile;
