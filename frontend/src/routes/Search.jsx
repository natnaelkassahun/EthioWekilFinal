import { useParams } from "react-router-dom";
import Search from "../components/Search";
import React from 'react'

const SearchView = () => {
    const param = useParams()
    console.log(param.query)
    return ( 
        <Search />
     );
}
 
export default SearchView;