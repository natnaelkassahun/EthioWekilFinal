import { useLocation } from 'react-router-dom';
import ItemCarousel from './Carousel/ItemCarousel';
import Description from './Description/Description';
import Detail from './Detail/Detail';
import './Item.css';
import Related from './Related/Related';
import React from 'react'


const Item = (props) => {
    const location = useLocation();
    const propsdata = location.state;
    return ( 
        <div className="item__container">
            <div className="detail__and__carousel__container">
                <ItemCarousel item={propsdata}/>
                <Detail item={propsdata}/>
            </div>
            <div className="item__description__container">
                <Description item={propsdata}/>
            </div>
            <div className="related__items__container">
                <Related category={propsdata.category}/>
            </div>
        </div>
     );
}
 
export default Item;