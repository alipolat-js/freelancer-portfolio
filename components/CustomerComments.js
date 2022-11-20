import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'
import Flickity from 'react-flickity-component'
import { getCustomerComments } from '../getData';

const CustomerComments = () => {
  // create data state for comments
  const [data, setdata] = useState([])

  // get comments from graphcms
  useEffect(() => {
    const getComments = async () => {
      const comments = await getCustomerComments();
      setdata(comments)
    }

    getComments()

  }, [])

  if (data.length !== 0) {
    // Flickity Options for Carousel
    var flickityOptions = {
      pageDots: false,
      wrapAround: true,
      draggable: true,
      autoPlay: 10000,
      prevNextButtons: false,
    }
  }

  return (
    <div className='container px-8 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <h3 className='text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold tracking-widest text-theme-text mb-8'>
            HAPPY  <br />
            CUSTOMERS
          </h3>

          <p className='text-xl sm:text-3xl font-bold mb-8'>
            What my customers say about me
          </p>

          <Link to="contact" className='hidden md:block cursor-pointer text-theme-pale-gray-on-dark hover:text-white text-xl font-bold'>
            Contact me to get services<i className="fa-solid fa-arrow-down ml-4"></i>
          </Link>
        </div>

        {
          data.length !== 0 &&
          <Flickity
            className={'text-center overflow-x-hidden'}
            options={flickityOptions}
            static
            reloadOnUpdate
          >
            {data.map((comment, index) => (
              <div key={index} className="w-full cursor-pointer lg:mt-5 xl:mt-8 px-2">
                <p className="text-lg text-theme-pale-gray-on-dark">
                  {comment.customerComment}
                </p>
                <p className="text-lg md:text-xl font-bold font-montserrat mt-4">
                  {comment.customerName}
                </p>
                <p className="font-bold font-montserrat text-theme-pale-gray-on-dark">
                  {comment.customerPositionAndCompany}
                </p>
              </div>
            ))}
          </Flickity>
        }

      </div>
    </div>
  )
}

export default CustomerComments