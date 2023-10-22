import './Description.css';
import React from 'react'

const Description = (props) => {
    const data = props.item;
    return ( 
        <div className="product__description__product">
            <div className="description__header__container">
                <div className="description__header__line"></div>
                <div className="description__header">Details</div>
            </div>
            <div className="description__detail__container">
                <div className="description__detail">
                <p>{data.details}</p>
                </div>
            </div>
            <div className="description__specifics__container">
                <div className="description__specifics">
                <div className="description__header__line"></div>
                <div className="description__highlights__header">Highlights</div>
                    <ul>
                        {data.highlights}
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Description;