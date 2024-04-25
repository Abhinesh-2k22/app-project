import React from "react";

import up from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/Beverages/7up.jpeg'
import coke from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/Beverages/coke.webp'
import fanta from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/Beverages/fanta.webp'
import pepsi from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/Beverages/pepsi.jpeg'
import slice from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/Beverages/slice.jpeg'
import sprite from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/Beverages/sprite.webp'
const products = [
    {
      id: 1,
      name: '7Up',
      href: '#',
      price: '₹10',
      imageSrc:up,
      imageAlt: '7Up',
    },
    {
      id: 2,
      name: 'Coke',
      href: '#',
      price: '₹15',
      imageSrc:coke,
      imageAlt: 'Coke',
    },
    {
      id: 3,
      name: 'Fanta',
      href: '#',
      price: '₹20',
      imageSrc:fanta,
      imageAlt: 'Fanta',
    },
    {
      id: 4,
      name: 'Pepsi',
      href: '#',
      price: '₹18',
      imageSrc:pepsi,
      imageAlt: 'Pepsi',
    },
    {
        id: 5,
        name: 'Slice',
        href: '#',
        price: '₹18',
        imageSrc:slice,
        imageAlt: 'Slice',
      },
      {
        id: 6,
        name: 'Sprite',
        href: '#',
        price: '₹25',
        imageSrc:sprite,
        imageAlt: 'Sprite',
      },

   
  ]



function Beverages(){
    return(
    
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Beverages</h2>
  
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
      )
}

export default Beverages