import Link from 'next/link'
import React from 'react'

const Error = () => {
    return (
        <div>
            <h1 className='text-[36px] font-semibold text-center p-7'>
                 404<span className='text-red-600'> ERROR</span> . this page is not exist
            </h1>
            <p className='text-center  underline text-blue-600'> <Link href="/">go to home page</Link></p>
           
        </div>
    )
}

export default Error