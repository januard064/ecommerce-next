import React from "react"

import { FONT_FAMILY } from "@/Consants/FontFamily"
import { COLOR } from "@/Consants/Color"
import WarningForm from "./warning-form"

const TextArea = React.forwardRef((props, ref) => {

    const { id, name, value, label, placeholder, isRequired, onChange, warningEmpty } = props

    return (
        <div className={`text-black`} style={{ fontFamily: FONT_FAMILY.POPPINS_REGULAR }}>
            <label className={`flex`}>{label}<span>{isRequired && <p>*</p>}</span></label>

            <textarea type="text" value={value} name={name} id={id} rows={"3"} autocomplete="given-name" placeholder={placeholder} onChange={onChange}
                className={` block w-full rounded-lg bg-[${COLOR.GREY[700]}] p-4 mt-[10px] text-sm
                hover:bg-[${COLOR.GREY[200]}] hover:outline-none
                focus:bg-[${COLOR.GREY[200]}] focus:outline-none `}
                ref={ref}
            />

            <WarningForm inputLabel={label} warningEmpty={warningEmpty} />
        </div>
    )
})

export default TextArea