/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Header from "./components/dashboards/Header";
import Footer from "./components/dashboards/Footer";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
// import "./sass.scss";
import Loader from "./components/loader/Loader";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  };
  }


  render() {
    let loaderMsg = [];
    loaderMsg.push(<div key={"loader"}></div>);
    return (
      // <MyProvider>
      <div className="myClass" style={{ height: "100%", fontFamily: "cursive" }}>
        <Loader />
      
        <Routes  {...this.props}/>
        <Footer />
        <ToastContainer />
      </div>
      );
  }
}

export default App;
