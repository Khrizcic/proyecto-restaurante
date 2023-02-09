import "./authentication.style.scss"
import SignUpForm from "../../components/sign-up/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in/sign-in-form/sign-in-form.component";

const Authentication = () => {


    return(
        <div className="authentication-container">
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm>
        </div>
    )
}

export default Authentication;
