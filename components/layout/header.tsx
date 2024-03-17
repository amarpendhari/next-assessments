import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0rem 3rem;
    background: white;
    align-items: center;
    color: white;
    .nav-links {
        display: flex;
        gap: 25px;
        a {
            font-size: 18px;
            &.active {
                color: red;
            }
        }
    }
    @media screen and (max-width: 480px) {
        padding: 0rem 1rem;
    }
`

const Header = () => {

    return (
        <HeaderWrapper>
            <div>
                <Image src={`/baseel-logo.jpeg`} alt='baseel-logo' width={100} height={100} />
            </div>
           <div className="nav-links">
                <Link href={`/`} className="text-sm font-semibold leading-6 text-gray-900">
                    Home
                </Link>
                <Link href={`/about`} className="text-sm font-semibold leading-6 text-gray-900">
                    About
                </Link>
                <Link href={`/users`} className="text-sm font-semibold leading-6 text-gray-900">
                    Users
                </Link>
           </div>
        </HeaderWrapper>
    )
}

export default Header