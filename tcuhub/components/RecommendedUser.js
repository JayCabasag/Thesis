import { PlusCircleIcon } from '@heroicons/react/outline';
import React from 'react'
import RecommendedUserListItems from './RecommendedUserListItems';

function RecommendedUser() {
  return (
    <div className='bg-white p-2 rounded shadow h-max'>
      <div >
        <h1 className='font-semibold text-slate-500 py-1'>Recommended Users</h1>
      </div>
      <div className='p-2'> 
        <ul className='pl-10 text-slate-500'>
            <li className='text-sm font-semibold space-y-1'>
                <RecommendedUserListItems UserImage={"/aqua.jpg"} Name={"John Doe"} Icon={PlusCircleIcon} />
                <RecommendedUserListItems UserImage={"/aqua.jpg"} Name={"Jason Mars"} Icon={PlusCircleIcon} />
                <RecommendedUserListItems UserImage={"/aqua.jpg"} Name={"Justin Beiber"} Icon={PlusCircleIcon} />
            
            </li>
        </ul>
      </div>
    </div>
  )
}

export default RecommendedUser;