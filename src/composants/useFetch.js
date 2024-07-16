import { useState, useEffect } from "react";
const FetchUrl = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abordCont = new AbortController;
      fetch(url, { signal: abordCont.signal })
        .then((reponse) => {
          console.log(reponse.ok);
          if (!reponse.ok) {
            throw Error('Desole une erreur est survenue ...');
          }
          return reponse.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log('Fetch a ete stopper');
          } else {
            setError(error.message);
            setIsLoading(false);
          }
        })
    return () => abordCont.abort();
  }, [url])
  return {isLoading, data, error };
}

export default FetchUrl;