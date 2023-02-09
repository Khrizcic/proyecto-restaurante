import "./authentication.style.scss"
import SignUpForm from "../../components/sign-up/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in/sign-in-form/sign-in-form.component";
import SideMenu from "../side-menu/side-menu.component";
import { useState } from "react";

const Authentication = () => {

    const [ menu, setMenu ] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu)
    }


    return(
        <div className="authentication-container">
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm>
        </div>
    )
}

export default Authentication;
