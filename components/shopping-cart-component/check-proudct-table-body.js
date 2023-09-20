export const CheckProudctTableBody = (props) => {

    const { isChecked, handleCheckOutCart } = props

    return (
        <div className="w-[10%]">
            <input type="checkbox"
                className="w-6 h-6 text-white  cursor-pointer accent-[#008ECC]  text-red-500"
                checked={isChecked}
                onChange={handleCheckOutCart}
            />
        </div>
    )
}

export default CheckProudctTableBody