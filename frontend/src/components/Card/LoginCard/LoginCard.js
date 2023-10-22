import { Link } from 'react-router-dom';
import './LoginCard.css';
import React from 'react'
import { Text, LanguageContext } from '../../../languages/Language';
import { useContext} from 'react';
import { Toaster } from 'react-hot-toast';
import {useFormik} from 'formik';
import { userValidate } from './Helper/valideter';



const LoginCard = () => {
    const languageContext = useContext(LanguageContext);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: userValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values =>{
            console.log(values)
        }
    })

    return ( 
        <div className="login__card__container">
            <div className="login__card">
                <div className="login__header">
                    <h1>{languageContext.dictionary["Login"]}</h1>
                </div>
              
                <form className="login__inputs" onSubmit={formik.handleSubmit}>
                <Toaster position = 'top-center' reverseOrder = {false}></Toaster>
                    <div className="email__input__container input__container">
                        <label className="email__label input__label">{languageContext.dictionary["Email"]}</label>
                        <input {...formik.getFieldProps('email')} type="email" className="email__input login__input" placeholder='example@gmail.com' />
                    </div>
                    <div className="password__input__container input__container">
                        <label className="password__label input__label" >{languageContext.dictionary["Password"]}</label>
                        <input {...formik.getFieldProps('password')}  type="password" className="password__input login__input" placeholder='**********' />
                    </div>
                    <div className="login__button__container">
                        <button type='submit' className="login__button" >{languageContext.dictionary["login"]}</button>
                    </div>
                </form>
                <div className="login__other__actions">
                    <div className="login__forgot__password"><a href='http://www.google.com'>{languageContext.dictionary["ForgotPassword"]}</a></div>
                    <div >{languageContext.dictionary["DontHaveAccount"]} <button  className="login__new__account" ><Link to="/account/register">{languageContext.dictionary["CreateAccount"]}</Link> </button></div>
                </div>
            </div>
        </div>
     );
}
 
export default LoginCard;