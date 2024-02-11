

export default function Breadcrumb(){
    return(
        <div>
            <ol class="flex font-light p-[10px] text-sm md:text-base rounded-md space-x-2 mb-4">
                <li class="flex space-x-2">
                    <i class="fa-solid fa-house text-xs text-center my-auto"></i>
                    <div class="font-light">Home</div>
                </li>
                <li class="flex space-x-2">
                    <i class="fa-solid text-xs fa-greater-than items-center my-auto"></i>
                    <div class="font-light">Products</div>
                </li>
                <li class="flex space-x-2">
                    <i class="fa-solid text-xs fa-greater-than items-center my-auto"></i>
                    <div class="font-light">Product Details</div>
                </li>
            </ol>
        </div>
    )
}