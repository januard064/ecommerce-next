import { useRouter } from "next/router"

import ChipMenu from "./chip-menu"

import UserIcon from "../icons/user-icon"
import CartIcon from "../icons/cart-icon"

// import const
import { ROUTER_CONST } from "@/Consants/RouterConst"

const menuItems = [
    {
        icon: <UserIcon />,
        text: 'Sign Up/Sign In',
    },
    {
        icon: <CartIcon />,
        text: 'Carts',
        path: ROUTER_CONST.shoppingCart
    }
]

const NavbarMenu = () => {

    const router = useRouter()

    const goToPage = (path) => {
        router.push(path)
    }

    return (
        <div className="flex justify-end">
            {menuItems.map((menu, index) => (
                <ChipMenu menu={menu} index={index} menuLength={menuItems.length} onClick={goToPage} />
            ))}
        </div>
    )
}

export default NavbarMenu