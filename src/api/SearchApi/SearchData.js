export default async function SearchData(event,value){
    //Steps Need To Be Done

    //1. Get The Data From The Backend
    const url = `http://localhost:5000/api/products?products=${value}`
    
    //2. After Getting the Data From the Backend, do the handling of it
    try{
        const result = await fetch(url)
    }catch(error){

    }
    //3. Proceed on Handling the Error From The Data
}