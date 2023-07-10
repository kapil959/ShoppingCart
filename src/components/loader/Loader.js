
import React, { Component } from "react";
import Common from "../common/common";
import "./loader.css";

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loadmsg: "Loading..."
    };
    this.showLoader = this.showLoader.bind(this);
    this.hideLoader = this.hideLoader.bind(this);
    Common.setLoaderRef(this);
  }

  componentDidMount() { }

  showLoader() {
    this.setState({
      loading: true
    });
  }

  hideLoader() {
    this.setState({ loading: false });
  }

  render() {
    return this.state.loading ?
      <div className="myload">
        <div className="loader"></div>
        {/* <div className="loadingmsg">{this.state.loadmsg}</div> */}
      </div> : "";
  }
}

export default Loader;
