import './Landing.css'

import { Link } from "react-router-dom"
import { Button } from "@mui/material";
import React from 'react'
import land_en from "../../asset/brand/logo2.png"
import land_top from "../../asset/brand/Ethiowekilshort.png"
import land_am from '../../asset/brand/logo_am.png';
import { Text, LanguageContext } from '../../languages/Language';
import { useContext } from 'react';
import furniture from "../../asset/brand/furniture.jpg"
import tv from "../../asset/brand/tv.jpg"
import const2 from "../../asset/brand/const.jpg"
import { useSpring, animated } from '@react-spring/web'
import { v4 as uuidv4 } from "uuid";
import Card from "./Slide/Card";
import Carousel from "./Slide/Carousal";



const Landing = () => {
    const languageContext = useContext(LanguageContext);
    let cards_mb = [
      {
        key: uuidv4(),
        content: (
          <Card imagen={const2} title= "Construction" />
        )
      }
    ]
    let cards = [
      {
        key: uuidv4(),
        content: (
          <Card imagen={const2} title= "Construction" />
        )
      },
      {
        key: uuidv4(),
        content: (
          <Card imagen={furniture} title= "Furniture" />
        )
      },
      {
        key: uuidv4(),
        content: (
          <Card imagen={const2} title= "Construction"/>
        )
      },
      {
        key: uuidv4(),
        content: (
          <Card imagen={furniture}  title= "Furniture" />
        )
      },
      {
        key: uuidv4(),
        content: (
          <Card imagen= {tv}  title= "Electronics" />
        )
      }
    ];
    const [props, set] = useSpring(() => ({
      from: { transform: `scale(0.98)` },
      to: [{ transform: `scale(1)` } ,{ transform: `scale(0.98)` }],
      config: { duration: 500},
      loop: true
    }));

    return (
     
        <div className="overlap-2">
        <div className="overlap-3">
          <div className="section-content">
          <div className="Carousel_mobile">
          <Carousel
              cards={cards}
              height="750px"
              width="100%"
              margin="0 40px"
              offset={200}
              showArrows={false}
          /></div>
          <div className="Carousel_pc">
          <Carousel
              cards={cards}
              height="750px"
              width="40%"
              margin="0 40px"
              offset={100}
              showArrows={false}
          />
            </div>
            <div className="checkout-the-best">
              {languageContext.dictionary["landing_header_2"]}
              <br />
              {languageContext.dictionary["landing_header_3"]}
            </div>
            
            <text  className="top_text">{languageContext.dictionary["landing_header_1"]}</text>
          </div>
          <img className="logo" alt="Logo" src={land_en}/>
          <animated.div style={props} >
          <img className="logo_top" alt="Logo" src={land_top}/>
          </animated.div>
         </div>
        <Link to="/categories/electronics">
          
        </Link>
        <Link to="/categories/construction">
            
        </Link>
        <Link to="/categories/furniture">
   
        </Link>
      </div>
     );
}
 
export default Landing;
