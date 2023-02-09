import "./side-menu.style.scss"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";

const SideMenu = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async() => {
        await signOutUser();
        setCurrentUser(null);
    };
    
    return (
        <div className="side-menu-container">
            <Link className="side-menu-logo" to="#">
                <img alt="logo" className="logo-icon" src={require("../../assets/logocangrejo.png")}></img>
            </Link>
            <Link className="side-menu-link" to="#">
                <p>Usuarios</p>
            </Link>
            <Link className="side-menu-link" to="#">
                <p>Configuraciones</p>
            </Link>
            {
                currentUser ? (
                    <span className="side-menu-link" onClick={signOutHandler}>Cerrar Sesion</span>)
                    : (
                        <Link className="side-menu-link" to="/">
                            Iniciar sesion
                        </Link>
            )}    
        </div>
    )
}

export default SideMenu;