import React from 'react'
import LeafIcon from './LeafIcon'

const Slogan = ({title}) => {
    return (
        <div className='flex gap-x-2 items-center'>
            <img src="../../public/botanical-leaf.png" alt="botanical-leaf" className='w-16 rotate-24' />
            <span className=' max-w-[24ch]'>{title}</span>
            <img src="../../public/botanical-leaf.png" alt="botanical-leaf"  className='w-16 -rotate-153' />
        </div>
    )
}

export default Slogan