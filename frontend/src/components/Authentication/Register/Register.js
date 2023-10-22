import RegisterCard from "../../Card/RegisterCard/RegisterCard";
import './Register.css'
import React from 'react'

const Register = () => {
    return ( 
        <div className="register__auth__container">
            <div className="register__auth">
                <RegisterCard />
            </div>
        </div>
     );
}
 
export default Register;