import { Link } from 'react-router-dom';
import './NavLinks.css'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import Cart from '../../Card/Cart/Cart';
import { useContext } from 'react';
import { WishItemsContext } from '../../../Context/WishItemsContext';
import { Text, LanguageContext } from '../../../languages/Language';


const NavLinks = () => {
    const wishItems = useContext(WishItemsContext)
    const languageContext = useContext(LanguageContext);
    
    return ( 
            <nav className="nav__bottom__container">
                <div className="bottom__container">
                    <ul className="nav">
                        <li className='nav-link'><Link to="/">{languageContext.dictionary["home"]}</Link></li> 
                        <li className='nav-link'><Link to="/shop">{languageContext.dictionary["shop"]}</Link> </li>
                        <li className='nav-link'><Link to="/categories">{languageContext.dictionary["categories"]}</Link> </li>
                        
                        <li className='nav-link'> 
                            <Link to="/wishlist">
                                   <Badge badgeContent={wishItems.items.length} color="error">
                                       <FavoriteBorderIcon color="black" sx={{ width: '35px'}}/>
                                   </Badge>
                             </Link>
                            
                        </li> 
                        <li className='nav-link'>
                              <Cart />
                        </li>
                
                 
                    </ul>
                </div>
            </nav>
     );
}
 
export default NavLinks;