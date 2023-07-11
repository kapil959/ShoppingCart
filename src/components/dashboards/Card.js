/* eslint-disable */
import React, { useRef } from "react";
import "./../../App.css";
import PropTypes from "prop-types";
import Header from "./Header";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                "calendars": [
                    { "name": "Calendars Item 1", "desc": "desc 1", "price": 500, "img": require("../common/images/1.jpg"), "sale": true, "salePrice": 300, "rating": 4 },
                    { "name": "Calendars Item 2", "desc": "desc 2", "price": 600, "img": require("../common/images/2.jpg"), "sale": false, "salePrice": 300, "rating": 3 },
                    { "name": "Calendars Item 3", "desc": "desc 3", "price": 700, "img": require("../common/images/3.jpg"), "sale": false, "salePrice": 300, "rating": 3 },
                    { "name": "Calendars Item 4", "desc": "desc 4", "price": 800, "img": require("../common/images/1.jpg"), "sale": true, "salePrice": 100, "rating": 1 },
                    { "name": "Calendars Item 5", "desc": "desc 5", "price": 200, "img": require("../common/images/2.jpg"), "sale": false, "salePrice": 300, "rating": 5 },
                ],
                "mobilecovers": [
                    { "name": "Mobile Item 1", "desc": "desc 1", "price": 500, "img": require("../common/images/3.jpg"), "sale": true, "salePrice": 300, "rating": 4 },
                    { "name": "Mobile Item 2", "desc": "desc 2", "price": 600, "img": require("../common/images/1.jpg"), "sale": false, "salePrice": 300, "rating": 3 },
                    { "name": "Mobile Item 3", "desc": "desc 3", "price": 700, "img": require("../common/images/2.jpg"), "sale": false, "salePrice": 300, "rating": 3 },
                    { "name": "Mobile Item 4", "desc": "desc 4", "price": 800, "img": require("../common/images/3.jpg"), "sale": true, "salePrice": 100, "rating": 1 },
                    { "name": "Mobile Item 5", "desc": "desc 5", "price": 200, "img": require("../common/images/1.jpg"), "sale": false, "salePrice": 300, "rating": 5 },
                ],
                "photoframes": [
                    { "name": "Photo Frames Item 1", "desc": "desc 1", "price": 500, "img": require("../common/images/2.jpg"), "sale": true, "salePrice": 300, "rating": 4 },
                    { "name": "Photo Frames Item 2", "desc": "desc 2", "price": 600, "img": require("../common/images/3.jpg"), "sale": false, "salePrice": 300, "rating": 3 },
                    { "name": "Photo Frames Item 3", "desc": "desc 3", "price": 700, "img": require("../common/images/1.jpg"), "sale": false, "salePrice": 300, "rating": 3 },
                    { "name": "Photo Frames Item 4", "desc": "desc 4", "price": 800, "img": require("../common/images/2.jpg"), "sale": true, "salePrice": 100, "rating": 1 },
                    { "name": "Photo Frames Item 5", "desc": "desc 5", "price": 200, "img": require("../common/images/3.jpg"), "sale": false, "salePrice": 300, "rating": 5 },
                ]
            }
        };
    }
    componentDidMount() {
    }

    cardClick(item) {
        console.log(item);
        this.props.history.push({ pathname: "/card-details", state: item });
    }

    render() {
        // console.log(this.props);
        var item1 = ""//this.props.data;
        if (this.props.location.pathname == "/calendars") {
            item1 = this.state.item.calendars;
        }else if (this.props.location.pathname == "/mobilecovers") {
            item1 = this.state.item.mobilecovers;
        }else if (this.props.location.pathname == "/photoframes") {
            item1 = this.state.item.photoframes;
        }

        return (
            <div>
                <Header />
                <div className="bodyElement mt-3">
                    <div className="row ml-1 mr-1">
                        {item1.map((item, index) =>

                            <div className="col-lg-3 col-md-4 col-sm-4 col-6 text-center mb-3" key={index}>
                                <Card sx={{}} className="curPtr" onClick={() => this.cardClick(item)}>
                                    <CardMedia sx={{ height: 170 }} image={item.img} />
                                    <CardContent className="text-left pb-1">
                                        <div><h6 className="mb-1"> {item.name}</h6></div>
                                        <div><Rating name="read-only" style={{ fontSize: "1.2 rem !important" }} value={item.rating} readOnly /> </div>
                                        <div><span style={{ fontSize: ".8rem" }} className="mt-2"> {item.desc}</span></div>
                                        <hr className="mt-2 mb-2" />
                                        <div><h6>{item.sale && <span className="mr-1 " style={{ color: "red" }}> Rs.{item.salePrice} </span>}
                                            <span style={{ color: "red" }} className="mt-2"><span className={item.sale ? "line-through" : ""}>Rs.{item.price}</span> </span>
                                            {item.sale && <span><span className="ml-1" style={{ color: "grey", fontSize: ".7rem" }}>Save Rs.{item.price - item.salePrice} </span><span className="saleText" >SALE</span></span>} </h6>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
Cards.propTypes = {
    history: PropTypes.any
};
export default Cards;