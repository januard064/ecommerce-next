import UserIcon from "../icons/user-icon"

const ChipMenu = (props) => {

    const { icon, text, path } = props.menu
    const { index, menuLength, onClick } = props

    return (
        <>
            <div className="flex flex-start items-center cursor-pointer"
                onClick={() => onClick(path)}
            >
                {icon}
                <p style={{ fontFamily: 'Poppins-SemiBold' }} className="ml-1.5 text-[#666666] text-sm">{text}</p>
                {(index < menuLength - 1) &&
                    (<div className="mx-5 text-[#D9D9D9] ">|</div>)
                }

            </div>
        </>
    )
}

export default ChipMenu