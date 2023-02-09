import { Outlet, Link } from "react-router-dom";
import { Fragment, useState } from "react";
import "./navigation.style.scss"
import SideMenu from "../side-menu/side-menu.component";

const Navigation = () => {

    return (
        <Fragment>
            <div className="navigation">
                <Link className="menu" to="/">
                    <img alt="menu-logo" className="nav-icon" src={require("../../assets/menu-burger-orange.png")}></img>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="#">
                        <img alt="theme" className="nav-icon" src={require("../../assets/sunDay.png")}></img>
                    </Link>
                    <Link className="nav-link" to="#">
                        <img alt="notifications" className="nav-icon" src={require("../../assets/bellDay.png")}></img>
                    </Link>
                    <Link className="nav-link" to="#">
                        UserName
                    </Link>
                </div>
            </div>
            <div className="side-menu">
                
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;