import React from "react"
// import const
import { FONT_FAMILY } from "@/Consants/FontFamily"
import { COLOR } from "@/Consants/Color"

const InputForm = React.forwardRef((props, ref) => {

    const { id, label, placeholder, isRequired } = props

    return (
        <div className={`text-black`} style={{ fontFamily: FONT_FAMILY.POPPINS_REGULAR }}>
            <label className={`flex`}>{label}<span>{isRequired && <p>*</p>}</span></label>

            <input autocomplete="off" type="text" name={id} id={id} placeholder={placeholder}
                className={`block w-full h-[49px] rounded-lg bg-[#F6F6F6] px-4 mt-[10px] text-sm
                hover:bg-[#F3F9FB] hover:outline-none
                focus:bg-[#F3F9FB] focus:outline-none `}
                // required={isRequired}
                ref={ref}
            />
        </div>
    )
})

export default InputForm