import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./app.css";
import Product from "../component/product";
// import { products } from "../data/products";
import axios from "axios";
import useSWR from "swr";
import Navbar from "../layouts/navbar";
import Promote from "../component/promote";
import Footer from "../layouts/footer";
import SearchBox from "../component/search";
import {HashLoader} from "react-spinners"
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createSearchParams } from "react-router-dom";
import DataTable from 'datatables.net-dt';

function ProductList() {
    const navigate = useNavigate()
    const [products, setProducts] = useState()
    const [filter, setFilter] = useState("all")

    new DataTable('#example');

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
                {isLoading ? <HashLoader/> : 
                    <div className="products">
                        <table id="example" className="table table-striped table-bordered pb-5 pt-2 !w-[100%]">
                            <thead>
                                <tr>
                                    <th scope="col" className="fw-semibold text-center bg-yellow-400" >Name</th>
                                    <th scope="col" className="fw-semibold text-center bg-yellow-400" >Image</th>
                                    <th scope="col" className="fw-semibold text-center bg-yellow-400" >Price</th>
                                    <th scope="col" className="fw-semibold text-center bg-yellow-400" >Category</th>
                                    <th scope="col" className="fw-semibold text-center bg-yellow-400">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="text-center border border-solid border-t-first">
                                {products?.map((prod)=>(
                                    <tr key={prod.id}>
                                        <td>{prod.name}</td>
                                        <td><img src={prod.image} alt="" className="max-w-[5vw] m-auto"/></td>
                                        <td>{prod.price}</td>
                                        <td>{prod.category}</td>
                                        <td>
                                            <div className="flex font-semibold justify-center gap-3">
                                                <div id="editbtn" className="flex flex-row align-middle gap-2 head cursor-pointer">
                                                    <p className="m-0 p-0">Edit</p>
                                                </div>
                                                <div id="detailbtn" className="flex flex-row align-middle gap-2 head cursor-pointer">
                                                    <p className="m-0 p-0">Detail</p>
                                                </div>
                                                <div data-bs-toggle="modal" data-bs-target="#myModal"
                                                    className="flex flex-row align-middle gap-2 head cursor-pointer">
                                                    <p class="m-0 p-0">Delete</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    {/* {products?.map((products) => (
                        <div key={products.id} onClick={() => handleProduct(products.id)}>
                            <Product
                            key={products.id}
                            name={products.name}
                            image={products.image}
                            category={products.category}
                            price={products.price}
                            // onClick={() => console.log(products.id)}
                        />
                        </div>
                    ))} */}
                    </div>
                }
            </div>
            <Footer />
        </div>
    );
}

export default ProductList;
