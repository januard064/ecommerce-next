const SearchBar = () => {
    return (
        <>
            <label class="h-12 w-[507px] relative flex items-center bg-[#F3F9FB] rounded-[10px] px-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 items-center stroke-[#008ECC] mr-[10px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <input style={{fontFamily:'Poppins-Light'}} type="text" id="searchProducts" placeholder="Search products, category and more..."
                    className="bg-[#F3F9FB] w-[100%] hover:outline-none focus:outline-none placeholder:text-[#666666] text-[#222222] text-sm"
                />
            </label>
        </>
    )
}

export default SearchBar