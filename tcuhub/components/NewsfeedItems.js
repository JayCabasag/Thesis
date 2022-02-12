import { ChevronDownIcon, HomeIcon, PencilAltIcon, PhotographIcon, VideoCameraIcon } from '@heroicons/react/solid'
import React from 'react'
import PostItems from './PostItems'
import UserPost from './UserPost'

function NewsfeedItems() {

  const afterPostItemClick = () => {
    alert()
  }

  return (
    <section className='w-full overflow-y-auto no-scrollbar'>
        <div className='h-28 bg-white shadow rounded w-screen md:w-full'>
            <div>
                <h1 className='p-4 font-medium text-slate-500'>Post Now -</h1>
            </div>
            <div className='grid grid-cols-3 space-x-2 mx-3'>
                <PostItems Icon={PencilAltIcon} title={"Post"}/>
                <PostItems Icon={PhotographIcon} title={"Image"}/>
                <PostItems Icon={VideoCameraIcon} title={"Video"}/>
            </div>
            
        </div>

        <div className='grid grid-cols-2 h-auto bg-white shadow rounded w-screen md:w-full mt-1'>
            <div className='flex float-left'>
                <h1 className='p-4 font-medium text-slate-500 text-sm'>Home</h1>
            </div>
            <div className='flex p-4 justify-end'>
                <h1 className='font-medium text-slate-500 text-sm'>Hot</h1>
                <ChevronDownIcon className='h-6 font-medium text-slate-500'/>
            </div>
        </div>

        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />


    </section>
  )
}

export default NewsfeedItems