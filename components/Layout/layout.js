import Navbar from "../navbar/navbar"

const Layout = (props) => {

    return (
        <>
            <main className="grid grid-cols-12 gap-4 mt-[110px]">
                <div className="md:col-span-1 hidden lg:block" />
                <div className="lg:col-span-10 md:col-span-12">
                    {props.children}
                </div>
                <div className="lg:col-span-1 hidden lg:block" />
            </main>
        </>
    )
}

export default Layout