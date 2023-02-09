import "./sign-up-form.styles.scss"
import { useState } from "react";
import Button from "../../button/button.component";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";
import FormInput from "../../form-input/form-input.component";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event) => {
        event.preventDefault(); 
        if(password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }
            try {
                const {user} = await createAuthUserWithEmailAndPassword(email, password);
                await createUserDocumentFromAuth(user, { displayName});
                alert("La cuenta se creo correctamente")
                resetFormFields();
            } catch (error) {
                if(error.code === "auth/email-already-in-use"){
                    alert("No se puede crear el usuario, el correo electronico ya esta en uso")
                }
                console.log("Error al crear el usuario", error);
            };
        }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return(
        <div className="sign-up-container">
            <h2>No tienes una cuenta?</h2>
            <span>Registrate con tu correo y contraseña</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Nombre" 
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName}/>

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

                <FormInput 
                    label="Confirmar Contraseña" 
                    type="password" 
                    required
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword}/>
                <Button type="submit">Registrarse</Button>
            </form>
        </div>
    )
}

export default SignUpForm;