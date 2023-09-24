import Layout from "../Layout/layout"
import InstagramLogo from "../icons/instagram-logo"
import TwitterLogo from "../icons/twitter-logo"
import LinkedInLogo from "../icons/linkedIn-logo"
import FacebookLogo from "../icons/facebook-logo"

// import const
import { FONT_FAMILY } from "@/Consants/FontFamily"
import { COLOR } from "@/Consants/Color"

const customerServiceList = {
    title: 'Customer Service',
    content: [
        {
            title: 'About Us',
            link: ''
        },
        {
            title: 'Terms & Conditions',
            link: ''
        },
        {
            title: 'FAQ',
            link: ''
        },
        {
            title: 'Privacy Policy',
            link: ''
        },
        {
            title: 'Cancellation & Return Policy',
            link: ''
        }
    ]
}

const mostPopularList = {
    title: 'Most Popular Categories',
    content: [
        {
            title: 'Category',
            link: ''
        },
        {
            title: 'Category',
            link: ''
        },
        {
            title: 'Category',
            link: ''
        },
    ]
}

const socialMediaList = [
    {
        link: 'https://www.instagram.com/',
        logo: <InstagramLogo />
    },
    {
        link: 'https://twitter.com/',
        logo: <TwitterLogo />
    },
    {
        link: 'https://facebook.com/',
        logo: <FacebookLogo />
    },
    {
        link: 'https://www.linkedin.com/',
        logo: <LinkedInLogo />
    },
]



const List = (props) => {
    const { menu } = props
    return (
        <>
            <div style={{ fontFamily: FONT_FAMILY.POPPINS_REGULAR }} className="border-b-2 w-fit pb-4 mb-5">{menu.title}</div>
            {menu.content.map((menuList) => (
                <li style={{ fontFamily: FONT_FAMILY.POPPINS_EXTRA_LIGHT }} className={`mb-2 cursor-pointer text-[14px] text-white hover:text-[#EDEDED]`}>{menuList.title}</li>
            ))}
        </>

    )
}

const Footer = () => {
    return (
        <>
            <footer className={`h-[380px] bg-[#008ECC] w-full mt-[120px]`}>
                <div className="relative">
                    <div className="absolute top-0 right-0">
                        <div className={`h-[254px] w-[254px] bg-[#0C9BDA] rounded-bl-full`} />
                    </div>
                    <div className="absolute top-0 right-0">
                        <div className={`h-[284px] w-[284px] border-2 border-[#0C9BDA] rounded-bl-full`} />
                    </div>
                </div>

                <Layout>
                    <div className="h-[380px] relative">
                        <div className="flex py-[40px] w-9/12 relative">
                            <div className="w-1/3">
                                Logo
                            </div>
                            <div className="w-1/3">
                                <List menu={mostPopularList} />
                            </div>
                            <div className="w-1/3">
                                <List menu={customerServiceList} />
                            </div>
                        </div>
                        <div className={`h-[48px] w-full absolute bottom-0 border-t-2 border-[#05ABF3] 
                                        flex justify-between items-center`}>
                            <p style={{ fontFamily: FONT_FAMILY.POPPINS_EXTRA_LIGHT }} className="text-[14px]">Copyright 2023 Next-Ecommerce</p>
                            <div className="flex ">
                                {socialMediaList.map((socmed) => (
                                    <div className="ml-4 cursor-pointer">
                                        <a href={socmed.link} target="_blank">
                                            {socmed.logo}
                                        </a>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </Layout>
            </footer>
        </>
    )
}

export default Footer