import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext, useState } from "react";
import "./navigation.style.scss"
import SideMenu from "../side-menu/side-menu.component";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async() => {
        await signOutUser();
        setCurrentUser(null);
    };

    const [ menu, setMenu ] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <Fragment>
            <div className="navigation">
                <div className="nav-menu">
                    <button onClick={toggleMenu} className="side-menu-button">
                        <img alt="menu-logo" className="nav-icon" src={require("../../assets/menu-burger-orange.png")}></img>
                    </button>
                    <div className={`side-menu ${menu ? 'isActive' : ''}`}>
                        <SideMenu></SideMenu>
                    </div>
                </div>
                <div className="nav-links-container">
                    <Link className="nav-link" to="#">
                        <img alt="theme" className="nav-icon" src={require("../../assets/sunDay.png")}></img>
                    </Link>
                    <Link className="nav-link" to="#">
                        <img alt="notifications" className="nav-icon" src={require("../../assets/bellDay.png")}></img>
                    </Link>
                    {
                    currentUser ? (
                        <span className="nav-menu-link" onClick={signOutHandler}>Cerrar Sesion</span>)
                        : (
                            <Link className="nav-menu-link" to="/">
                                Iniciar sesion
                            </Link>
                    )} 
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;