import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){
    return(
        <nav className="sticky top-0 px-[5%] h-12 md:h-auto md:py-[2%] lg:py-[1%] bg-[#eee7e1] z-[100]">
            <div className="nav-def relative md:flex justify-between items-center h-12">
            <input
                type="checkbox"
                className="checkbox peer md:!hidden z-10 w-6 h-6 absolute left-5 m-0 top-[50%] translate-y-[-50%] opacity-0"
            />
            <FontAwesomeIcon
                icon={faBars}
                className='md:!hidden z-2 text-2xl absolute left-5 top-[50%] translate-y-[-50%] peer-checked:opacity-0'
            />
            <FontAwesomeIcon
                icon={faX}
                className="md:hidden z-2 text-2xl absolute left-5 top-[50%] translate-y-[-50%] opacity-0 peer-checked:opacity-100"
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

            <div className="nav-side bg-[#eee7e1] md:!hidden fixed bottom-0 top-12 w-[40%] h-[100vh] text-sm border-r border-r-gray-400 ease-linear duration-800 left-[-500px] peer-checked:left-0 peer-checked:transition-all peer-checked:duration-500 peer-checked:ease-in">
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
    )
}