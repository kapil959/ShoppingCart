/* eslint-disable */
import React, { useRef } from "react";
// import ReactDOM from 'react-dom';
import "./../../App.css";
// import "react-dropdown/style.css";
import PropTypes from "prop-types";
import { Outlet, Link } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Input from '@mui/material/Input';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "", url: window.location.href, openMenu: false, anchorEl: false,
            menuItems: ["Resin Clock", "Resin Frame", "Varmala Preservation", "Scrapbooks",
                "Coasters", "Printed Mug", " Printed Bottle", "Hampers", "Mantra Frame", "Customised Lamp", "Corporate Gifts"]
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    componentDidMount() {
    }

    handleClick() {
        this.setState({ openMenu: true, anchorEl: true });
    }
    handleClose() {
        this.setState({ openMenu: false, anchorEl: false });
    }
    render() {
        return (
            <div>
                <div className="HeaderElement">
                    <div className="row pt-2 pb-2 ">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-5 text-left rainbow-letters">
                            {/* <FiMenu className="menu mr-1" onClick={() => this.closeMenu(true, "")} /> */}
                            {/* <a onClick={() => { this.navigate(false, "photoframes")  }}>Company Name</a>  */}
                            <Link to="/home" className="ml-3 text1 font-weight-bold" style={{ fontSize: "1.2rem" }}><span><span>Cherry</span><span>Gift</span><span>Tree</span></span></Link>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-7 text-right" >
                            <a className="mr-1" href="https://wa.me/7397843096" target="_blank" >
                                <WhatsAppIcon className="mr-1 iconCss" title="Whatsapp Now" />
                            </a>
                            <a className="mr-3" href="tel:7206834463">
                                {/* <CallIcon className="mr-1 iconCss1" title="Call Now" /> */}
                                +91 7397843096</a>
                        </div>
                    </div>
                    <div className="row pt-1 pb-1 font-weight-bold">
                        <div className="col-lg-2 col-md-2 col-sm-4 col-6 text-center ">
                            <div className="curPtr" onClick={() => this.handleClick()}>
                                <MenuIcon className="mr-1 iconCss1 fs18 " title="cart" /><span style={{ position: "relative", "bottom": "3px", color: "darkslategray" }}>Categories</span></div>
                            <Menu id="basic-menu" open={this.state.openMenu} onClose={() => this.handleClose()}>
                                <div className="row" style={{ width: "25rem" }}>
                                    {this.state.menuItems.map((item, index) =>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-left">
                                            <MenuItem key={index} onClick={() => this.handleClose()} style={{ fontSize: ".9rem" }}>{item}</MenuItem>
                                        </div>
                                    )}
                                </div>
                            </Menu>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-6 col-6 text-center hideDiv">
                            <Link to="/photoframes"><span className={this.state.url.indexOf("photo") > -1 ? "highlightText" : ""} >Photo frames</span></Link>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-4 col-6 text-center hideDiv">
                            <Link to="/calendars"><span className={this.state.url.indexOf("calendars") > -1 ? "highlightText" : ""}>Calendars</span></Link>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-5 col-6 text-center hideDiv">
                            <Link to="/mobilecovers"><span className={this.state.url.indexOf("mobile") > -1 ? "highlightText" : ""}>Mobile Covers</span></Link>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-5 col-6 text-center hideDiv">
                            <Link to="/mobilecovers"><span className={this.state.url.indexOf("other") > -1 ? "highlightText" : ""}>Others</span></Link>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-6 col-6 text-right ">
                            {/* <Input placeholder="Search" style={{width: "50%"}} className="mr-1" value={this.state.search} onChange={(e) => this.onInputValue(e, "search")}  /> */}
                            <ShoppingCartIcon className="mr-3 iconCss1 fs18" title="cart" />
                            <AccountBoxIcon className="mr-3 iconCss1 fs18" title="Profile" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
Header.propTypes = {
    history: PropTypes.any
};
export default Header; ""