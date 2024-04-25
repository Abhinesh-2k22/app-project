import React from "react";



const products = [
    {
      id: 1,
      name: 'Duck',
      href: '#',
      price: '₹10',
      imageSrc:'/Groceryimg/fish/duck.webp',
      imageAlt: 'Duck',
    },
    {
      id: 2,
      name: 'Fish',
      href: '#',
      price: '₹15',
      imageSrc:'/Groceryimg/fish/fish.jpeg',
      imageAlt: 'Fish',
    },
    {
      id: 3,
      name: 'Chicken',
      href: '#',
      price: '₹20',
      imageSrc:'/Groceryimg/fish/full-chicken.jpg',
      imageAlt: 'Chicken',
    },
    {
      id: 4,
      name: 'Goat',
      href: '#',
      price: '₹18',
      imageSrc:'/Groceryimg/fish/goat.jpeg',
      imageAlt: 'Goat',
    },
    {
        id: 5,
        name: 'Pork',
        href: '#',
        price: '₹18',
        imageSrc:'/Groceryimg/fish/pork-meat.jpg',
        imageAlt: 'Pork',
      },
      {
        id: 6,
        name: 'Turkey',
        href: '#',
        price: '₹25',
        imageSrc:'/Groceryimg/fish/turkey.jpeg',
        imageAlt: 'Turkey',
      },

   
  ]



function Fish(){
    return(
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Fish and Meat</h2>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 text-center mt-0"data-aos="fade-down">Meat:Crafted by nature's bounty and honored through the skillful hands of those who respect the journey from field to fork.</h2>
          <p className='text-center font-light p-10 text-3xl'data-aos="zoom-in">A savory symphony of sustenance </p>
  
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

export default Fish