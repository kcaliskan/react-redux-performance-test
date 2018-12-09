import React from "react";
import { randomGifFetch, selectedGifSlug } from "../actions/index";
import { connect } from "react-redux";
import GifDetail from "./GifDetail";

class RandomGif extends React.Component {
  componentDidMount() {
    this.props.randomGifFetch();
  }
  render() {
    return (
      <div>
        <img src={this.props.randomGifUrl} />
        <button onClick={() => this.props.selectedGifSlug(this.props.gifSlug)}>
          Show me the slug
        </button>
        <GifDetail />
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.randomGif.length > 0) {
    // console.log(state);
    return {
      randomGifUrl: state.randomGif[0].imageUrl,
      gifSlug: state.randomGif[0].gifInfo.slug
    };
  } else {
    return state;
  }
};

export default connect(
  mapStateToProps,
  { randomGifFetch, selectedGifSlug }
)(RandomGif);
