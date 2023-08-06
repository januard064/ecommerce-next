const NavigationLayout = (props) => {
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="md:col-span-1 hidden lg:block" />
            <div className="lg:col-span-10 md:col-span-12">
                {props.children}
            </div>
            <div className="lg:col-span-1 hidden lg:block" />
        </div>
    )
}

export default NavigationLayout