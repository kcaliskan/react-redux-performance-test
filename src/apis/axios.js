import axios from "axios";

export default axios.create({
  baseURL: "https://api.giphy.com",
  params: {
    api_key: "Jo1nh547YMvZObNrHUPnaGWr7EDYDoVG"
  }
});
