const CartTableHead = (props) => {
    const { width, children } = props

    return (
        <div className={`w-[${width}]`}>
            <p style={{ fontFamily: 'Poppins-SemiBold' }} className="text-[18px]">{children}</p>
        </div>
    )
}

export default CartTableHead