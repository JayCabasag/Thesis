import Image from 'next/image'
import React from 'react'

function RecommendedUserListItems({UserImage, Name, Icon}) {
  return (
    <div className='flex h-max'>
        <div className='h-8 w-8 rounded-full border-1'>
            <Image
                src={UserImage}
                width={50}
                height={50}
                layout="intrinsic"
                className='rounded-full'
            />
        </div>
        
         <div className='grid grid-cols-2 w-full  items-center pl-2'>
             <div>
                <h1 className='text-normal'>{Name}</h1>
             </div>
             <div className='w-full h-6 bg-white items-end pr-10'>
                <Icon className="float-right h-6 cursor-pointer "/>
             </div>
         </div>
    </div>
  )
}

export default RecommendedUserListItems