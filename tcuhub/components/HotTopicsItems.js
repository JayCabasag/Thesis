import React from 'react'
import HotTopicListItems from './HotTopicListItems'

function HotTopicsItems() {
  return (
    <div className='bg-white p-2 rounded shadow h-max'>
      <div >
        <h1 className='font-semibold text-slate-500 py-1'>Hot Topics</h1>
      </div>
      <div className='p-2'> 
        <ul className='pl-10 text-slate-500'>
            <li className='text-sm font-semibold'>
              <HotTopicListItems Topic={"#TCUScholarships"} TotalTick={"3.4k Browse / 5.6k Discussion"}/>
              <HotTopicListItems Topic={"#TCUWalangPasok"} TotalTick={"2.4k Browse / 4.6k Discussion"}/>
              <HotTopicListItems Topic={"#TCUPandemicUpdate"} TotalTick={"1.4k Browse / 5.0k Discussion"}/>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default HotTopicsItems