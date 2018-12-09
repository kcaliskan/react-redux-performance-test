import React from "react";
import { connect } from "react-redux";

const GifDetail = props => {
  return <div>{props.gifSlug}</div>;
};

const mapStateToProps = state => {
  return { gifSlug: state.selectedGif[0] };
  //console.log(state);
};
export default connect(mapStateToProps)(GifDetail);
