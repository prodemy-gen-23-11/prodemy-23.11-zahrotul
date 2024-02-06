import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './component/product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function App() {
  const products = [
    {
      category: "best",
      image:"images/product-1.0.webp",
      name: "Double pocket knit jacket with long sleeves",
      price: "¥2,990",
    },
    {
      category:"autumn",
      image:"images/product-2.0.webp",
      name:"Half-Zip Sweater (Long Sleeve) (Border)",
      price:"¥2,990"
    },
    {
      category:"autumn",
      image:"images/product-3.0.webp",
      name:"Fair Isle Sweater (Long Sleeve) + E",
      price:"¥990"
    },
    {
      category:"daily",
      image:"images/product-8.0.webp",
      name:"Bouclé knit jacket (long sleeves) + E (can be set up)",
      price:"¥2,990"
    },
    {
      category:"best",
      image:"images/product-4.0.webp",
      name:"Mesh Sweater (Long Sleeve)",
      price:"¥1,990"
    },
    {
      category:"autumn",
      image:"images/product-5.0.webp",
      name:"Puffy Touch Low Gauge Crew Neck Sweater (Long Sleeve)",
      price:"¥790"
    },
    {
      category:"winter",
      image:"images/product-13.1.webp",
      name:"Low Gauge Sweater with Long Sleeves (Gradient)",
      price:"¥1,990"
    },
  ]

  return (
    <div className='m-0'>
      <div className="mini-info">ADS Kindly Visit Our Instagram or Carousell @derola.stuff</div>
      <nav className="sticky top-0 px-[5%] h-12 md:h-auto md:py-[2%] lg:py-[1%] bg-[#eee7e1] z-[100]">
        <div className="nav-def relative md:flex justify-between items-center h-12">
          <input type="checkbox" className="checkbox md:!hidden z-10 w-6 h-6 absolute left-5 m-0 top-[50%] translate-y-[-50%] opacity-0"/>
          <FontAwesomeIcon icon={faBars} className='md:!hidden z-2 text-2xl absolute left-5 top-[50%] translate-y-[-50%]"'/>
          <FontAwesomeIcon icon={faX} className="md:hidden z-2 text-2xl absolute left-5 top-[50%] translate-y-[-50%] opacity-0"/>

          <h3 className="cursor-pointer md:text-lg font-[500] absolute right-5 top-[50%] translate-y-[-50%]">DeRola.stuff</h3>
          <div className="nav-top hidden md:flex gap-[2vw]">
            <FontAwesomeIcon icon={faHouse} className='cursor-pointer md:text-lg hover:text-[#C7B39F]'/>
            <FontAwesomeIcon icon={faShop} className='cursor-pointer md:text-lg hover:text-[#C7B39F]'/>
            <FontAwesomeIcon icon={faCartShopping} className='cursor-pointer md:text-lg hover:text-[#C7B39F]'/>
            <FontAwesomeIcon icon={faUser} className='cursor-pointer md:text-lg hover:text-[#C7B39F]'/>
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
            <input type="text" name="" id="" placeholder="Search our products"/>
        </div>
        <div className="promote">
            <img src="../public/images/undraw_undraw_shopping_bags_2ude_-1-_mnw3.svg" alt=""/>
            <div className="pr">
                <div>BUY<br/>MORE</div>
                <div>GET MORE FREE</div>
            </div>
        </div>
        <div className="filter-wrapper">
            <div className="filter">
                <div className="category" style={{backgroundColor:"#C7B39F"}}>All</div>
                <hr size="8" color="#C7B39F"/>
                <div className="category">Autumn</div>
                <hr size="8" color="#C7B39F"/>
                <div className="category">Winter</div>
                <hr size="8" color="#C7B39F"/>
                <div className="category">Daily</div>
                <hr size="8" color="#C7B39F"/>
                <div className="category">Best Seller</div>
            </div>
        </div>
        <div className="products">
          {products.map((products)=>(
            <Product name={products.name} image={products.image} category={products.category} price={products.price} />
          ))}
        </div>
      </div>
      <footer>
        <div className="fo-start">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/GU_logo.svg/1200px-GU_logo.svg.png" alt=""/>
            Copyright © G.U. CO., Ltd. All rights reserved.
        </div>
        <div className="fo">
            PRODUCTS
            <ul>
                <li>Men</li>
                <li>Woman</li>
                <li>Autumn</li>
                <li>Winter</li>
                <li>Daily</li>
                <li>Best Seller</li>
            </ul>
        </div>
        <div className="fo">
            HELP
            <ul>
                <li>Term of Use</li>
                <li>Privacy & Policy</li>
                <li>Customer Service</li>
            </ul>
        </div>
        <div className="fo-end">
            SOCIAL MEDIA
            <ul>
                <li>
                    <a href="https://web.facebook.com/g.u.japan?open_target_android=browser&open_target_ios=browser&_rdc=1&_rdr">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/gu_global?open_target_android=browser&open_target_ios=browser">
                        <i className="fa-brands fa-x"></i>
                    </a>
                </li>
                <li>
                    <a href="https://line.me/R/ti/p/@gujapan?from=page&openQrModal=true&searchId=gujapan">
                        <i className="fa-brands fa-line"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/gu_global/?open_target_android=browser&open_target_ios=browser">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/user/gujapan">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@gu_official?utm_medium=tiktok&utm_source=sitelogo">
                        <i className="fa-brands fa-tiktok"></i>
                    </a>
                </li>
            </ul>
        </div>
      </footer>
    </div>
  )
}

export default App
