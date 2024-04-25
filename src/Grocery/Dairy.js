import React from "react";

const products = [
    {
      id: 1,
      name: 'Milk',
      href: '#',
      price: '₹35',
      imageSrc:'/Groceryimg/Dairy/milk.jpeg',
      imageAlt: 'Milk',
    },
    {
      id: 2,
      name: 'Cheese',
      href: '#',
      price: '₹90',
      imageSrc:'/Groceryimg/Dairy/cheese.jpeg',
      imageAlt: 'cheese',
    },
    {
      id: 3,
      name: 'Butter',
      href: '#',
      price: '₹50',
      imageSrc:'/Groceryimg/Dairy/butter.avif',
      imageAlt: 'butter',
    },
    {
      id: 4,
      name: 'Bread',
      href: '#',
      price: '₹20',
      imageSrc:'/Groceryimg/Dairy/bread.jpeg',
      imageAlt: 'Bread',
    },
    {
        id: 5,
        name: 'Paneer',
        href: '#',
        price: '₹100',
        imageSrc:'/Groceryimg/Dairy/paneer.jpeg',
        imageAlt: 'Paneer',
      },
      {
        id: 6,
        name: 'Fresh cream',
        href: '#',
        price: '₹150',
        imageSrc:'/Groceryimg/Dairy/freshcream.jpeg',
        imageAlt: 'Freshcream',
      },

   
  ]



function Dairy()
{
    return(
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Dairy Products</h2>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 text-center mt-0"data-aos="fade-down">Dairy: where every creamy sip tells a story  and the wholesome goodness it brings to our lives.</h2>
          <p className='text-center font-light p-10 text-3xl'data-aos="zoom-in"> Farm fresh.</p>
          
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>

    )
}
export default Dairy