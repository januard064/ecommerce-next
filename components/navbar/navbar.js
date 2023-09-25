import { useRouter } from "next/router"
import { ROUTER_CONST } from "@/Consants/RouterConst"

import SearchBar from "./search-bar"
import NavbarMenu from "./navbar-menu"
import Layout from "../Layout/layout"


const Navbar = () => {

    const router = useRouter()

    const goToHome = () => {
        router.push(ROUTER_CONST.home)
    }

    return (
        <div className="bg-[#FFFFFF] z-10 border-b-2 border-[#EDEDED] fixed top-0 w-full">
            <Layout>
                <div className="flex sm:justify-between h-[90px] items-center">
                    <div className="text-black cursor-pointer" onClick={goToHome}>Logo</div>
                    <div className="">
                        <SearchBar />
                    </div>
                    <div className="">
                        <NavbarMenu />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Navbar