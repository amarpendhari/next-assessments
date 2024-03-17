import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Config from '../../apiConfig'
import styled from "styled-components"
import Link from "next/link"

const UserDetailsWrapper = styled.div`
    margin-top: 20px;
    div {
        display: flex;
        gap: 20px;
        span {
            font-weight: 600;
        }
    }
`

const UserDetailsPage = () => {
    const router = useRouter()
    const [details, setDetails] = useState<any>({})

    const getUserDetails = async (id: any) => {
        const response = await fetch(`${Config.API_URL}/users/${id}`);
        const userDetails = await response.json();
        console.log(userDetails);
        setDetails(userDetails)
    }

    useEffect(() => {
        console.log('asdasdasd', )
        if(Number(router?.query?.id)) {
            getUserDetails(router?.query?.id)
        } else {
            router.push('/users')
        }
    },[router])

    return (
        <div>
            <Link href={`/users`}>Back to Users</Link>
            <h2 className="mt-4">Users Details</h2>
            <UserDetailsWrapper>
                <div>
                    <p>Name</p>
                    <span>{details?.name}</span>
                </div>
                <div>
                    <p>Email</p>
                    <span>{details?.email}</span>
                </div>
                <div>
                    <p>Website</p>
                    <span>{details?.website}</span>
                </div>
            </UserDetailsWrapper>
        </div>
    )
}

export default UserDetailsPage