import React from "react";
import catfood from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/petproducts/cat-food.webp'
import comb from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/petproducts/comb.jpeg'
import dogshamp from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/petproducts/dog-shampoo.jpeg'
import dogfood from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/petproducts/dogfood.jpeg'
import litersand from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/petproducts/litter-sand.webp'
import literbox from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/petproducts/littter-box.jpeg'
const products = [
    {
      id: 1,
      name: 'Catfood',
      href: '#',
      price: '₹10',
      imageSrc:catfood,
      imageAlt: 'Catfood',
    },
    {
      id: 2,
      name: 'Comb',
      href: '#',
      price: '₹15',
      imageSrc:comb,
      imageAlt: 'Comb',
    },
    {
      id: 3,
      name: 'Dogshampoo',
      href: '#',
      price: '₹20',
      imageSrc:dogshamp,
      imageAlt: 'Dogshampoo',
    },
    {
      id: 4,
      name: 'Dogfood',
      href: '#',
      price: '₹18',
      imageSrc:dogfood,
      imageAlt: 'Dogfood',
    },
    {
        id: 5,
        name: 'Litersand',
        href: '#',
        price: '₹18',
        imageSrc:litersand,
        imageAlt: 'Litersand',
      },
      {
        id: 6,
        name: 'Literbox',
        href: '#',
        price: '₹25',
        imageSrc:literbox,
        imageAlt: 'Literbox',
      },

   
  ]



function Petproducts(){
    return(
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Pet products</h2>
  
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

export default Petproducts