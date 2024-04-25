import React from "react";
import done from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/fruits/apple .jpeg'
import banana from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/fruits/banana.jpeg'
import mango from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/fruits/mango.webp'
import carrot from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/fruits/carrot.webp'
import onion from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/fruits/onion.jpeg'
import tomato from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/fruits/tomato.jpeg'
const products = [
    {
      id: 1,
      name: 'APPLE',
      href: '#',
      imageSrc:done,
      imageAlt: "Apple",
      price: '₹5',
      
    },
    {
      id: 2,
      name: 'Banana',
      href: '#',
      imageSrc:banana,
      imageAlt: "Banana",
      price: '₹3',

    },
    {
        id: 3,
        name: 'Mango',
        href: '#',
        imageSrc:mango,
        imageAlt: "Mango",
        price: '₹6',
  
    },
    {
        id: 4,
        name: 'Carrot',
        href: '#',
        imageSrc:carrot,
        imageAlt: "carrot",
        price: '₹4',

    },
    {
        id: 5,
        name: 'Onion',
        href: '#',
        imageSrc:onion,
        imageAlt: "Onion",
        price: '₹4',
    },
    {
        id: 6,
        name: 'Tomato',
        href: '#',
        imageSrc:tomato,
        imageAlt: "Tomato",
        price: '₹2',

    }

    
  ]
  
 function Fruits(){
    return(
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Fruits and Vegetables</h2>
  
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
export default Fruits
