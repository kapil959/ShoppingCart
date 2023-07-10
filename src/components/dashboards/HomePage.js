/* eslint-disable */
import React, { useRef } from "react";
// import ReactDOM from 'react-dom';
import "./../../App.css";
// import "react-dropdown/style.css";
import Common from "../common/common";
import emailjs from '@emailjs/browser';
import PropTypes from "prop-types";
import ApiService from "../common/api";
import MODEL_DATA from "./modelData";
import TextField from "@mui/material/TextField";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FiMenu } from "react-icons/fi";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// import { IoIosCall, IoIosClose  } from "react-icons/Io";
// import { BiMap } from "react-icons/Bi";
// import { CgNotes } from "react-icons/Cg";
import img1 from "../common/images/1.jpg";
import img2 from "../common/images/2.jpg";
import img3 from "../common/images/3.jpg";
import map from "../common/images/map3.PNG";
import Rating from '@mui/material/Rating';
import Header from "./Header";
class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            name: "", phone: "", email: "", description: "", error: false,
            ratingData: MODEL_DATA.ratingData,
            dialogOpen: false, ratingDialogOpen: false, updateFlag: false, errorMsg: false, invalidDate: false
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
        // Common.showLoader();
        // ApiService.postAPI("getRatingInfo/", requestParam).then((res) => {
        //     this.setState({ ratingData: res.data });
        //     Common.hideLoader();
        // }).catch((error) => {
        //     Common.hideLoader();
        //     console.log(error);
        // });

    }

    onInputValue(e, id) {
        if (id == "name") {
            if (e.target.value.length < 20)
                this.setState({ name: e.target.value });
        } else if (id == "phone") {
            if (e.target.value.length < 20)
                this.setState({ [id]: e.target.value });
        } else if (id == "email") {
            this.setState({ error: false });
            if (e.target.value.length < 50)
                this.setState({ [id]: e.target.value });
        } else if (id == "description") {
            if (e.target.value.length < 500)
                this.setState({ [id]: e.target.value });
        }
    }

    closeMenu(flag, id) {
        this.setState({ menuOpen: flag })
        if (!flag && id != null && document.getElementById(id) != null)
            document.getElementById(id).scrollIntoView();
    }
    onSubmit(event) {
        event.preventDefault();
        var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.email.trim() == "" || !this.state.email.match(validRegex)) {
            this.setState({ error: true });
        } else {
            Common.showLoader();
            // art design email template = template_6j3jt9v
            // mansi email template = template_geh4upb
            emailjs.sendForm('service_mgee6dp', 'template_6j3jt9v', event.target, 'AQxDjbsKFZrH6okqR')
                .then((result) => {
                    Common.hideLoader();
                    this.setState({ dialogOpen: false, name: "", phone: "", email: "", description: "", error: false });
                    Common.notify().success(["Quote Submitted Successfully"]);
                }, (error) => {
                    console.log(error.text);
                    Common.hideLoader();
                    Common.notify().error(["Unable to prcess. Please try again."]);
                });
            // var requestURL = "";
            // ApiService.postAPI(requestURL, request).then((res) => {
            //     Common.hideLoader();
            //     console.log(res.data);
            //     this.setState({ dialogOpen: false });
            //     Common.notify().success(["Information Submitted Successfully"]);

            // }).catch((error) => {
            //     Common.hideLoader();
            //     this.setState({ dialogOpen: false });
            //     Common.notify().success(["Information Submitted Successfully"]);
            //     Common.notify().error(["Failed. Please check logs."]);
            // });
        }
    }

    openDialog(flag) {
        this.setState({ dialogOpen: flag });
    }
    openRatingDialog(flag) {
        this.setState({ ratingDialogOpen: flag });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="bodyElement mt-3">
                    <div className="text-center">
                        <span className="font_w_500 ml-3" style={{ fontSize: "1rem" }}>Art Work That Defines Your Lifestyle</span>
                        <div className="font_w_500 mainText pl-3 pr-3">We Provide all item with your custom demands. Get in touh with us for more details.</div>
                        <div className="mt-3 mb-1"><button type="button" className="btn btn-info pt-1 pb-1 pl-3 pr-3"
                            onClick={() => this.openDialog(true)}>Get Quote</button></div>
                    </div>
                    {/* <hr className="hrClass mt-5 mb-5" id="about"></hr> */}
                    <hr className="hrClass mt-3 mb-3" id="Gallery"></hr>
                    <div className="row ml-2 mr-2 mb-2">
                        <div className="col-12 text-center mb-0"><h6 style={{ fontWeight: '700' }}>GALLERY</h6></div>
                        <div className="col-lg-4 col-md-4 col-sm-12 text-center mt-3">
                            <img src={img1} className="imageCss" alt="image1" />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 text-center mt-3">
                            <img src={img2} className="imageCss" alt="image2" /></div>
                        <div className="col-lg-4 col-md-4 col-sm-12 text-center mt-3">
                            <img src={img3} className="imageCss" alt="image3" /></div>
                    </div>
                    <hr className="hrClass mt-4 mb-1" id="Testimonials"></hr>
                    <div className="row ml-2 mr-2 mb-3">
                        <div className="col-12 text-center mt-2 mb-2"><h6 style={{ fontWeight: '700' }}>TESTIMONIALS</h6></div>
                        {this.state.ratingData.slice(0, 3).map((item, index) =>
                            <div className="col-lg-4 col-md-6 col-sm-6 text-left pl-5 mt-3" key={index}>
                                <div><Rating name="read-only" value={item.rating} readOnly /> <span className="timeCss pl-3">{item.time}</span></div>
                                <div className="" style={{fontSize:".8rem"}}> {item.comment}</div>
                                <div className="nameCss"> - {item.name}</div>
                            </div>
                        )}
                        {this.state.ratingData.length > 3 && <div className="col-12 text-right mb-2"><a className="mr-4" onClick={() => this.openRatingDialog(true)}>Read More</a></div>}
                    </div>

                    <hr className="hrClass mt-1 mb-3" id="About"></hr>
                    <div className="row ml-3 mr-3 mb-3">
                        <div className="col-12 text-center mb-2"><h6 style={{ fontWeight: '700' }}>ABOUT US</h6></div>
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center pl-4 pr-4 pt-3 pb-3" style={{ backgroundColor: "#EAE6F0", borderRadius: "5px" }} >
                            {/* <div className="pb-2 text-center">Mansi, MSc in Clinical Psychology</div> */}
                            {/* {MODEL_DATA.intro} */}
                           
                            We are Pune based handmade and Customised gift company.<br />All gifts can be customised and designed to deliver happiness to your closed one
                        </div>

                    </div>

                </div>

                <Menu id="simple-menu" keepMounted open={this.state.menuOpen} onClose={() => { this.closeMenu(false, "") }} >
                    <MenuItem><a onClick={() => { this.closeMenu(false, "Testimonials") }}>Testimonials</a> </MenuItem>
                    <MenuItem><a onClick={() => { this.closeMenu(false, "Gallery") }}>Gallery</a></MenuItem>
                    <MenuItem><a onClick={() => { this.closeMenu(false, "About") }}>About Us</a></MenuItem>
                </Menu>
                <Dialog open={this.state.dialogOpen} onClose={() => { this.openDialog(false) }} style={{ fontFamily: "cardana" }}>
                    <DialogTitle className="" style={{ paddingBottom: "0px" }}>Get in touch with us!
                        <CloseRoundedIcon className="float-right curPtr" style={{ fontSize: "1.8rem" }} title="close" onClick={() => this.openDialog(false)} />
                    </DialogTitle>
                    <DialogContent className="scrollClass">
                        <form onSubmit={this.onSubmit}>
                            <div className="mt-1">
                                <TextField fullWidth type="text" label="Name" id="Name" name="name" variant="standard"
                                    value={this.state.name} onChange={(e) => this.onInputValue(e, "name")} />
                            </div>
                            <div className="mt-1">
                                <TextField type="tel" fullWidth id="phone" name="phone" variant="standard"
                                    value={this.state.phone} onChange={(e) => this.onInputValue(e, "phone")} label="Phone Number" />
                            </div>
                            <div className="mt-1">
                                <TextField type="email" fullWidth error={this.state.error} id="email" name="email" helperText="* Valid email address required."
                                    value={this.state.email} onChange={(e) => this.onInputValue(e, "email")} label="Email*" variant="standard" />
                            </div>
                            <div className="mt-1">
                                <TextField type="text" fullWidth id="standard-basic" name="description" variant="standard"
                                    value={this.state.description} onChange={(e) => this.onInputValue(e, "description")} label="What information you seek?"
                                />
                            </div>
                            <div className="mt-3 text-center">
                                <input type="submit" value="Send" className="mt-2 pb-1 pl-4 pr-4 submitBtn" />
                            </div>
                        </form>
                    </DialogContent>
                    {/* <DialogActions className="mt-2">
                        <button type="button" className="btn btn-info pt-1 pb-1 pl-3 pr-3"
                            onClick={() => this.onSubmit()} style={{ fontSize: "1rem", lineHeight: "1.4", }}>Submit</button>
                    </DialogActions> */}
                    <div className="infoText ml-5 mr-5">We ll get back to you as within 24 hours</div>
                </Dialog>
                <Dialog open={this.state.ratingDialogOpen} onClose={() => { this.openRatingDialog(false) }}>
                    <DialogTitle className="" style={{ paddingBottom: "0px" }}>Testimonials
                        <CloseRoundedIcon className="float-right curPtr" style={{ fontSize: "1.8rem" }} title="close" onClick={() => this.openRatingDialog(false)} />
                    </DialogTitle>
                    <div className="reviewCss">{this.state.ratingData.length} Reviews</div>
                    <DialogContent className="scrollClass" style={{ maxHeight: "25rem" }}>
                        <div >

                            {this.state.ratingData.map((item, index) =>
                                <div className="mt-3" style={{ borderBottom: "1px solid lightgrey" }} key={index}>
                                    <div><Rating name="read-only" value={item.rating} readOnly /> <span className="timeCss pl-3">{item.time}</span></div>
                                    <div className="" style={{fontSize:".9rem"}}> {item.comment}</div>
                                    <div className="nameCssDialog"> - {item.name}</div>
                                </div>
                            )}</div>

                    </DialogContent>
                </Dialog>

            </div >
        );
    }
}
Homepage.propTypes = {
    history: PropTypes.any
};
export default Homepage;
