const TitleSeparator = (props) => {

    const { firstTitle, secondTitle, onClickViewAll } = props

    return (
        <div className="my-8">
            <div className="flex justify-between">
                <div style={{ fontFamily: 'Poppins-Regular' }} className="w-fit pb-2 border-b-2 border-[#008ECC] text-[22px] flex items-center">
                    <p className="text-[#666666]">{firstTitle}</p> &nbsp;
                    <p className="text-[#008ECC]">{secondTitle}</p>
                </div>
                {onClickViewAll &&
                    <div className="flex items-center cursor-pointer" onClick={onClickViewAll}>
                        <p style={{ fontFamily: 'Poppins-ExtraLight' }} className="text-[#222222] text-sm mr-[6px]">View All</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 stroke-[#008ECC]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                }
            </div>
            <hr className="bg-[#EDEDED]" />
        </div>
    )
}

export default TitleSeparator
