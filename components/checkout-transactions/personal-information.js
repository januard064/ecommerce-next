import { useEffect, useRef, useState } from "react"

import InputForm from "../ui-guide-component/form"
import TextArea from "../ui-guide-component/text-area"
import Button from "../ui-guide-component/button"

import WarningForm from "../ui-guide-component/warning-form"

const PersonalInformation = (props) => {

    const { shippingAdress, setShippingAddress } = props

    const initValue = {
        firstName: "",
        lastName: "",
        phone: "",
        addressLabel: "",
        city: "",
        postCode: "",
        address: ""
    }

    const [tempAddress, setTempAddress] = useState(initValue)


    const toDelivery = () => {
        const paymentElement = document.getElementById("shipping-address")
        paymentElement.scrollIntoView({ behavior: "smooth" })
    }


    const handleChange = (event) => {
        event.preventDefault()

        const { name, value } = event.target

        setTempAddress({
            ...tempAddress,
            [name]: value
        })

    }

    const handleSubmitAddress = (e) => {
        e.preventDefault()
        setShippingAddress(tempAddress)

        if (Object.values(tempAddress).every(value => value !== "")) {
            console.log('true')
            toDelivery()
            setTempAddress(initValue)
            // setTransaction({
            //     ...transaction,
            //     address: tempAddress
            // })

        }
    }

    useEffect(() => {
        console.log('tempaddress', tempAddress.lastName)
    }, [tempAddress])

    return (
        <>
            <div>
                <div className={`grid grid-cols-2 gap-4`}>
                    <InputForm id={"first-name"} value={tempAddress.firstName} name="firstName" label={"First Name"} placeholder={"First Name"} isRequired onChange={handleChange} warningEmpty={shippingAdress.firstName == ""} />
                    <InputForm id={"last-name"} value={tempAddress.lastName} name="lastName" label={"Last Name"} placeholder={"Last Name"} isRequired onChange={handleChange} warningEmpty={shippingAdress.lastName == ""} />
                </div>

                <div className={`grid grid-cols-2 gap-4 mt-2`}>
                    <InputForm id={"phone"} value={tempAddress.phone} name="phone" label={"Phone"} placeholder={"Phone"} isRequired onChange={handleChange} warningEmpty={shippingAdress.phone == ""} />
                    <InputForm id={"address-label"} value={tempAddress.addressLabel} name="addressLabel" label={"Adress Label"} placeholder={"Kantor/Rumah/Apartemen"} isRequired onChange={handleChange} warningEmpty={shippingAdress.addressLabel == ""} />
                </div>
                <div className={`grid grid-cols-2 gap-4 mt-2`}>
                    <InputForm id={"city"} value={tempAddress.city} name="city" label={"City"} placeholder={"City"} isRequired onChange={handleChange} warningEmpty={shippingAdress.city == ""} />
                    <InputForm id={"post-code"} value={tempAddress.postCode} name="postCode" label={"Post Code"} placeholder={"Post Code"} isRequired onChange={handleChange} warningEmpty={shippingAdress.postCode == ""} />
                </div>
                <div className={`mt-2`}>
                    <TextArea id={"address"} value={tempAddress.address} name="address" label={"Address"} placeholder={"Address"} isRequired onChange={handleChange} warningEmpty={shippingAdress.address == ""} />
                </div>

                <div className={`flex items-center justify-end mt-2`}>
                    {/* <div className="text-black mr-4">
                        Save Address 
                    </div> */}
                    <Button type={"primary"} text={"Continue to Delivery"} onClick={handleSubmitAddress} />
                </div>
            </div>
        </>
    )
}

export default PersonalInformation