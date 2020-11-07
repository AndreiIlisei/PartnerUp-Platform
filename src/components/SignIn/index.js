import React, {useState} from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css';
import spaceShip from './pic2.svg'

 const SignIn = () => {
     const [isSubmitted, setIsSubmitted] = useState(false);
     function submitForm() {
         setIsSubmitted(true);
     }
     
    return (
        <>
        <div className = "form-container"> 
            <span className = 'close-btn'>x</span>
            <div className = 'form-content-left'>
                <img src={spaceShip} alt ='spaceship' className='form-img'/>
            </div>
            {!isSubmitted ? (
                <FormSignup submitForm = {submitForm}/> ) : ( <FormSuccess />)}
        </div>
        </>
    );
};

export default SignIn;