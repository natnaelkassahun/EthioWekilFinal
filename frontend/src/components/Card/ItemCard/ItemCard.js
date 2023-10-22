import './ItemCard.css';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartItemsContext } from "../../../Context/CartItemsContext";
import  ItemDetail from "../../Item/Item.js";
import { IconButton,Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { WishItemsContext } from '../../../Context/WishItemsContext';
import React from 'react'

const ItemCard = (props) => {
    const [isHovered, setIsHovered] = useState(false)
    const  cartItemsContext  = useContext(CartItemsContext)
    const wishItemsContext = useContext(WishItemsContext)

    const handleAddToWishList = () => {
        wishItemsContext.addItem(props.item)
    }

    
     const handleAddToCart = () => {
        cartItemsContext.addItem(props.item, 1)
    }

  

    return ( 
        <div className="product__card__card">
            <div className="product__card">
                <div className="product__image" 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                > 
                {isHovered? <img src={`http://localhost:5001/public/${props.item.category}/${props.item.image[1].filename}`} alt="item" className="product__img"/>: <img src= {`http://localhost:5001/public/${props.item.category}/${props.item.image[0].filename}`} alt="item" className="product__img"/> }
                </div>
                
                <div className="product__card__detail">
                    <div className="product__name">
                        <Link to={`/item/${props.item.category}/${props.item.id}`}>
                           {props.item.name}
                        </Link>
                    </div>
                    <div className="product__description">
                       
                    </div>
                    <div className="product__price">
                        
                    </div>
                    <div className="product__card__action">
                        <IconButton onClick={handleAddToWishList} sx={ {borderRadius: '20px', width: '40px', height: '40px', /* borderWidth: '3px', borderStyle: 'solid', borderColor: '#FFE26E' */ }  }>
                            <FavoriteBorderIcon sx={{width: '22px', height: '22px', color: 'black'}}/>
                        </IconButton>
                        <Link to={"/item/"+props.item.category+ "/"+ props.item.id} state={props.item}>
                            <Button variant='outlined' sx={[{'&:hover': { backgroundColor: 'none', borderColor: '#517751',borderRadius: '10px' , color: ' #006636'}, borderRadius: '0px' , borderColor: '#fff', backgroundColor: "#fff;" , color: "#006636", fontWeight: '800', marginTop: '8px',width:'40px',padding: '0px'}]}>BUY</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ItemCard;