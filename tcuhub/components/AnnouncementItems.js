import Image from 'next/image'
import React from 'react'

function AnnouncementItems() {
  return (
    <div className='bg-white p-2 rounded shadow h-max'>
      <div >
        <h1 className='font-semibold text-slate-500 py-1'>Announcements</h1>
        <Image
           src="/naturePhoto.webp" 
           alt="TCU hub logo (Customized by devs)" 
           width={750} 
           height={500} 
           layout='responsive'
        />
      </div>
      <div className='p-2'> 
        <h1 className='font-semibold text-slate-500 py-1 text-sm pl-3'>Official Announcements</h1>
        <ul className='list-disc pl-10 text-slate-500'>
            <li className='font-normal text-xs'>Tcu hub topics</li>
            <li className='font-normal text-xs'>Tcu hub topics</li>
            <li className='font-normal text-xs'>Tcu hub topics</li>
        </ul>
      </div>
    </div>
  )
}

export default AnnouncementItems