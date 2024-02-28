import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../app.css";
import Product from "../../component/product";
// import { products } from "../data/products";
import axios from "axios";
import useSWR from "swr";
import Navbar from "../../layouts/navbar";
import Promote from "../../component/promote";
import Footer from "../../layouts/footer";
import SearchBox from "../../component/search";
import {HashLoader} from "react-spinners"
import { createSearchParams } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate()
    const [products, setProducts] = useState()
    const [filter, setFilter] = useState("all")

    const handleProduct=(id)=>{
        console.log(id)
        navigate(`/productdetail/${id}`, {
                state: {
                    id: id,
                },
            }
        )
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    }

    //   use react swr to fetch data
    const getProducts = (url) => axios.get(url).then((response) => response.data);

    const { data, isLoading, error, mutate } = useSWR(
            "http://localhost:3000/product",
            getProducts,
        // {
        //     onSuccess: (data) => data.sort((a, b) => a.name.localeCompare(b.name)),
        // }
    );

    if (error) return alert(JSON.stringify(erroroccured));

    const handleFilter = e =>{
        setFilter(e.target.value)
    }
    
    useEffect(() => {
        if (data) {
            if(filter!="all") {
                const temp = data.filter((product) => product.category == filter);
                setProducts(temp)
            }
            else setProducts(data)
        }
    }, [filter]);

    if (!data) {
        return <HashLoader />;
    }

    if (!products && data) {
        console.log(data)

        setProducts(data); 
    }

    return (
        <div className="m-0">
            {console.log(data)}
            <div className="mini-info py-[2vh] text-center text-xs sm:text-sm">
                ADS Kindly Visit Our Instagram or Carousell @derola.stuff
            </div>
            <Navbar />
            <div className="content z-0 my-[4vh] max-w-[80%] m-auto flex flex-col gap-[4vh] sm:gap-[3vh] sm:my-[3vh] ">
                <SearchBox />
                <Promote />
                <div className="filter-wrapper w-100 overflow-auto ">
                    <div className="filter w-max flex align-middle items-center">
                        <button value="all" onClick={handleFilter} className="category w-fit min-w-[25px] lg:min-w-[60px] p-[6px] sm:p-[8px] lg:p-[10px] rounded-md font-medium text-xs sm:text-sm lg:text-base text-center bg-second cursor-pointer transition-all duration-300 ease-in-out hover:bg-first hover:transition-all hover:duration-300 hover:ease-in-out ">
                            All
                        </button>
                        <hr size="8" color="#C7B39F" className="w-[5vw] lg:w-[3vw] m-0 border-4" />
                        <button value="autumn" onClick={handleFilter} className="category w-fit min-w-[25px] lg:min-w-[60px] p-[6px] sm:p-[8px] lg:p-[10px] rounded-md font-medium text-xs sm:text-sm lg:text-base text-center bg-second cursor-pointer transition-all duration-300 ease-in-out hover:bg-first hover:transition-all hover:duration-300 hover:ease-in-out ">
                            Autumn
                        </button>
                        <hr size="8" color="#C7B39F" className="w-[5vw] lg:w-[3vw] m-0 border-4" />
                        <button value="winter" onClick={handleFilter} className="category w-fit min-w-[25px] lg:min-w-[60px] p-[6px] sm:p-[8px] lg:p-[10px] rounded-md font-medium text-xs sm:text-sm lg:text-base text-center bg-second cursor-pointer transition-all duration-300 ease-in-out hover:bg-first hover:transition-all hover:duration-300 hover:ease-in-out ">
                            Winter
                        </button>
                        <hr size="8" color="#C7B39F" className="w-[5vw] lg:w-[3vw] m-0 border-4" />
                        <button value="daily" onClick={handleFilter} className="category w-fit min-w-[25px] lg:min-w-[60px] p-[6px] sm:p-[8px] lg:p-[10px] rounded-md font-medium text-xs sm:text-sm lg:text-base text-center bg-second cursor-pointer transition-all duration-300 ease-in-out hover:bg-first hover:transition-all hover:duration-300 hover:ease-in-out ">
                            Daily
                        </button>
                        <hr size="8" color="#C7B39F" className="w-[5vw] lg:w-[3vw] m-0 border-4" />
                        <button value="best seller" onClick={handleFilter} className="category w-fit min-w-[25px] lg:min-w-[60px] p-[6px] sm:p-[8px] lg:p-[10px] rounded-md font-medium text-xs sm:text-sm lg:text-base text-center bg-second cursor-pointer transition-all duration-300 ease-in-out hover:bg-first hover:transition-all hover:duration-300 hover:ease-in-out ">
                            Best Seller
                        </button>
                    </div>
                </div>
                {isLoading ? <HashLoader/> : 
                    <div className="products max-w-100 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[10px] justify-between">
                    {products?.map((products) => (
                        <div key={products.id} onClick={() => handleProduct(products.id)}>
                            <Product
                            key={products.id}
                            name={products.name}
                            image={products.dataPrev[0].dataPreview}
                            category={products.category}
                            price={products.price}
                            // onClick={() => console.log(products.id)}
                        />
                        </div>
                    ))}
                    </div>
                }
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;
