import React from 'react'
import LeafIcon from './LeafIcon'

const Slogan = () => {
    return (
        <div className='flex gap-x-2 items-center'>
            <img src="../../public/botanical-leaf.png" alt="botanical-leaf" className='w-16 rotate-24' />
            <span className=' max-w-[24ch]'>Tough stains? We'll make your clothes flawless!</span>
            <img src="../../public/botanical-leaf.png" alt="botanical-leaf"  className='w-16 -rotate-153' />
        </div>
    )
}

export default Slogan