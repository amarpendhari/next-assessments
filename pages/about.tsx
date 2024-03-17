import { useEffect, useState } from "react"
import { validateForm } from "@/utils/helper";
import styled from "styled-components";
import TextInput from "@/components/common/inputText";
import TextArea from "@/components/common/textArea";

const AboutPageWrapper = styled.div`
    max-width: 500px;
    margin: auto;
`

const AboutPage = () => {

    const formOG = {
        name: '',
        email: '',
        message: ''
    }
    const formValidation = {
        name: '',
        email: 'email',
        message: ''
    }
    const [form, setForm] = useState(formOG)
    const [error, setError] = useState<any>({})
    const [showError, setShowError] = useState(false)

    const handleChange = (e: any) => {
        const { name, value } = e?.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setShowError(true)
        pageFormValidation()
    }

    const pageFormValidation = async () => {
        const result = await validateForm(form, formValidation, [])
        if(result === true) {
            console.log('formasmdamsdmasd', form)
        } else {
            setError(result)
        }
    }

    useEffect(() => {
        if (showError) pageFormValidation()
    }, [form])

    return (
        <AboutPageWrapper>
                <h2>About Page</h2>
                <form onSubmit={handleSubmit}>
                    <TextInput value={form?.name} label={`Name`} placeholder={`Enter Name`} name={`name`} onChange={handleChange} error={error?.name} />
                    <TextInput value={form?.email} label={`Email`} placeholder={`Enter Email`} name={`email`} onChange={handleChange} error={error?.email} />
                    <TextArea value={form?.message} label={`Message`} placeholder={`Enter Message`} name={`message`} onChange={handleChange} error={error?.message} />
                    <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Subimit
                    </button>
                </form>
        </AboutPageWrapper>
    )
}

export default AboutPage