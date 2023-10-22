import { Link } from 'react-router-dom';
import './CategoryCard.css'
import { Button } from '@mui/material';
import React from 'react'
import { Text, LanguageContext } from '../../../languages/Language';
import { useContext } from 'react';

const CategoryCard = (props) => { 
    const languageContext = useContext(LanguageContext);
    return ( 
        <div className="category__card__card">
                <div className="category__image"> 
                   <img src= {props.data.image} alt="" className="product__img"/> 
                </div>
                <div className="category__card__detail">
                    <div className="product__name">
                      
                           {props.data.name}
                       
                    </div>
                    <div className="product__description">
                       
                    </div>
                    <div className="category__card__action">
                        <Link to={props.data.url}>
                            <Button variant='outlined' sx={[{'&:hover': { backgroundColor: 'none', borderColor: '#517751', color: '#517751'}, borderRadius: '20px' , borderColor: '#a3c7a3', backgroundColor: "#a3c7a3" , color: "#000", fontWeight: '700', width : '90px' ,padding: '0px', margin: '0px'}]}>{languageContext.dictionary["shop"]}</Button>
                        </Link>
                    </div>
            </div>
        </div>
     );
}
 
export default CategoryCard;