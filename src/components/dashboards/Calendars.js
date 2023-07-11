/* eslint-disable */
import React, { useRef } from "react";
// import ReactDOM from 'react-dom';
import "./../../App.css";
import PropTypes from "prop-types";
import Cards from "./Card";
class Calendars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                "calendars": [
                    { "name": "Item 1", "desc": "desc 1", "price": 500, "img": require("../common/images/1.jpg"), "sale": true, "salePrice": 300, "rating": 4 },
                    { "name": "Item 2", "desc": "desc 2", "price": 600, "img": require("../common/images/2.jpg"), "sale": false, "salePrice": 300, "rating": 3 },
                    { "name": "Item 3", "desc": "desc 3", "price": 700, "img": require("../common/images/3.jpg"), "sale": false, "salePrice": 300, "rating": 3 },
                    { "name": "Item 4", "desc": "desc 4", "price": 800, "img": require("../common/images/1.jpg"), "sale": true, "salePrice": 100, "rating": 1 },
                    { "name": "Item 5", "desc": "desc 5", "price": 200, "img": require("../common/images/2.jpg"), "sale": false, "salePrice": 300, "rating": 5 },
                ]
            }
        };
    }
    componentDidMount() {
    }

    render() {
        var calendarItem = this.state.item.calendars;
        return (
            <div>
                <Cards data={calendarItem} {...this.props} />
            </div>
        );
    }

}
Calendars.propTypes = {
    // history: PropTypes.any
};
export default Calendars;