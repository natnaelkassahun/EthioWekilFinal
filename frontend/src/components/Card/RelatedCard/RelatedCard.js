import '../ItemCard/ItemCard.css'
import { Link } from "react-router-dom"
import { useContext, useState } from "react";
import React from 'react'
import { IconButton,Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { WishItemsContext } from '../../../Context/WishItemsContext';

const RelatedCard = (props) => {
    const [isHovered, setIsHovered] = useState(false)
    const wishItemsContext = useContext(WishItemsContext)

    const handleAddToWishList = () => {
        wishItemsContext.addItem(props.item)
    }


    return ( 
        <div className="product__card__card">
            <div className="product__card">
                <div className="product__image" 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                > 
                      {isHovered? <img src={`http://localhost:5001/public/${props.item.category}/${props.item.image[0].filename}`} alt="item" className="product__img"/>: <img src= {`http://localhost:5001/public/${props.item.category}/${props.item.image[1].filename}`} alt="item" className="product__img"/> }
                </div>
                <div className="product__card__detail">
                    <div className="product__name">
                        <Link to={`/item/${props.item.category}/${props.item._id}`}>
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
                            <Button variant='outlined' sx={[{'&:hover': { backgroundColor: 'none', borderColor: '#517751', color: '#517751'}, borderRadius: '10px' , borderColor: '#a3c7a3', backgroundColor: "#a3c7a3" , color: "#000", fontWeight: '200', margin: '5px',width:'40px',padding: '0px'}]}>BUY</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default RelatedCard;