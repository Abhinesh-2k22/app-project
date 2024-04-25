import React from 'react'



const products = [
    {
      id: 1,
      name: 'Studio Rentals',
      href: '/renting-R3',
      imageSrc: '/resource-renting/pexels-pixabay-164938.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Living in a studio apartment is an experience unlike any other. The open floor plan invites out-of-box thinking of how you decorate.',
    },
    {
        id: 2,
        name: 'One Bed Rentals',
        href: '/renting-R3',
        imageSrc: '/resource-renting/pexels-solliefoto-298842.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Searching for the perfect one bedroom apartment is an exhausting ordeal because there are so many factors in play.',
      }, {
        id: 3,
        name: 'Two Bed Rentals',
        href: '/renting-R3',
        imageSrc: '/resource-renting/pexels-justyzvidz-9952001.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Is your apartment cramping your lifestyle? Branch out and find a place with a little more space or room to grow',
      }, {
        id: 4,
        name: 'Utilities Included',
        href: '/renting-R3',
        imageSrc: '/resource-renting/pexels-emrecan-2079246.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Living in an apartment with utilities included often makes it easier to budget and plan your expenses. Seems like a no-brainer, right?',
      },
      {
        id: 5,
        name: 'Pet Friendly Rentals',
        href: '/renting-R3',
        imageSrc: '/resource-renting/pexels-lina-1741205.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Two paws up for rentals that roll out the welcome mat for you and your furry friends. Stop chasing your tail, get out of the dog house and move into your new pet-friendly home.',
      },
      {
        id: 6,
        name: 'Cheap Rentals',
        href: '/renting-R3',
        imageSrc: '/resource-renting/pexels-kelly-1179532-3127152.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Want to find your new home and still be able to save? Explore our affordable spaces at a price you will love.',
      },
      {
        id: 7,
        name: 'Luxury Rentals',
        href: '/renting-R3',
        imageSrc: '/resource-renting/pexels-dropshado-2251247.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Luxurious rentals for those who enjoy the finer things in life. Sophisticated spaces featuring high-end finishes, exclusive amenities and premium upgrades.',
      },
      {
        id: 8,
        name: 'Affordable Rentals',
        href: '/renting-R3',
        imageSrc: '/resource-renting/pexels-javon-swaby-197616-3314325.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Qualify for income-restrictive housing? Explore the best options that fit your needs, as well as your lifestyle.',
      },
  ]

function R2() {

  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-7xl font-bold tracking-tight text-gray-900 text-center mt-0">Find Your Next Home</h2>
      <p className='text-center font-light p-10 text-3xl'>We make it easy to find your perfect fit with over a million available rentals.</p>
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
                <h3 className="text-2xl  text-gray-700">
                  <a  href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default R2
