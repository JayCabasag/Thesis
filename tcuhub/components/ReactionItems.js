import React from 'react'

function ReactionItems({Icon, title}) {
  return (
    <div className='flex justify-center py-3 space-x-1'>
        <Icon className="h-5 text-center text-slate-400  md:h-6"/>
        <p className="text-slate-400 text-xs md:text-sm pt-0.5">{title}</p>

    </div>
  )
}

export default ReactionItems;