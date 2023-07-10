/* eslint-disable */
import React, { useRef } from "react";
// import ReactDOM from 'react-dom';
import "./../../App.css";
// import "react-dropdown/style.css";
import PropTypes from "prop-types";
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import google from "../common/images/google.png";
import instagram from "../common/images/instagram.png";
class Footer extends React.Component {
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
                <div className="row ml-2 mr-2 mb-3">
                    <div className="col-lg-4 col-md-4 col-sm-12 text-center mt-2">
                        <div><h6 style={{ fontWeight: "bold" }}>Contact</h6></div>
                        <div>
                            <a className="mr-4" href="tel:7397843096">
                                <CallIcon className="mr-1 iconCss2" title="Call Now" />
                                +91 7397843096</a>
                        </div>
                        <div><a className="mr-4" href="mailto:Cherrygifttree@gmail.com">
                            <MailOutlineIcon className="mr-1 iconCss2 " title="Call Now" />
                            Cherrygifttree@gmail.com</a></div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 text-center mt-2">
                        <div><h6 style={{ fontWeight: "bold" }}>Follow Us</h6></div>
                        <div className="">
                            <a className="mr-3" href="https://www.facebook.com" target="_blank">
                                <FacebookIcon className="mr-1 " style={{ fontSize: "3rem", color: "#4267B2" }} title="facebook" /></a>
                            <a className="mr-3" href="https://m.youtube.com/@cherrygifttree5418" target="_blank">
                                <YouTubeIcon className="mr-1 " style={{ fontSize: "3rem", color: "red" }} title="Youtube" /></a>
                            <a className="mr-4" href="https://instagram.com/cherrygifttree?igshid=YmMyMTA2M2Y=" target="_blank">
                            <img src={instagram} style={{width: "8%"}} alt="Instagram" title="Instagram" /></a>
                            <a className="mr-4" href="https://g.co/kgs/w9USxW" target="_blank">
                            <img src={google} style={{width: "7%"}} alt="Google" title="Google" /> </a>

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 text-center mt-2">
                        <div><h6 style={{ fontWeight: "bold" }}>Business Hours</h6></div>
                        <div className="">
                            <span style={{ fontWeight: "500" }}>Everyday</span> <br />
                            10:00 AM - 6:00 PM <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
Footer.propTypes = {
    history: PropTypes.any
};
export default Footer;