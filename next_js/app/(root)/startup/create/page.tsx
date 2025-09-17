import StartupForm from '@/app/components/StartupForm'
import React from 'react'

const page = () => {
    return (
        <>
            <section className='red-container !min-h-[230px]'>
                <h1 className='heading'>Submit Your Startup Idea</h1>
            </section>
            <StartupForm />
        </>
    )
}

export default page