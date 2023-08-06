import SearchBar from "./search-bar"
import NavbarMenu from "./navbar-menu"
import NavigationLayout from "../navigation-layout/navigation-layout"

const Navbar = () => {
    return (
        <div className="bg-[#FFFFFF] z-50 border-b-2 border-[#EDEDED] fixed top-0 w-full">
            <NavigationLayout>
                <div className="flex sm:justify-between h-[90px] items-center">
                    <div className="text-black cursor-pointer">Logo</div>
                    <div className="">
                        <SearchBar />
                    </div>
                    <div className="">
                        <NavbarMenu />
                    </div>
                </div>
            </NavigationLayout>
        </div>
    )
}

export default Navbar