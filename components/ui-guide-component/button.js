const Button = (props) => {
    const { type, text, icon } = props

    // flex justify-center items-center w-40 h-12 rounded-[8px]
    return (
        <div
            style={{ fontFamily: 'Poppins-Regular' }}
            className={`flex justify-center items-center w-40 h-11 rounded-[8px] cursor-pointer
            ${type == 'primary' ? `bg-[#8A33FD] hover:bg-[#6620C1] active:bg-[#6620C1] text-white` :
                    `border-[1px] border-[#3C4242] hover:bg-[#6620C1] hover:bg-opacity-[3%] active:bg-[#6620C1] active:border-[#8A33FD] active:bg-opacity-[3%] text-[#8A33FD]`
                }`}>
            {icon && <div className="mr-2">{icon}</div>}
            <p>{text}</p>
        </div>
    )
}

export default Button