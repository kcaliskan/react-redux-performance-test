import axios from "../apis/axios";

export const randomGifFetch = () => async dispacth => {
  const response = await axios.get("/v1/gifs/random");
  // console.log(response.data.data);
  dispacth({
    type: "RANDOM_GIF",
    payload: {
      imageUrl: response.data.data.images.original.url,
      gifInfo: response.data.data
    }
  });
};

export const selectedGifSlug = slug => {
  return { type: "SELECTED_GIF", payload: slug };
};
