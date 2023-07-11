/* eslint-disable */
import React, { useRef } from "react";
// import ReactDOM from 'react-dom';
import "./../../App.css";
import PropTypes from "prop-types";
import Header from "./Header";
class Photoframe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
            <Header />
            <div className="bodyElement mt-3">
                Photscards
            </div>
        </div>
   ); }

}
Photoframe.propTypes = {
    // history: PropTypes.any
};
export default Photoframe;