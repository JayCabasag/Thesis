import { AnnotationIcon, HeartIcon, ShareIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react'
import ReactionItems from './ReactionItems';

function UserPost() {
  return (
     <div className=''>
         <div className='h-auto w-auto bg-white mt-2 p-4 rounded'>
             <div className='flex'>         
                    <Image 
                            className='rounded-full'
                            src="/aqua.jpg" 
                            alt="TCU hub logo (Customized by devs)" 
                            width={50} 
                            height={50} 
                            layout='intrinsic'
                    />
                    <div className=''>
                        <div className='flex mt-1'>
                            <p className='text-left text-sm font-semibold text-slate-500 pl-2'>John Doe </p>
                            
                        </div>
                        <div className='flex'>
                            <p className='text-left text-xs font-light text-slate-500 pl-2'>2 mins ago - Year and Section :</p>
                        </div>
                    </div>
                   
             </div>
             <div className='py-2 text-left text-xs md:text-md text-slate-600 font-normal'>
                 <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloremque, voluptate placeat eius soluta illum dolorem laboriosam provident id temporibus molestias quas exercitationem. Ipsum quod mollitia repudiandae doloribus nihil repellat!</p>
                 
             </div>
             <div className='py-2 text-left text-xs md:text-md text-blue-600 font-normal'>
                 <ul className='flex space-x-2'>
                     <li>#nature</li>
                     <li>#river</li>
                     <li>#mountain</li>
                     <li>#relax</li>

                 </ul> 
             </div>
             <div>
                <Image 
                    src="/naturePhoto.webp" 
                    alt="TCU hub logo (Customized by devs)" 
                    width={750} 
                    height={500} 
                    layout='responsive'
                />

             </div>
             <div className='container grid grid-cols-3 '>
                <ReactionItems Icon={HeartIcon} title={"Heart"}/>
                <ReactionItems Icon={AnnotationIcon} title={"Comment"}/>
                <ReactionItems Icon={ShareIcon} title={"Share"}/>
             </div>
       
            
         </div>
         {/* /reaction container */}
         
    </div>
    
  )
}

export default UserPost;