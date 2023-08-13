import Navbar from "../navbar/navbar"

const Layout = (props) => {

    const { isBody } = props

    return (
        <>
            <div className={`grid grid-cols-12 gap-4 ${isBody && 'mt-[110px]'}`}>
                <div className="lg:col-span-1 hidden lg:block" />
                <div className="lg:col-span-10 col-span-12 flex justify-center">
                    <div className="w-full xl:w-[1198px]">
                        {props.children}

                    </div>
                </div>
                <div className="lg:col-span-1 hidden lg:block" />
            </div >
        </>
    )
}

export default Layout