import React, { createContext, useState } from 'react'

const SearchContext = createContext();


export const SearchProvider = ({children}) =>{
    const [query, setQuery] = useState('')
    const [result, setResult] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const search = async ()=>{
        const url = 'http://localhost:5000'

        try{
            setIsLoading(true)
        }catch(error){
            console.error("Search Term:", error);
        }
        
    }

    return (
        <>
        </>
    )
}