import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function SearchBox(){
    const [input, setInput] = useState("")
    const handleChange = e =>{
        setInput(e.target.value)
    }
    return(
        <div className="searchbox px-[2vw] py-[1vh] border-[2px] border-solid border-first flex justify-between rounded-lg items-center  ">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" value={input} placeholder="Search our products"  className="border-none outline-none w-[93%] font-semibold text-sm sm:text-base lg:text-lg sm:w-[94%] lg:w-96% "/>
        </div>
    )
}