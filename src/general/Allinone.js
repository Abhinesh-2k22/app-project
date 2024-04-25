import React from 'react'

function Allinone() {
    return (
        <div className="relative overflow-hidden bg-white">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  All in one Locality solution is finally here
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                Discover your neighborhood's hidden gems and connect with your community effortlessly. Navigate your surroundings with ease
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              src="\resource-renting\pexels-dropshado-2251247.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="\salon\2.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="\Groceryimg\Dairy\butter.avif"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="\resource-renting\pexels-pixabay-164938.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="/Groceryimg/fruits/banana.jpeg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="\Groceryimg\fish\fish.jpeg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="\salon\1.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex space-x-3'>
                      <input type="text" placeholder="Type City" class="input input-bordered input-md w-60 max-w-xs" />
                      <input type="text" placeholder="Type locality" class="input input-bordered input-md w-60 max-w-xs" />
                  </div>
                <div className="py-10">
                  <div className='flex space-x-60'>
                    <button class="btn btn-lg btn-primary">Rent a house</button>
                    <button class="btn btn-lg btn-primary">Buy Grocery</button>
                  </div>
                  <div className="flex space-x-60 pt-10">
                    <button class="btn btn-lg btn-primary">Get a Haircut</button>
                    <button class="btn btn-lg btn-primary min-w-26">Contact<br/>  Serviceman</button>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Allinone
