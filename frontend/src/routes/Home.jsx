import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Landing from "../components/Landing/Landing";


import Features from "../components/Design/Features.jsx";
import ContactUs from "../components/Design/ContactUs";
import Service from "../components/Design/Service";

import FeaturedItems from "../components/Featured/Items/FetauredItems";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import { TabTitle } from "../utils/General";
import React from 'react'
import ChatBox from "../components/ChatBOX/ChatBox";


const Home = () => {
    const [ featuredItems, setFeaturedItems ] = useState()
    TabTitle("Home - EthioWekil");

    useEffect(() => {
        axios.get("http://localhost:5001/items")
            .then(res => setFeaturedItems(res.data))
            .catch(err => console.log(err))


        window.scrollTo(0, 0)
    }, [])

    return ( 
        <Fragment>
            <Landing />
            <ChatBox/>
            <Service/>
            
            <Features/>
            <FeaturedItems items={featuredItems}/>
            <ContactUs/>
        </Fragment>
    );
}
 // <FeaturedCategories/>
export default Home;