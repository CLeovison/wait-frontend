import { useContext } from "react"
import { SearchContext } from "./SearchContext"

export const useSearchContext = () =>{
    const context = useContext(SearchContext)
    if(!context){
        throw new Error("The useSearchContext must be used within SearchContextProvider")
    } 
    return context   
}