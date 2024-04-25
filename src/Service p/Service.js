import React from 'react'
import { FaStar } from "react-icons/fa6";

const products = [
    {
      id: 1,
      name: 'Mechanic',
      href: '#',
      imageSrc: '/service/m1.jpeg',
      imageAlt: "Mechanic",
      n:"Lawrence",
      a:'27',
      p:'948389489',
      rating: '4.5',
      
    
    },{
      id: 2,
      name: 'Mechanic',
      href: '#',
      imageSrc: '/service/m2.jpeg',
      imageAlt: "Mechanic",
      n:"Nelson",
      a:'32',
      p:'9856473879',
      rating: '4.6',
    
      
    },{
      id: 3,
      name: 'Electrician',
      href: '#',
      imageSrc: '/service/e1.jpeg',
      imageAlt: "Electrician",
      n:"Christopher",
      a:'28',
      p:'9578456739',
      rating: '4.0',
     
     
    },{
      id: 4,
      name: 'Electrician',
      href: '#',
      imageSrc: '/service/e2.jpeg',
      imageAlt: "Electrician",
      n:"Kumar",
      a:'52',
      p:'7895647839',
      rating: '3.5',
     
    },{
      id: 5,
      name: 'Carpenter',
      href: '#',
      imageSrc: '/service/c1.jpeg',
      imageAlt: "Electrician",
      n:"David",
      a:'31',
      p:'8675475879',
      rating: '3.8',
     
    },{
      id: 6,
      name: 'Carpenter',
      href: '#',
      imageSrc: '/service/c2.jpeg',
      imageAlt: "Carpenter",
      n:"Rahul",
      a:'25',
      p:'8756483549',
      rating: '4.1',
    
    },{
      id: 7,
      name: 'Plumber',
      href: '#',
      imageSrc: '/service/p1.jpeg',
      imageAlt: "Plumber",
      n:"Amal raj",
      a:'28',
      p:'9567483569',
      rating: '4.2',
     
    },{
      id: 8,
      name: 'Plumber',
      href: '#',
      imageSrc: '/service/p2.jpeg',
      imageAlt: "Plumber",
      n:"Mani",
      a:'30',
      p:'8769456789',
      rating: '4.8',
     
    },
  ]

function Service() {
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-7xl font-bold tracking-tight text-gray-900 text-center mt-0"data-aos="fade-down">Service is the heartbeat of humanity's connection.</h2>
      <p className='text-center font-light p-10 text-3xl'data-aos="zoom-in"> It's not just about what we do, but how we make others feel in the process.</p>
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
                               
                <p className="mt-1 text-sm text-gray-500"><span className='text-black-500 font-bold'>Name - </span><span className='font-bold'>{product.n}</span> </p>
                <p className="mt-1 text-sm text-gray-500"><span className='text-black-500 font-bold'>Age - </span><span className='font-bold'>{product.a}</span></p>
                <p className="mt-1 text-sm text-gray-500"><span className='text-black-500 font-bold'>Contact - </span><span className='font-bold'>{product.p}</span></p>

              <p className="mt-1 flex space-x-2 bg-green-500  rounded-2xl mr-20 min-w-16 max-w-16 "><FaStar color='yellow' className='pt-1 shadow-2xl' /><div>{product.rating} </div></p>  
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Service