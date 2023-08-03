const Layout = (props) => {

    return (
        <main class="grid grid-cols-12 gap-4">
            <div class="lg:col-span-1 hidden lg:block" />
            <div class="lg:col-span-10 col-span-12">
                {props.children}
            </div>
            <div class="lg:col-span-1 hidden lg:block" />
        </main>
    )

}

export default Layout