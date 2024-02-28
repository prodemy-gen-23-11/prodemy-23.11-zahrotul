

export default function Footer(){
    return(
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
    )
}