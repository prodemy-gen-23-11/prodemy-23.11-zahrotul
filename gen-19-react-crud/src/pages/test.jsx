import { useEffect, useState } from "react"
import axios from "axios"

export default function Test(){
    const [data, setData] = useState()
    const getProduct = async() =>{
        try{
            const res = await axios.get("https://dummyjson.com/products")
            setData(res.data.products)
            console.log(res.data.products)
        }
        catch(err){
            console.log(err)
        }
    }
    
    useEffect(()=>{
        getProduct()
    },[])

    return(
        <div className="grid grid-cols-3 gap-3">
            {data?.map((product)=>{
                return(
                    <div key={product.id} className="flex flex-col p-4 rounded-lg justify-center align-middle items-center border border-solid border-black text-center">
                        <img className="w-24" src={product.thumbnail} alt="" />
                        <div>{product.title}</div>
                    </div>
                )
            })}
        </div>
    )
}