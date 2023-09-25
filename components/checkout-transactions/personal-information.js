import { useEffect, useRef, useState } from "react"

import InputForm from "../ui-guide-component/form"
import TextArea from "../ui-guide-component/text-area"
import Button from "../ui-guide-component/button"

const PersonalInformation = (props) => {

    const { shippingAdress, setShippingAddress } = props

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const phoneRef = useRef()
    const addressLabelRef = useRef()
    const cityRef = useRef()
    const postCodeRef = useRef()
    const addressRef = useRef()

    const [isAddressComplete, setIsAddressComplete] = useState(false)


    const toDelivery = (e) => {
        e.preventDefault()
        const paymentElement = document.getElementById("shipping-address")
        paymentElement.scrollIntoView({ behavior: "smooth" })
    }



    const handleSubmit = (e) => {
        e.preventDefault()


        const firstName = firstNameRef.current?.value
        const lastName = lastNameRef.current?.value
        const phone = phoneRef.current?.value
        const addressLabel = addressLabelRef.current?.value
        const city = cityRef.current?.value
        const postCode = postCodeRef.current?.value
        const address = addressRef.current?.value


        // if(firstName  && )

        const tempPersonalInformation = {
            firstName,
            lastName,
            phone,
            addressLabel,
            city,
            postCode,
            address
        }
        // shippingAdress.firstName = firstName
        // shippingAdress.lastName = lastName
        // shippingAdress.phone = phone
        // shippingAdress.addressLabel = addressLabel
        // shippingAdress.city = city
        // shippingAdress.postCode = postCode
        // shippingAdress.address = address

        if (firstName && lastName && phone && addressLabel && city && postCode && address) {
            console.log(shippingAdress)
            setShippingAddress(tempPersonalInformation)
            toDelivery(e)

            setIsAddressComplete(true)
        } else {
            console.log('no data')
            setIsAddressComplete(false)
        }


    }


    return (
        <>
            <div>
                <form autocomplete="off" onSubmit={handleSubmit}  >
                    <div className={`grid grid-cols-2 gap-4`}>
                        {/* <input ref={firstNameRef} /> */}
                        <InputForm id={"first-name"} label={"First Name"} placeholder={"First Name"} isRequired ref={firstNameRef} />
                        { !shippingAdress.firstName && (<p className="text-black">input</p>)}

                        <InputForm id={"last-name"} label={"Last Name"} placeholder={"Last Name"} isRequired ref={lastNameRef} />
                    </div>
                    <div className={`grid grid-cols-2 gap-4 mt-6`}>
                        <InputForm id={"phone"} label={"Phone"} placeholder={"Phone"} isRequired ref={phoneRef} />
                        <InputForm id={"address-label"} label={"Adress Label"} placeholder={"Kantor/Rumah/Apartemen"} ref={addressLabelRef} />
                    </div>
                    <div className={`grid grid-cols-2 gap-4 mt-6`}>
                        <InputForm id={"city"} label={"City"} placeholder={"City"} isRequired ref={cityRef} />
                        <InputForm id={"post-code"} label={"Post Code"} placeholder={"Post Code"} isRequired ref={postCodeRef} />
                    </div>
                    <div className={`mt-6`}>
                        <TextArea id={"address"} label={"Address"} placeholder={"Address"} isRequired ref={addressRef} />
                    </div>

                    <div className={`flex items-center justify-end mt-6`}>
                        {/* <div className="text-black mr-4">
                        Save Address 
                    </div> */}
                        <button type="" className="text-black">
                            <div> <Button type={"primary"} text={"Continue to Delivery"} /></div>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default PersonalInformation