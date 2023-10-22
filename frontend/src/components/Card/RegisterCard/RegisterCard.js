import { Link } from 'react-router-dom';
import './RegisterCard.css';
import React from 'react'
import { Text, LanguageContext } from '../../../languages/Language';
import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import {useFormik} from 'formik';
import { userValidate } from './helper/validater';

const RegisterCard = () => {
    const languageContext = useContext(LanguageContext);
    const formik = useFormik({
        initialValues: {
            FirstName: '',
            LastName: '',
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
        <div className="register__card__container">
            <div className="register__card">
                <div className="register__header">
                    <h1>{languageContext.dictionary["CreateAccount"]}</h1>
                </div>
                <Toaster position = 'top-center' reverseOrder = {false}></Toaster>
                <form className="register__inputs" onSubmit={formik.handleSubmit}>
                    <div className="fname__input__container reg__input__container" >
                        <label className="fname__label input__label">{languageContext.dictionary["FirstName"]}</label>
                        <input {...formik.getFieldProps('FirstName')} type="text" className="fname__input register__input" />
                    </div>
                    <div className="lname__input__container reg__input__container">
                        <label className="lname__label input__label">{languageContext.dictionary["LastName"]}</label>
                        <input  {...formik.getFieldProps('LastName')} type="text" className="lname__input register__input"/>
                    </div>
                    <div className="email__input__container reg__input__container">
                        <label className="email__label input__label">{languageContext.dictionary["Email"]}</label>
                        <input {...formik.getFieldProps('email')} type="email" className="email__input register__input" placeholder='example@gmail.com' />
                    </div>
                    <div className="password__input__container reg__input__container">
                        <label className="password__label input__label">{languageContext.dictionary["Password"]}</label>
                        <input {...formik.getFieldProps('password')} type="password" className="password__input register__input" />
                    </div>
                    <div className="register__button__container">
                        <button type='submit' className="register__button" >{languageContext.dictionary["CreateAccount"]}</button>
                    </div>
                </form>
                <div className="register__other__actions">
                    <div className="register__login__account">{languageContext.dictionary["AlreadyHaveAccount"]}<Link to="/account/login">{languageContext.dictionary["login"]}</Link></div>
                </div>
            </div>
        </div>
     );
}
 
export default RegisterCard;