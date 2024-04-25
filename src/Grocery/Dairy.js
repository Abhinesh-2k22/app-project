import React from "react";
import milk from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/Dairy/milk.jpeg'
import cheese from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/Dairy/cheese.jpeg'
import butter from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/Dairy/butter.avif'
import bread from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/Dairy/bread.jpeg'
import paneer from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/Dairy/paneer.jpeg'
import freshc from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/Dairy/freshcream.jpeg'
const products = [
    {
      id: 1,
      name: 'Milk',
      href: '#',
      price: '₹10',
      imageSrc:milk,
      imageAlt: 'Milk',
    },
    {
      id: 2,
      name: 'Cheese',
      href: '#',
      price: '₹15',
      imageSrc:cheese,
      imageAlt: 'cheese',
    },
    {
      id: 3,
      name: 'Butter',
      href: '#',
      price: '₹20',
      imageSrc:butter,
      imageAlt: 'butter',
    },
    {
      id: 4,
      name: 'Bread',
      href: '#',
      price: '₹18',
      imageSrc:bread,
      imageAlt: 'Bread',
    },
    {
        id: 5,
        name: 'Paneer',
        href: '#',
        price: '₹18',
        imageSrc:paneer,
        imageAlt: 'Paneer',
      },
      {
        id: 6,
        name: 'Fresh cream',
        href: '#',
        price: '₹25',
        imageSrc:freshc,
        imageAlt: 'Freshcream',
      },

   
  ]



function Dairy()
{
    return(
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Dairy Products</h2>
  
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
export default Dairy