// TODO: add necessary imports
import {useEffect, useState} from "react";
import {baseUrl} from "../utils/variables";

const apiUrl = 'http://media.mw.metropolia.fi/wbma/';
const useMedia = () => {
  // TODO: move mediaArray state here
  const url = 'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';
  const [mediaArray, setMediaArray] = useState([]);
  const loadMedia = async () => {
    try {
      const response = await fetch(baseUrl + 'media');
      const json = await response.json();
      const media = await Promise.all(
        json.map(async (file) => {
          const fileResponse = await fetch(baseUrl + 'media/' + file.file_id)
          return await fileResponse.json();
        }));
      setMediaArray(media);
    } catch (error) {
      console.error('List, loadMedia', error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  console.log('List, mediaArray', mediaArray);
  return {mediaArray};
};

export {useMedia};
