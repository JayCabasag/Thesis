import { ChevronDownIcon } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'
import React from 'react'
import UserPost from './UserPost'

function MainEventsItems() {
  return (
    <section className='w-full overflow-y-auto no-scrollbar'>
        <div className='grid grid-cols-2 h-auto bg-white shadow rounded w-screen md:w-full mt-1'>
            <div className='flex float-left'>
                <h1 className='p-4 font-medium text-slate-500 text-sm'>Events</h1>
            </div>
            <div className='flex p-4 justify-end'>
                <h1 className='font-medium text-slate-500 text-sm'>Latest</h1>
                <ChevronDownIcon className='h-5 font-medium text-slate-500'/>
            </div>
        </div>

        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />




    </section>
  )
}

export default MainEventsItems