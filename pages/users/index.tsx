import Config from '../../apiConfig'
import styled from "styled-components"
import Link from "next/link"

const UserList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    .card {
        border-radius: 12px;
    }
    @media screen and (max-width: 880px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        grid-gap: 15px;
    }
`

export default function UsersPage(props: any) {

    return (
        <div className="">
            <h2>Users List</h2>
            <UserList className="mt-3">
                {props?.users?.length 
                ? props?.users?.map((person: any) => (
                    <li key={person.email} className="card bg-white flex justify-between gap-x-6 p-4">
                        <div className="flex min-w-0 gap-x-4">
                            <div className="min-w-0 flex-auto">
                                <Link href={`/users/${person.id}`} className="text-sm font-semibold leading-6 text-gray-900">{person?.name}</Link>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person?.email}</p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900">{person?.website}</p>
                            <p className="mt-1 text-xs leading-5 text-gray-500">{person?.phone}</p>
                        </div>
                    </li>
                ))
                : null}
            </UserList>
        </div>
    )
}

export const getServerSideProps = (async () => {
    const res = await fetch(`${Config.API_URL}/users`)
    const users = await res.json()
    return { props: { users } }
})