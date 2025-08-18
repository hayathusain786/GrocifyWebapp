import React from 'react'
import { FaStar } from 'react-icons/fa'


const TestimonialCard = ({profile,name,profession,review,rating}) => {
  return (
    <div className='bg-card rounded-lg'>
        {/* customer info  */}
        <div className='flex items-center gap-3 px-6 py-6'>
            {/* photo */}
            <div className='w-16 h-16 rounded-full bg-white'>
                <img src={profile} alt="Profile" className='w-fit object-contain rounded-full p-[2px] border-2 border-secondary' />
                
            </div>
            {/* Info */}
            <div>
                <h1 className='text-lg font-semibold'>{name}</h1>
                <p className='text-[14px] text-text-grey'>{profession}</p>
                <span className='flex text-accent'>
                    {Array.from({length:rating},(_,index)=>(
                        <FaStar key={index}/>
                    ))}
                </span>
            </div>
        </div>
        {/* review  */}
        <div>
            <p className='text-text-grey px-6 pb-6'>{review}</p>
        </div>
    </div>
  )
}

export default TestimonialCard