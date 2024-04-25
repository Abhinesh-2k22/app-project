import React from 'react'

const products = [
    {
      id: 1,
      name: 'Mr.Joseph Dhanush',
      phone:"+91 123",
      rent:"10-15k",
      href: '#',
      price: '48,Thilagar street',
      imageSrc: '/resource-renting/pexels-solliefoto-298842.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Mr.Gopala Murthy',
      phone:"+91 123",
      rent:"10-15k",
      href: '#',
      price: '35,MGR street',
      imageSrc: '/resource-renting/pexels-justyzvidz-9952001.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Mr.Akshay pichhai',
      phone:"+91 123",
      rent:"10-15k",
      href: '#',
      price: '89,Church street',
      imageSrc: '/resource-renting/pexels-emrecan-2079246.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Mr.Agilan Vasudeva',
      phone:"+91 123",
      rent:"10-15k",
      href: '#',
      price: '31,Baazar street',
      imageSrc: '/resource-renting/pexels-kelly-1179532-3127152.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Mr.Somasundaram',
        phone:"+91 123",
        rent:"10-15k",
        href: '#',
        price: '89,MG nagar',
        imageSrc:'/resource-renting/pexels-dropshado-2251247.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
     
  ]


function R3() {
  return (
    <div className="bg-white ">
      <h1 className="text-5xl font-extrabold text-black ml-[155px] ">Search Results:</h1>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm font-medium text-gray-500">Owner name: <b>{product.name}</b></h3>
              <p className="mt-1 text-sm font-medium text-gray-500">Phone: {product.phone}</p>
              <p className="mt-1 text-lg font-bold text-gray-700">Rent: {product.rent}/mon</p>
              <p className="mt-1 text-xl font-extrabold text-gray-900">Address: {product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}


export default R3
