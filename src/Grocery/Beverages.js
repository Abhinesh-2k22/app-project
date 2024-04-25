import React from "react";


const products = [
    {
      id: 1,
      name: '7Up',
      href: '#',
      price: '₹40',
      imageSrc:'/Groceryimg/Beverages/7up.jpeg',
      imageAlt: '7Up',
    },
    {
      id: 2,
      name: 'Coke',
      href: '#',
      price: '₹40',
      imageSrc:'/Groceryimg/Beverages/coke.webp',
      imageAlt: 'Coke',
    },
    {
      id: 3,
      name: 'Fanta',
      href: '#',
      price: '₹35',
      imageSrc:'/Groceryimg/Beverages/fanta.webp',
      imageAlt: 'Fanta',
    },
    {
      id: 4,
      name: 'Pepsi',
      href: '#',
      price: '₹40',
      imageSrc:'/Groceryimg/Beverages/pepsi.jpeg',
      imageAlt: 'Pepsi',
    },
    {
        id: 5,
        name: 'Slice',
        href: '#',
        price: '₹40',
        imageSrc:'/Groceryimg/Beverages/slice.jpeg',
        imageAlt: 'Slice',
      },
      {
        id: 6,
        name: 'Sprite',
        href: '#',
        price: '₹45',
        imageSrc:'/Groceryimg/Beverages/sprite.webp',
        imageAlt: 'Sprite',
      },

   
  ]



function Beverages(){
    return(
    
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Beverages</h2>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 text-center mt-0"data-aos="fade-down">Sip joy, taste the moment, and let every drop awaken your senses to the richness of life.</h2>
          <p className='text-center font-light p-10 text-3xl'data-aos="zoom-in">Sip slowly, taste deeply .</p>
  
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

export default Beverages