const selectedGif = (state = [], action) => {
  switch (action.type) {
    case "SELECTED_GIF":
      console.log(action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
};

export default selectedGif;
