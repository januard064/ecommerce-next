import ChipMenu from "./chip-menu"

import UserIcon from "../icons/user-icon"
import CartIcon from "../icons/cart-icon"

const menuItems = [
    {
        icon: <UserIcon />,
        text: 'Sign Up/Sign In'
    },
    {
        icon: <CartIcon />,
        text: 'Carts'
    }
]

const NavbarMenu = () => {
    return (
        <div className="flex justify-end">
            {menuItems.map((menu, index) => (
                <ChipMenu menu={menu} index={index} menuLength={menuItems.length} /> 
            ))}
        </div>
    )
}

export default NavbarMenu