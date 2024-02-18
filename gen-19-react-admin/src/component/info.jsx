import { clsx } from 'clsx';

export default function Info(props){
    const winter = "info capitalize w-fit p-[3px] rounded-[3px] absolute left-[5%] top-[5%] text-[7px] text-third z-10 sm:p-[5px] sm:rounded-[6px] sm:text-xs lg:p-[6px] lg:rounded-[10px] lg:text-sm bg-[#099bc7]"
    const best = "info capitalize w-fit p-[3px] rounded-[3px] absolute left-[5%] top-[5%] text-[7px] text-third z-10 sm:p-[5px] sm:rounded-[6px] sm:text-xs lg:p-[6px] lg:rounded-[10px] lg:text-sm bg-[#09c73f]"
    const daily = "info capitalize w-fit p-[3px] rounded-[3px] absolute left-[5%] top-[5%] text-[7px] text-third z-10 sm:p-[5px] sm:rounded-[6px] sm:text-xs lg:p-[6px] lg:rounded-[10px] lg:text-sm bg-[#c7c409]"
    const autumn = "info capitalize w-fit p-[3px] rounded-[3px] absolute left-[5%] top-[5%] text-[7px] text-third z-10 sm:p-[5px] sm:rounded-[6px] sm:text-xs lg:p-[6px] lg:rounded-[10px] lg:text-sm bg-[#c74809]"
    
    return(
        <div className={
                props.category=="best seller" ? clsx(best)
                : props.category=="winter" ? clsx(winter)
                : props.category=="autumn" ? clsx(autumn)
                : props.category=="daily" ? clsx(daily)
                : ""
            }>
            {props.category}
        </div>
    )
}