import React from 'react'

const Footer = () => {
  return (
    <section className='flex flex-col md:flex-row gap-3 items-center justify-around w-full py-4 border-t-1 border-gray-300 text-sm text-a-dark'>
         <p>Copyright © 2025 Grocefy. All rights reservered.</p>
    <div className="flex items-center gap-4">
        <a href="#" className="hover:text-secondary transition-all">
            Contact Us
        </a>
        <div className="h-8 w-px bg-white/20"></div>
        <a href="#" className="hover:text-secondary transition-all">
            Privacy Policy
        </a>
        <div className="h-8 w-px bg-white/20"></div>
        <a href="#" className="hover:text-secondary transition-all">
            Trademark Policy
        </a>
    </div>
    </section>
  )
}

export default Footer