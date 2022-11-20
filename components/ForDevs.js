import React from 'react'
import İmage from 'next/image'

const ForDevs = () => {
  return (
    <div className='py-24'>
      <div className='container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <İmage src='/assets/dev.svg' alt='Developer' width={350} height={350} className="mx-auto my-auto" />

        <div>
          <h3 className='text-4xl text-theme-text font-bold mb-4'>
            Are you a developer?
          </h3>

          <p className='text-lg text-theme-pale-gray-on-dark mb-4 max-w-3xl'>
            I develop open source projects that may be of interest to you and create informative content for you.
            Maybe you want to visit <a
              className='text-theme-text font-bold hover:underline'
              href='https://blog.alipolat.tech'
              target='_blank'
              rel='noopener noreferrer'
              title="Ali Polat's Blog"
            >
              blog.alipolat.tech
            </a>
          </p>

          <p className='text-lg text-theme-pale-gray-on-dark mb-4 max-w-3xl'>
            You can also visit my Github profile to see my open source projects.
          </p>

          <a
            className='text-lg rounded-full font-mono'
            href='https://github.com/alipolat-js'
            target='_blank'
            rel='noopener noreferrer'
            title="Ali Polat's Github"
          >
            <i className='fab fa-github mr-3'></i>
            alipolat-js
          </a>
        </div>
      </div>
    </div>
  )
}

export default ForDevs