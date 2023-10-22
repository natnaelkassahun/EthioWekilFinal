import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactLoading from 'react-loading';
import Category from '../components/Category/Category';
import React from 'react'

const CategoryView = () => {
    const param = useParams()
    const [ menItems, setMenItems ] = useState()
    const [ womenItems, setWomenItems ] = useState()
    const [ kidsItems, setKidsItems ] = useState()
    const [ constructionItems, setConstructionItems ] = useState()
    const [ furnitureItems, setFurnitureItems ] = useState()
    const [ electronicsItems, setElectronicsItems ] = useState()
    const [ loading , setLoading ] = useState(true) 

    useEffect(() => {
        axios.get("http://localhost:5001/items")
            .then(res => {
                setMenItems(res.data.filter((item) => item.category === "men"))
                setKidsItems(res.data.filter((item) => item.category === "kids" ))
                setFurnitureItems(res.data.filter((item) => item.category === "furniture")) 
                setConstructionItems(res.data.filter((item) => item.category === "construction"))
                setElectronicsItems(res.data.filter((item) => item.category === "electronic"))
                setLoading(false)
            })
            .catch(err => console.log(err))

        window.scrollTo(0, 0)
    }, [param.id])
    
    return ( 
        <div className='d-flex min-vh-100 w-100 justify-content-center align-items-center m-auto'>
            {loading && <ReactLoading type="balls" color='#006636' height={100} width={100} className='m-auto'/>}
            { menItems && param.id === 'men' && <Category name="Men's" items={menItems} category="men"/>}
            { kidsItems && param.id === 'kids' && <Category name="Kids" items={kidsItems} category="kids"/>}
            { furnitureItems && param.id === 'furniture' && <Category name="Furniture Products" items={furnitureItems} category="furniture"/>}
            { constructionItems && param.id === 'construction' && <Category name="Construction Materials" items={constructionItems} category="construction"/>}
            { electronicsItems && param.id === 'electronics' && <Category name="Electronics Products" items={electronicsItems} category="electronics"/>}
        </div>
     );
}
 
export default CategoryView;