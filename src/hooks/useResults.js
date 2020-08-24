import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  // API yelp state
  const [results, setResults] = useState([]);

  //error message for request
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Miami",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  // Call searchApi when component
  // is first rendered. BAD CODE!!!
  // searchApi('pasta');

  // useEffect Function to rerende only one time
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
