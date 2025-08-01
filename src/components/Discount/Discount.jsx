import React from 'react'

const Discount = ({discount='20'}) => {
  return (
    <section className='bg-card md:bg-[url(../src/assets/images/fresh-fruits.png)] md:bg-contain bg-cover bg-no-repeat bg-right'>
        <div className='flex items-center mt-3 mb-3'>
            <div>
            <h1 className='lg:text-8xl md:text-6xl text-3xl text-secondary -rotate-90 font-semibold'>{discount}%</h1>
            </div>
            {/* Content  */}
            <div className='py-3 pr-3'>
                <h1 className='lg:text-6xl md:text-4xl text-md font-semibold'>First Order<br/> Discount!</h1>
                <p className='py-3 md:w-1/2 text-text-grey lg:text-md md:text-[14px] text-[8px]'>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.</p>
                <button className='btn-primary md:text-lg text-[10px]'>Get a Discount</button>
            </div>
        </div>
    </section>
  )
}

export default Discount