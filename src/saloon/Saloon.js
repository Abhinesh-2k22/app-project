import React from 'react'
import { FaStar } from "react-icons/fa6";

const products = [
    {
      id: 1,
      name: 'Fairy Professional salon',
      href: '/Saloon-popup',
      imageSrc: '/salon/1.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      rating: '4.5',
      prof:'Makeup Artist',
      open:"9am",
      close:"9pm",
    },{
      id: 2,
      name: 'Spark Salon & Spa',
      href: '/Saloon-popup',
      imageSrc: '/salon/2.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      rating: '4.5',
      prof:'Makeup Artist',
      open:"9am",
      close:"9pm",
    },{
      id: 3,
      name: 'Green Trends',
      href: '/Saloon-popup',
      imageSrc: '/salon/3.jpeg',
      imageAlt: "Front of men's Basic Tee in black.",
      rating: '4.5',
      prof:'Makeup Artist',
      open:"9am",
      close:"9pm",
    },{
      id: 4,
      name: 'COCO UNISEX SALON',
      href: '/Saloon-popup',
      imageSrc: '/salon/4.jpeg',
      imageAlt: "Front of men's Basic Tee in black.",
      rating: '4.5',
      prof:'Makeup Artist',
      open:"9am",
      close:"9pm",
    },{
      id: 5,
      name: 'Bella é Bello',
      href: '/Saloon-popup',
      imageSrc: '/salon/5.jpeg',
      imageAlt: "Front of men's Basic Tee in black.",
      rating: '4.5',
      prof:'Makeup Artist',
      open:"9am",
      close:"9pm",
    },{
      id: 6,
      name: 'Natchatra Beauty Parlour',
      href: '/Saloon-popup',
      imageSrc: '/salon/6.jpeg',
      imageAlt: "Front of men's Basic Tee in black.",
      rating: '4.5',
      prof:'Makeup Artist',
      open:"9am",
      close:"9pm",
    },{
      id: 7,
      name: 'KRISHNA HAIR LINES',
      href: '/Saloon-popup',
      imageSrc: '/salon/7.jpeg',
      imageAlt: "Front of men's Basic Tee in black.",
      rating: '4.5',
      prof:'Makeup Artist',
      open:"9am",
      close:"9pm",
    },{
      id: 8,
      name: 'Whitecraft Luxury Salon',
      href: '/Saloon-popup',
      imageSrc: '/salon/8.jpeg',
      imageAlt: "Front of men's Basic Tee in black.",
      rating: '4.5',
      prof:'Makeup Artist',
      open:"9am",
      close:"9pm",
    },
  ]

function saloon() {
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-7xl font-bold tracking-tight text-gray-900 text-center mt-0"data-aos="fade-down">Book your style session now and let your looks lead the way!</h2>
      <p className='text-center font-light p-10 text-3xl'data-aos="zoom-in">We make it easy to find your perfect fit with over a million available option</p>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="drop-shadow-md aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                data-aos="zoom-out-up"
              />
            </div>
            <div className="mt-4 flex">
              <div>
                <h3 className="text-2xl py-2 text-gray-700 ">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0 mb-5" />
                    {product.name}
                  </a>
                </h3>
                
              <p className="flex space-x-2 bg-green-500  rounded-2xl mr-20 min-w-16 max-w-16  text-black font-semibold"><FaStar color='yellow' className='pt-1 shadow-2xl' /><div>{product.rating} </div></p>                 
                <p className="mt-1 text-sm text-gray-500"><span className='text-blue-500 font-bold'>Open - </span><span className='font-bold'>{product.open}</span> </p>
                <p className="mt-1 text-sm text-gray-500"><span className='text-red-500 font-bold'>Close - </span><span className='font-bold'>{product.close}</span></p>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default saloon
