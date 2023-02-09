import "./sign-in-form.styles.scss"
import { useState, useContext } from "react";
import Button from "../../button/button.component";

import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
    signInUserWithEmailAndPassword } 
from "../../../utils/firebase/firebase.utils";
import FormInput from "../../form-input/form-input.component";
import { UserContext } from "../../../contexts/user.context";

const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event) => {
        event.preventDefault(); 

            try {
                const {user} = await signInUserWithEmailAndPassword(email, password);

                setCurrentUser(user);

                resetFormFields();
            } catch (error) {
                switch(error.code){
                    case "auth/wrong-password":
                        alert("Contraseña incorrecta");
                        break
                    case "auth/user-not-found":
                        alert("No se encontro un usuario registrado con este email");
                        break
                    default:
                        console.log(error)
                }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    return(
        <div className="sign-up-container">
            <h2>Ya tienes una cuenta?</h2>
            <span>Inicia sesion con tu correo y contraseña</span>
            <form onSubmit={handleSubmit}>

                <FormInput 
                    label="Email" 
                    type ="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email}/>

                <FormInput 
                    label="Contraseña" 
                    type="password" 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password}/>
                <div className="buttons-container">
                    <Button type="submit">Iniciar sesion</Button>
                    <Button
                        type="button" 
                        onClick={signInWithGoogle} 
                        buttonType="google">
                        Continuar con Google
                    </Button>
                </div>
                
            </form>
        </div>
    )
}

export default SignInForm;