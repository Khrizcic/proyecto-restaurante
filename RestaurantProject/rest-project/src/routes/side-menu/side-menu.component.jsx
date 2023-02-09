import "./side-menu.style.scss"
import { Link } from "react-router-dom";

const SideMenu = () => {
    
    return (
        <div className="side-menu-container">
            <Link className="side-menu-logo" to="#">
                <img alt="logo" className="logo-icon" src={require("../../assets/logocangrejo.png")}></img>
            </Link>
            <Link className="side-munu-link" to="#">
                <p>Usuarios</p>
            </Link>
            <div className="side-menu-options">
                <Link className="side-munu-link" to="#">
                    <p>Configuracion</p>
                </Link>
                <Link className="side-munu-link" to="#">
                    <p>Cerrar Sesion</p>
                </Link>
            </div>
        </div>
    )
}

export default SideMenu;