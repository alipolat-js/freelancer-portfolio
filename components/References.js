import React, { useEffect, useState } from 'react';
import İmage from 'next/image'
import Flickity from 'react-flickity-component'
import { getReferences } from '../getData';

const References = () => {
  const [groupcells, setgroupcells] = useState()

  // create data state for comments
  const [data, setdata] = useState([])

  // get comments from graphcms
  useEffect(() => {
    const getData = async () => {
      const references = await getReferences();
      setdata(references)
    }

    getData()

    // get window size and set groupcells
    function getWindowSize() {
      const { innerWidth, innerHeight } = window;

      // switch case groupcells
      switch (true) {
        case innerWidth > 639:
          setgroupcells(3)
          break;
        case innerWidth > 1023:
          setgroupcells(5)
          break;
        default:
          setgroupcells(1)
          break;
      }
    }

    getWindowSize();
  }, [])

  if (groupcells !== undefined) {
    // Flickity Options for Carousel
    var flickityOptions = {
      pageDots: false,
      wrapAround: false,
      groupCells: groupcells,
      draggable: true,
      autoPlay: 5000,
      prevNextButtons: false,
    }
  }
  
  return (
    <div className='pb-20 pt-40'>
      <div className='container mx-auto px-8 text-center'>
        <h2 className='text-3xl sm:text-4xl font-extrabold mb-6 text-theme-text tracking-wide font-montserrat'>
          INSPIRING PARTNERSHIPS FOR THE FUTURE
        </h2>

        <p className='text-xl text-theme-pale-gray-on-dark mb-8'>
          I have worked with many companies and individuals. Here are some of them.
        </p>

        {groupcells !== undefined &&
          <Flickity
            className={'text-center overflow-x-hidden max-w-5xl mx-auto'}
            options={flickityOptions}
            static
            reloadOnUpdate
          >
            {data.map((reference, index) => (
              <a
                href={reference.website}
                rel='noopener noreferrer'
                target="_blank"
                title={reference.companyName}
                key={index}
                className='mb-8 my-4 flex  items-center justify-center w-full sm:w-1/3 lg:w-1/5'
              >
                <İmage src={reference.logo.url} alt={`${reference.services} services for ${reference.companyName}`} width={184} height={75} className="scale-95 hover:scale-100 duration-300" />
              </a>
            ))}
          </Flickity>
        }
      </div>
    </div>
  )
}

export default References