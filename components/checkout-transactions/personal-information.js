
import InputForm from "../ui-guide-component/form"
import TextArea from "../ui-guide-component/text-area"
import Button from "../ui-guide-component/button"

import TitleSeparator from "../title-separator/title-separator"

const PersonalInformation = (props) => {


    const toDelivery = (e) => {
        e.stopPropagation()
        const paymentElement = document.getElementById("shipping-address")
        paymentElement.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <>
            <div>
                <div className={`grid grid-cols-2 gap-4`}>
                    <InputForm id={"first-name"} label={"First Name"} placeholder={"First Name"} isRequired />
                    <InputForm id={"last-name"} label={"Last Name"} placeholder={"Last Name"} isRequired />
                </div>
                <div className={`grid grid-cols-2 gap-4 mt-6`}>
                    <InputForm id={"phone"} label={"Phone"} placeholder={"Phone"} isRequired />
                    <InputForm id={"address-label"} label={"Adress Label"} placeholder={"Kantor/Rumah/Apartemen"} />
                </div>
                <div className={`grid grid-cols-2 gap-4 mt-6`}>
                    <InputForm id={"city"} label={"City"} placeholder={"City"} isRequired />
                    <InputForm id={"post-code"} label={"Post Code"} placeholder={"Post Code"} isRequired />
                </div>
                <div className={`mt-6`}>
                    <TextArea id={"address"} label={"Address"} placeholder={"Address"} isRequired />
                </div>

                <div className={`flex items-center justify-end mt-6`}>
                    {/* <div className="text-black mr-4">
                        Save Address 
                    </div> */}
                    <Button onClick={toDelivery} type={"primary"} text={"Continue to Delivery"} />
                </div>
            </div>
        </>
    )
}

export default PersonalInformation