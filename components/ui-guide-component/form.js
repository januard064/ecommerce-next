
// import const
import { FONT_FAMILY } from "@/Consants/FontFamily"
import { COLOR } from "@/Consants/Color"

const InputForm = (props) => {

    const { id, label, placeholder, isRequired } = props

    return (
        <div className={`text-black`} style={{ fontFamily: FONT_FAMILY.POPPINS_REGULAR }}>
            <label className={`flex`}>{label}<span>{isRequired && <p>*</p>}</span></label>

            <input type="text" name={id} id={id} autocomplete="given-name" placeholder={placeholder}
                className={`block w-full h-[49px] rounded-lg bg-[${COLOR.GREY[700]}] px-4 mt-[10px] text-sm
                hover:bg-[${COLOR.GREY[200]}] hover:outline-none
                focus:bg-[${COLOR.GREY[200]}] focus:outline-none `}
            />
        </div>
    )
}

export default InputForm