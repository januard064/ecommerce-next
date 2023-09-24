import { FONT_FAMILY } from "@/Consants/FontFamily"

const SubtitleSeparator = (props) => {

    const { title } = props

    return (
        <div style={{ fontFamily: FONT_FAMILY.POPPINS_REGULAR }} className={`text-[20px] text-black mb-4 flex items-center`}>
            <div className="h-7 w-[6px] bg-[#8A33FD] mr-2 rounded-2xl" />

            <p>{title}</p>
        </div>
    )
}

export default SubtitleSeparator