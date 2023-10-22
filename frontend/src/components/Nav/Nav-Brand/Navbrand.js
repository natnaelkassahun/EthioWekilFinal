import './NavBrand.css'
import { Link } from 'react-router-dom';
import React from 'react'
import { Text, LanguageContext } from '../../../languages/Language';
import img from '../../../asset/brand/Ethiowekillgo.png'


const NavBrand = () => {
    return ( 
        <div href="#home" className='navbrand__container'>
           <h1 className='navbrand'>
               <span className="text-wrapper"><Text tid="exploreHeader" /></span>
               <span className="span"><Text tid="exploreHeader2" /></span>
            </h1>
            
        </div>
     );
}
 
export default NavBrand;