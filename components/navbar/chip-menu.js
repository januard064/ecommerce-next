import UserIcon from "../icons/user-icon"

const ChipMenu = (props) => {

    const { icon, text } = props.menu
    const { index, menuLength } = props

    return (
        <>
            <div className="flex flex-start items-center cursor-pointer">
                {icon}
                <p style={{ fontFamily: 'Poppins-SemiBold' }} className="ml-1.5 text-[#666666] text-base">{text}</p>
                {(index < menuLength - 1) &&
                    (<div className="mx-5 text-[#D9D9D9] ">|</div>)
                }

            </div>
        </>
    )
}

export default ChipMenu