import Header from "./header"
import styled from "styled-components"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const AppWrapper = styled.main`
    width: 100%;
    font-size: 16px;
`
const AppContent = styled.main`
    padding: 1rem;
`

const AppLayout = (props: any) => {

    const { children } = props 

    return (
        <AppWrapper className={`min-h-screen bg-gray-200 ${inter.className}`}>
            <Header />
            <AppContent>
                {children}
            </AppContent>
        </AppWrapper>
    )
}

export default AppLayout