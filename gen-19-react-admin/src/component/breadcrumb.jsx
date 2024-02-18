

export default function Breadcrumb(){
    return(
        <div>
            <ol className="flex font-light p-[10px] text-sm md:text-base rounded-md space-x-2 mb-4">
                <li className="flex space-x-2">
                    <i className="fa-solid fa-house text-xs text-center my-auto"></i>
                    <div className="font-light">Home</div>
                </li>
                <li className="flex space-x-2">
                    <i className="fa-solid text-xs fa-greater-than items-center my-auto"></i>
                    <div className="font-light">Products</div>
                </li>
                <li className="flex space-x-2">
                    <i className="fa-solid text-xs fa-greater-than items-center my-auto"></i>
                    <div className="font-light">Product Details</div>
                </li>
            </ol>
        </div>
    )
}