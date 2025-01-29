import { useEffect, useState } from "react";
import { API } from "../../../../app/model/constants";
import axios from "axios";

let cache: string[] = [];

export const useFetchCategory = () => {
  const [ category, setCategory ] = useState(cache);

  useEffect(() => {
    if (category.length) return;

    const fetchData = async () => {
      try {
        const { data } = await axios(API.CATEGORIES_GET);
        setCategory(data);
        cache = data;
      } catch (e) {
        console.error("Categories fetch error: ", e);
      }
    };

    fetchData();
  // eslint-disable-next-line
  }, []);

  return category;
};
