import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./component/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { products } from "./data/products";

function App() {
    return (
        <div className="m-0">
        <div className="mini-info">
            ADS Kindly Visit Our Instagram or Carousell @derola.stuff
        </div>
        <nav className="sticky top-0 px-[5%] h-12 md:h-auto md:py-[2%] lg:py-[1%] bg-[#eee7e1] z-[100]">
            <div className="nav-def relative md:flex justify-between items-center h-12">
            <input
                type="checkbox"
                className="checkbox md:!hidden z-10 w-6 h-6 absolute left-5 m-0 top-[50%] translate-y-[-50%] opacity-0"
            />
            <FontAwesomeIcon
                icon={faBars}
                className='md:!hidden z-2 text-2xl absolute left-5 top-[50%] translate-y-[-50%]"'
            />
            <FontAwesomeIcon
                icon={faX}
                className="md:hidden z-2 text-2xl absolute left-5 top-[50%] translate-y-[-50%] opacity-0"
            />

            <h3 className="cursor-pointer md:text-lg font-[500] absolute right-5 top-[50%] translate-y-[-50%]">
                DeRola.stuff
            </h3>
            <div className="nav-top hidden md:flex gap-[2vw]">
                <FontAwesomeIcon
                icon={faHouse}
                className="cursor-pointer md:text-lg hover:text-[#C7B39F]"
                />
                <FontAwesomeIcon
                icon={faShop}
                className="cursor-pointer md:text-lg hover:text-[#C7B39F]"
                />
                <FontAwesomeIcon
                icon={faCartShopping}
                className="cursor-pointer md:text-lg hover:text-[#C7B39F]"
                />
                <FontAwesomeIcon
                icon={faUser}
                className="cursor-pointer md:text-lg hover:text-[#C7B39F]"
                />
            </div>

            <div className="nav-side bg-[#eee7e1] md:!hidden fixed bottom-0 top-12 w-[40%] h-[100vh] text-sm border-r border-r-gray-400 ease-linear duration-800 left-[-500px]">
                <div className="flex p-4 border-b bg-[#eee7e1] border-gray-600 text-slate-800 items-center gap-2 cursor-pointer lg:text-lg hover:text-[#C7B39F]">
                <FontAwesomeIcon icon={faHouse} />
                Home
                </div>
                <div className="flex p-4 border-b bg-[#eee7e1] border-gray-600 text-slate-800 items-center gap-2 cursor-pointer lg:text-lg hover:text-[#C7B39F]">
                <FontAwesomeIcon icon={faShop} />
                Shop
                </div>
                <div className="flex p-4 border-b bg-[#eee7e1] border-gray-600 text-slate-800 items-center gap-2 cursor-pointer lg:text-lg hover:text-[#C7B39F]">
                <FontAwesomeIcon icon={faCartShopping} />
                Cart
                </div>
                <div className="flex p-4 border-b bg-[#eee7e1] border-gray-600 text-slate-800 items-center gap-2 cursor-pointer lg:text-lg hover:text-[#C7B39F]">
                <FontAwesomeIcon icon={faUser} />
                Profile
                </div>
            </div>
            </div>
        </nav>
        <div className="content z-0">
            <div className="searchbox">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" name="" id="" placeholder="Search our products" />
            </div>
            <div className="promote">
                <img
                    src="../public/images/undraw_undraw_shopping_bags_2ude_-1-_mnw3.svg"
                    alt=""
                />
                <div className="pr">
                    <div>
                    BUY
                    <br />
                    MORE
                    </div>
                    <div>GET MORE FREE</div>
                </div>
            </div>
            <div className="filter-wrapper">
                <div className="filter">
                    <div className="category" style={{ backgroundColor: "#C7B39F" }}>
                    All
                    </div>
                    <hr size="8" color="#C7B39F" />
                    <div className="category">Autumn</div>
                    <hr size="8" color="#C7B39F" />
                    <div className="category">Winter</div>
                    <hr size="8" color="#C7B39F" />
                    <div className="category">Daily</div>
                    <hr size="8" color="#C7B39F" />
                    <div className="category">Best Seller</div>
                </div>
            </div>
            <div className="products">
                {products.map((products) => (
                    <Product
                    name={products.name}
                    image={products.image}
                    category={products.category}
                    price={products.price}
                    />
                ))}
            </div>
        </div>
        <footer className="px-[5%] py-[6%] md:py-[3%] bg-[#C7B39F] flex md:justify-between flex-wrap gap-6 md:gap-0">
            <div className="fo-start text-base lg:text-lg w-[100%] md:w-[35%] gap-[5%] md:gap-y-[10%] flex md:flex-col items-center md:items-start">
                <img className="w-[15vw] h-[15vw] md:w-[7vw] md:h-[7vw]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/GU_logo.svg/1200px-GU_logo.svg.png" alt=""/>
                Copyright © G.U. CO., Ltd. All rights reserved.
            </div>
            <div className="fo text-base lg:text-lg w-[28%] md:w-[20%] h-[100%]">
                PRODUCTS
                <ul className="list-none pl-0 text-base">
                    <li className="my-[1vh] cursor-pointer hover:text-[#eee7e1]">Men</li>
                    <li className="my-[1vh] cursor-pointer hover:text-[#eee7e1]">Woman</li>
                    <li className="my-[1vh] cursor-pointer hover:text-[#eee7e1]">Autumn</li>
                    <li className="my-[1vh] cursor-pointer hover:text-[#eee7e1]">Winter</li>
                    <li className="my-[1vh] cursor-pointer hover:text-[#eee7e1]">Daily</li>
                    <li className="my-[1vh] cursor-pointer hover:text-[#eee7e1]">Best Seller</li>
                </ul>
            </div>
            <div className="fo text-base lg:text-lg w-[28%] md:w-[20%] h-[100%]">
                HELP
                <ul className="list-none pl-0 text-base">
                    <li className="my-[1vh] cursor-pointer hover:text-[#eee7e1]">Term of Use</li>
                    <li className="my-[1vh] cursor-pointer hover:text-[#eee7e1]">Privacy & Policy</li>
                    <li className="my-[1vh] cursor-pointer hover:text-[#eee7e1]">Customer Service</li>
                </ul>
            </div>
            <div className="fo-end text-base lg:text-lg w-[28%] md:w-[20%]">
                SOCIAL MEDIA
                <ul className="max-w-[50%] list-none pl-0 grid grid-cols-3 gap-x-[15%] gap-y-[30%]">
                    <li className="cursor-pointer">
                        <a href="https://web.facebook.com/g.u.japan?open_target_android=browser&open_target_ios=browser&_rdc=1&_rdr">
                            <i className="fa-brands fa-facebook no-underline lg:text-2xl text-black hover:text-[#eee7e1]"></i>
                        </a>
                    </li>
                    <li className="cursor-pointer">
                        <a href="https://twitter.com/gu_global?open_target_android=browser&open_target_ios=browser">
                            <i className="fa-brands fa-x no-underline lg:text-2xl text-black hover:text-[#eee7e1]"></i>
                        </a>
                    </li>
                    <li className="cursor-pointer">
                        <a href="https://line.me/R/ti/p/@gujapan?from=page&openQrModal=true&searchId=gujapan">
                            <i className="fa-brands fa-line no-underline lg:text-2xl text-black hover:text-[#eee7e1]"></i>
                        </a>
                    </li>
                    <li className="cursor-pointer">
                        <a href="https://www.instagram.com/gu_global/?open_target_android=browser&open_target_ios=browser">
                            <i className="fa-brands fa-instagram no-underline lg:text-2xl text-black hover:text-[#eee7e1]"></i>
                        </a>
                    </li>
                    <li className="cursor-pointer">
                        <a href="https://www.youtube.com/user/gujapan">
                            <i className="fa-brands fa-youtube no-underline lg:text-2xl text-black hover:text-[#eee7e1]"></i>
                        </a>
                    </li>
                    <li className="cursor-pointer">
                        <a href="https://www.tiktok.com/@gu_official?utm_medium=tiktok&utm_source=sitelogo">
                            <i className="fa-brands fa-tiktok no-underline lg:text-2xl text-black hover:text-[#eee7e1]"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
        </div>
    );
}

export default App;
