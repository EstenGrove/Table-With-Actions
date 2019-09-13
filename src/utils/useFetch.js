import { useState } from "react";

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function makeRequest(url, token, method = "GET", params = {}) {
    url += "?" + new URLSearchParams(params);

    setIsLoading(true);

    try {
      const res = await fetch(url, {
        method: method,
        headers: new Headers({
          Authorization:
            "Basic " + btoa("x-test-user:M9hf^%2HHf3^$(sn@Kd23p#hsq"),
          SecurityToken: token
        })
      });
      const json = await res.json();
      console.log(json);

      setIsLoading(false);
      setData(json);
      setError(null);

      return json;
    } catch (err) {
      setIsLoading(false);
      setError(err);

      return console.log("An error occured: " + err);
    }
  }

  return {
    isLoading,
    setIsLoading,
    error,
    setError,
    data,
    setData,
    makeRequest
  };
};
