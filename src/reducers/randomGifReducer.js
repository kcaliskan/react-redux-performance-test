const randomGifReducer = (state = [], action) => {
  switch (action.type) {
    case "RANDOM_GIF":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default randomGifReducer;
