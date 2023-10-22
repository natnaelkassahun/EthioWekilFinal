import { useEffect, useState } from 'react';
import { TabTitle } from '../../utils/General';
import axios from "axios";
import ShopCategory from './Container/ShopCategory';
//import FeaturedCategories from "../Featured/Categories/FeaturedCategories";
import './Shop.css';
import ReactLoading from 'react-loading';
import React from 'react'


const Shop = () => {
    TabTitle("Shop - EthioWekil")
    const [ menItems, setMenItems ] = useState()
    const [ womenItems, setWomenItems ] = useState()
    const [ kidsItems, setKidsItems ] = useState()
    const [ constructionItems, setConstructionItems ] = useState()
    const [ furnitureItems, setFurnitureItems ] = useState()
    const [ electronicsItems, setElectronicItems ] = useState()
    const [ loading , setLoading ] = useState(true) 

    useEffect(() => {
        axios.get("http://localhost:5001/items")
            .then(res => {
                setMenItems(res.data.filter((item) => item.category === "men"))
                setKidsItems(res.data.filter((item) => item.category === "kids" ))
                setWomenItems(res.data.filter((item) => item.category === "women"))
                setConstructionItems(res.data.filter((item) => item.category === "construction"))
                setFurnitureItems(res.data.filter((item) => item.category === "furniture"))
                setElectronicItems(res.data.filter((item) => item.category === "electronics"))
                setLoading(false)
            })
            .catch(err => console.log(err))
        window.scrollTo(0, 0)
    
    }, [])

    return ( 
        <div className="shop__contianer">
            {loading && <ReactLoading type="balls" color='#006636'  height={100} width={100} className='container h-100 w-10 justify-self-center align-self-center m-auto'/>}
            {menItems && <ShopCategory name="Men" key="men" items={menItems}/>}
            {womenItems && <ShopCategory name="Women" key="women" items={womenItems}/>}
            {kidsItems && <ShopCategory name="Kids" key="kids" items={kidsItems}/>}
            {electronicsItems && <ShopCategory name="Electronics" key="electronics" items={electronicsItems}/>}
            {furnitureItems && <ShopCategory name="Furniture" key="furniture" items={furnitureItems}/>}
            {constructionItems && <ShopCategory name="Construction" key="construction" items={constructionItems}/>}
        </div>
     );
}
 
export default Shop;