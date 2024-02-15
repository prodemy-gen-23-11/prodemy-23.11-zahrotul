import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Info from './info'

export default function Product(props){
    const {name,image,price,category} = props
    return(
        <div className="group product w-fit h-fit flex flex-col gap-[3px] sm:gap-[6px] lg:gap-[10px] cursor-pointer overflow-hidden">
            <div className="wrapper relative">
                {/* <div>{category}</div> */}
                <Info category={category} />
                <img src={image} alt="" className='w-[38vw] sm:w-[24vw] lg:w-[19vw] rounded-xl brightness-100 transition-all duration-100 ease-linear hover:brightness-75 hover:transition-all hover:duration-100 hover:ease-linear'/>
                <div className="cart !aspect-square sm:text-sm sm:p-[7px] lg:p-[10px] p-[5px] rounded-[50%] bg-white absolute bottom-[5%] right-[-20%] z-10 transition-all duration-300 ease-linear group-hover:right-[5%] group-hover:transition-all group-hover:duration-300 group-hover:ease-linear hover:bg-black hover:text-white hover:transition-all hover:duration-300 hover:ease-linear ">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <i className="fa-solid fa-cart-shopping text-xs sm:text-sm lg:text-base"></i>
                </div>
            </div>
            <div className="variant flex gap-1">
                <div className="variant-1 rounded-[50%] bg-third w-[10px] sm:w-[15px] lg:w-[20px] border-[1pt] border-solid border-gray-400 aspect-square "></div>
                <div className="variant-2 rounded-[50%] bg-black w-[10px] sm:w-[15px] lg:w-[20px] border-[1pt] border-solid border-gray-400 aspect-square "></div>
            </div>
            <div className="p-name max-w-[38vw] sm:w-[24vw] lg:w-[19vw] text-xs sm:text-sm lg:text-base font-light ">{name}</div>
            <div className="price max-w-[38vw] sm:w-[24vw] lg:w-[19vw] text-sm sm:text-base lg:text-lg font-bold ">{price}</div>
        </div>
    )
}