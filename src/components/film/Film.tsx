import { useEffect, useState } from "react";
type Film = {
  title: string;
};

interface Props {
  url: string;
}

const Film = (props: Props) => {
  const [film, setFilm] = useState({} as Film);

  useEffect(() => {
    const fetchHomeworld = async () => {
      try {
        const url = props.url;
        const response = await fetch(url);
        const result = await response.json();
        if (!ignore) {
          setFilm(result);
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
  return <>{film ? <p>{film.title}</p> : <>Loading...</>}</>;
};

export default Film;
