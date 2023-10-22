import { createContext } from "react";

import menFashion from '../asset/Products/cloth/men/men-1.jpeg'
import womenFashion from '../asset/Products/cloth/women/women-1.jpeg'
import kidsFashion from '../asset/Products/cloth/kids/kids-2.jpeg'
import ConstructionItem from '../asset/Products/construction/Buildingmaterials.png'
import FurnitureItem from '../asset/Products/furnitures/Furniture_1.png'
import ElectronicsItem from '../asset/Products/electronics/electronics.PNG'


export const FeatureCategoryContext = createContext([
    {
        name: "Men's ",
        image: menFashion,
        url: '/categories/men',
        id: 1
    },
    {
        name: "Electronics",
        image: ElectronicsItem,
        url: '/categories/electronics',
        id: 2
    },
    {
        name: "Furnitures",
        image: FurnitureItem,
        url: '/categories/furniture',
        id: 3
    },
    {
        name: "Construction",
        image: ConstructionItem,
        url: '/categories/construction',
        id: 4
    },
    {
        name: "Kids ",
        image: kidsFashion,
        url: '/categories/kids',
        id: 5
    },

 

])