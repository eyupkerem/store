import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (apiUrl) =>{
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    const [data,setData] = useState([]);

    const fetchData = async()=>{
        try{
        const {data : productData} = await axios.get(apiUrl);
        setData(productData);
        setLoading(false)
        }
        catch(err){
            setLoading(false)
            setError(err.message)
        }
    }

    useEffect(()=>{fetchData()},[])
    return{error,loading,data}
}
export default useFetch;