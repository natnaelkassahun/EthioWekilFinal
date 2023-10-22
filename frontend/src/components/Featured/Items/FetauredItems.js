import { Link } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ItemCard from '../../Card/ItemCard/ItemCard';
import ReactLoading from 'react-loading';
import './FeaturedItems.css'
import React from 'react'
import { Text, LanguageContext } from '../../../languages/Language';
import { useContext } from 'react';

const FeaturedItems = (props) => {
    const languageContext = useContext(LanguageContext);
    return (
         
        <div className="featured__products__container">
            <div className="featured__products">
                <div className="featured__products__header">
                    <h3 className='featured__items__header__big'>{languageContext.dictionary["FeaturedItems"]}</h3><Link to="/shop" className='featured__header__small'>{languageContext.dictionary["ShowAll"]}<ArrowRightAltIcon /></Link>
                </div>
                <div className="featured__products__header__line"></div>
                <div className='d-flex min-vh-100 w-100 justify-content-center align-items-center m-auto'>
                    {!props.items && <ReactLoading type="balls" color='#006636' height={100} width={100} className='m-auto'/>}
                { props.items &&
                    <div className="featured__products__card__container">
                        <ItemCard item={props.items[0]} category="featured"/>
                        <ItemCard item={props.items[1]} category="featured"/>
                        <ItemCard item={props.items[2]} category="featured"/>
                        <ItemCard item={props.items[3]} category="featured"/>
                        <ItemCard item={props.items[4]} category="featured"/>
                        <ItemCard item={props.items[5]} category="featured"/>
                        <ItemCard item={props.items[6]} category="featured"/>
                        <ItemCard item={props.items[7]} category="featured"/>
                        <ItemCard item={props.items[8]} category="featured"/>
                        <ItemCard item={props.items[9]} category="featured"/>
                        <ItemCard item={props.items[10]} category="featured"/>
                        <ItemCard item={props.items[11]} category="featured"/>
                    </div>
                }
                </div>
            </div>
        </div>        
     );
}
 
export default FeaturedItems;