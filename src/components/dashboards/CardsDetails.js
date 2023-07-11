/* eslint-disable */
import React, { useRef } from "react";
// import ReactDOM from 'react-dom';
import "./../../App.css";
import PropTypes from "prop-types";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Header from "./Header";
import Footer from "./Footer";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import india from "../common/images/india.png";
import AdjustIcon from '@mui/icons-material/Adjust';
class CardDetails extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            item: ""
        };
    }
    componentDidMount() {
    }

    render() {
        var item = this.props.location.state;
        return (

            <div>
                <Header />
                <div className="bodyElement row ml-0 mr-0 mt-3 mb-4">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 text-left pl-3 cardDetailsImgHi">
                        <img src={item.img} className="cardDetailsImg" alt="image2" />                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 text-left pl-3">
                        <div className="mt-3 mb-2"><h4 className=""> {item.name}</h4></div>
                        <div className="mt-2 mb-2"><Rating name="read-only" style={{ fontSize: "1.2 rem !important" }} value={item.rating} readOnly /> </div>
                        {/* <div className="mt-2 mb-2"><span style={{ fontSize: "1rem" }} > {item.desc}</span></div> */}
                        {/* <hr className="mt-2 mb-2" /> */}
                        <div className="mt-3 mb-2"><h4>{item.sale && <span className="mr-1 " style={{ color: "red" }}> Rs.{item.salePrice} </span>}
                            <span style={{ color: "red" }} className="mt-2"><span className={item.sale ? "line-through" : ""}>Rs.{item.price}</span> </span>
                            {item.sale && <span><span className="ml-1" style={{ color: "grey", fontSize: ".7rem" }}>Save Rs.{item.price - item.salePrice} </span></span>}
                        </h4> </div>
                        <div><h6>(inclusive of all taxes)</h6></div>
                        <div className="mt-5 pt-5 mb-2"> <LocalShippingIcon className=" " style={{ fontSize: "2.5rem", color: "#4d3a3c " }} /> <h6 className="d-inline-block position-relative ml-2 detailText" style={{ top: "2px" }}>Free shipping on orders above ₹ 999</h6></div>
                        <div className="mt-4 mb-2"><img src={india} style={{ width: "4%" }} /> <h6 className="d-inline-block position-relative ml-2 detailText" style={{ top: "2px" }}>Made in India</h6></div>
                        <div className="mt-4 mb-2"><AdjustIcon className=" " style={{ fontSize: "2rem", color: "green", marginLeft:"-3px !important" }} /><h6 className="d-inline-block position-relative ml-2 detailText" style={{ top: "3px" }}>In Stock</h6></div>

                    </div>
                </div>
                <hr className="ml-3 mr-4" />
                <div className="row ml-0 mr-0 mt-0 mb-3">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-left pl-3" >
                        <div className="mb-3" style={{color:"red"}}>Description</div>
                        <div>Every 90s kid is obsessed with nostalgia and will always have a soft corner for memories of Shaktiman, gully cricket, cartoon network, and cotton candy.
                            <br />
                            Gift that person this time machine and take him/her back to childhood. This handcrafted box includes:
                            <br />
                            A worn-out comic book for the nostalgic feels, mango bytes, catapult, bucket boat, Magic Pop, lucky 7 roulette, brick game, orange candies, fatafat, a pack of phantom cigarettes, copter fan, and a nostalgic mug.</div>
                        {/* <Footer /> */}
                    </div>
                    <hr className="ml-3 mr-4" />
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-left pl-3" >
                        <div className="mb-3" style={{color:"red"}}>Specfications</div>
                        <div>Every 90s kid is obsessed with nostalgia and will always have a soft corner for memories of Shaktiman, gully cricket, cartoon network, and cotton candy.
                            <br />
                            Gift that person this time machine and take him/her back to childhood. This handcrafted box includes:
                            <br />
                            A worn-out comic book for the nostalgic feels, mango bytes, catapult, bucket boat, Magic Pop, lucky 7 roulette, brick game, orange candies, fatafat, a pack of phantom cigarettes, copter fan, and a nostalgic mug.</div>
                        {/* <Footer /> */}
                    </div>
                   
                </div>
                <hr className="ml-3 mr-4" />
            </div>

        );
    }

}
CardDetails.propTypes = {
    // history: PropTypes.any
};
export default CardDetails;