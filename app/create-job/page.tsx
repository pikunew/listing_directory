import React from 'react'
import CreateJobClient from './client'

export default function page() {
  return (
    <div>
        <div className='container py-12'>
            <h1 className='text-[4rem]'>Contribute Helpline Numbers</h1>
        </div>
        <CreateJobClient/>
    </div>
  )
}
