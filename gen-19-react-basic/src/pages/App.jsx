import { useState } from "react";
import "./App.css";
import Product from "../component/product";
import { products } from "../../../gen-19-react-component/src/data/products";
import Navbar from "../layouts/navbar";
import Promote from "../component/promote";
import Footer from "../layouts/footer";
import SearchBox from "../component/search";

function App() {
    return (
            <div className="m-0">
                <div className="mini-info py-[2vh] text-center text-xs sm:text-sm">
                    ADS Kindly Visit Our Instagram or Carousell @derola.stuff
                </div>
                <Navbar />
                <div className="content z-0 my-[4vh] max-w-[80%] m-auto flex flex-col gap-[4vh] sm:gap-[3vh] sm:my-[3vh] ">
                    <SearchBox />
                    <Promote />
                    <div className="filter-wrapper w-100 overflow-auto ">
                        <div className="filter w-max flex align-middle items-center">
                            <div className="category w-fit min-w-[25px] lg:min-w-[60px] p-[6px] sm:p-[8px] lg:p-[10px] rounded-md font-medium text-xs sm:text-sm lg:text-base text-center bg-second cursor-pointer transition-all duration-300 ease-in-out hover:bg-first hover:transition-all hover:duration-300 hover:ease-in-out ">
                                All
                            </div>
                            <hr size="8" color="#C7B39F" className="w-[5vw] lg:w-[3vw] m-0 border-4" />
                            <div className="category w-fit min-w-[25px] lg:min-w-[60px] p-[6px] sm:p-[8px] lg:p-[10px] rounded-md font-medium text-xs sm:text-sm lg:text-base text-center bg-second cursor-pointer transition-all duration-300 ease-in-out hover:bg-first hover:transition-all hover:duration-300 hover:ease-in-out ">
                                Autumn
                            </div>
                            <hr size="8" color="#C7B39F" className="w-[5vw] lg:w-[3vw] m-0" />
                            <div className="category w-fit min-w-[25px] lg:min-w-[60px] p-[6px] sm:p-[8px] lg:p-[10px] rounded-md font-medium text-xs sm:text-sm lg:text-base text-center bg-second cursor-pointer transition-all duration-300 ease-in-out hover:bg-first hover:transition-all hover:duration-300 hover:ease-in-out ">
                                Winter
                            </div>
                            <hr size="8" color="#C7B39F" className="w-[5vw] lg:w-[3vw] m-0" />
                            <div className="category w-fit min-w-[25px] lg:min-w-[60px] p-[6px] sm:p-[8px] lg:p-[10px] rounded-md font-medium text-xs sm:text-sm lg:text-base text-center bg-second cursor-pointer transition-all duration-300 ease-in-out hover:bg-first hover:transition-all hover:duration-300 hover:ease-in-out ">
                                Daily
                            </div>
                            <hr size="8" color="#C7B39F" className="w-[5vw] lg:w-[3vw] m-0" />
                            <div className="category w-fit min-w-[25px] lg:min-w-[60px] p-[6px] sm:p-[8px] lg:p-[10px] rounded-md font-medium text-xs sm:text-sm lg:text-base text-center bg-second cursor-pointer transition-all duration-300 ease-in-out hover:bg-first hover:transition-all hover:duration-300 hover:ease-in-out ">
                                Best Seller
                            </div>
                        </div>
                    </div>
                    <div className="products max-w-100 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[10px] justify-between">
                    {products.map((products) => (
                        <Product
                        key={products.id}
                        name={products.name}
                        image={products.image}
                        category={products.category}
                        price={products.price}
                        />
                    ))}
                    </div>
                </div>
                <Footer />
            </div>
    );
}

export default App;
