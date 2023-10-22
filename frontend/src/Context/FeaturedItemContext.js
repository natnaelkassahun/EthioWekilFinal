import { createContext } from "react";

import menFashion from '../asset/Products/cloth/men/men-1.jpeg'
import womenFashion from '../asset/Products/cloth/women/women-1.jpeg'
import kidsFashion from '../asset/Products/cloth/kids/kids-2.jpeg'


export const FeaturedItemContext = createContext([
    
    {
        id: 0,
        name: "C",
        category: "featured",
        color: "red",
        type: "",
        description: "best",
        price: 250,
        size: 46,
        highlights: "best",
        detail: "nice",
        image: ""
    },

 
])

