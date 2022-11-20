import React from 'react'
import İmage from 'next/image'

const Contact = () => {
  return (
    <div className='py-10'>
      <div className='text-center md:text-start max-w-xl mx-auto'>
          <h3 className='text-center text-4xl sm:text-6xl md:text-5xl lg:text-7xl font-montserrat font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-theme-text via-sky-200 to-theme-text'>
            LET&apos;S <br /> WORK <br /> TOGETHER
          </h3>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-center mt-8 mb-8 sm:mb-0'>
            <div className='hover:scale-110 duration-300'>
              <div className='flex items-center justify-center h-[70px] sm:h-[100px]'>
                <İmage src='/assets/direction.svg' alt='Kahramanmaraş, Turkey' width={60} height={60} className="w-[40px] sm:w-[60px]" />
              </div>

              <p className='text-lg text-theme-pale-gray-on-dark'>Kahramanmaraş <br /> Turkey</p>
            </div>

            <div className='hover:scale-110 duration-300'>
              <div className='flex items-center justify-center h-[70px] sm:h-[100px]'>
                <İmage src='/assets/email.svg' alt='Email' width={60} height={60} className="w-[40px] sm:w-[60px]" />
              </div>

              <a
                href='mailto:business@alipolat.tech'
                target="_blank"
                rel="noopener noreferrer"
                title='business@alipolat.tech'
                className='block text-theme-pale-gray-on-dark hover:text-theme-text duration-300'
              >
                business@alipolat.tech
              </a>

              <a
                href='mailto:contact@alipolat.tech'
                target="_blank"
                rel="noopener noreferrer"
                title='contact@alipolat.tech'
                className='block text-theme-pale-gray-on-dark hover:text-theme-text duration-300 mt-1'
              >
                contact@alipolat.tech
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact