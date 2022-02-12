import React from 'react'

function HotTopicListItems({Topic, TotalTick}) {
  return (
    <div>
        <h1 className=''>{Topic}</h1>
        <p className='text-xs  font-normal'>{TotalTick}</p>
    </div>
  )
}

export default HotTopicListItems