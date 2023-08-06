import SearchBar from "./search-bar"
import NavbarMenu from "./navbar-menu"

const Navbar = () => {
    return (
        <div className="bg-[#FFFFFF] z-50 border-b-2 border-[#EDEDED] fixed top-0 w-full">
            <div className="grid grid-cols-12 gap-4">
                <div className="md:col-span-1 hidden lg:block" />
                <div className="lg:col-span-10 md:col-span-12">
                    <div className="flex sm:justify-between h-[90px] items-center">
                        <div className="text-black cursor-pointer">Logo</div>
                        <div className="">
                            <SearchBar />
                        </div>
                        <div className="">
                            <NavbarMenu />
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1 hidden lg:block" />
            </div>
        </div>
    )
}

export default Navbar