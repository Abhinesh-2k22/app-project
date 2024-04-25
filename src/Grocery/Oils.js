import React from "react";

const products = [
    {
      id: 1,
      name: 'Sunflower oil',
      href: '#',
      price: '₹10',
      imageSrc:'/Groceryimg/oils/sunflower oil.webp',
      imageAlt: 'sunflower oil',
    },
    {
      id: 2,
      name: 'Coconut oil',
      href: '#',
      price: '₹15',
      imageSrc:'/Groceryimg/oils/coconutoil.webp',
      imageAlt: 'Coconut oil',
    },
    {
      id: 3,
      name: 'Groundnut oil',
      href: '#',
      price: '₹20',
      imageSrc:'/Groceryimg/oils/groundnut-oil.jpg',
      imageAlt: 'Groundnut oil',
    },
    {
      id: 4,
      name: 'Olive oil',
      href: '#',
      price: '₹18',
      imageSrc:'/Groceryimg/oils/oliveoil.webp',
      imageAlt: 'Olive oil',
    },
    {
        id: 5,
        name: 'Sesame oil',
        href: '#',
        price: '₹18',
        imageSrc:'/Groceryimg/oils/sesame-oil-.jpeg',
        imageAlt: 'Sesame oil',
      },
      {
        id: 6,
        name: 'Castor oil',
        href: '#',
        price: '₹25',
        imageSrc:'/Groceryimg/oils/Castor-oil.jpeg',
        imageAlt: 'Castor oil',
      },

   
  ]



function Oils()
{
    return(
      <div >
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Oils</h2>
  
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
export default Oils