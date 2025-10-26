import React from 'react'

const Title = ({title, description}) => {
  return (
    <div className='text-center mt-6 text-slate-700'>
        <h2 className='text-4xl sm:text-4xl font-medium'>{title}</h2>
        <p className='max-sm max-w-2x1 mt-4 text-slate-500'>{description}</p>
    </div>
  )
}

export default Title