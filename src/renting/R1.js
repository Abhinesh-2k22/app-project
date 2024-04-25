import React from 'react'

function R1() {
  return (
    <div>
        <div className="flex ">
          <div className="px-1 mt-5 ml-5 space-y-10 mx-0 flex-initial"> 
            <h1 className="text-justify font-extrabold text-7xl break-normal pr-32">Rent Your Home. Own Your Life</h1>
            <div>
              <form action=''>
                <input
                type="text"
                name="search"
                placeholder='search city'
                className="px-3 py-2 w-[500px] font-semibold placeholder-zinc-200 text-black rounded-2xl border-none ring-2 ring-grey-300 focus:ring-violet-500 focus:ring-1 "
                />
              </form>
            </div>
            <p className=" font-light text-justify text-2xl"data-aos="fade-left">Whether you are looking for a rental house, condo, townhome, or apartment,<br/>
              we are here to help you at every step along the way. 
              Calculate your budget,<br/> brush up on rental living resources,
               and get organized for your move all in<br/> one place!
            </p>
          </div> 
          <div className=" mt-10 mr-10 w-8/12 h-0.5 pl-5"data-aos="zoom-in-up">
            <img  className="rounded-2xl" src="/resource-renting/pexels-wdnet-101808.jpg"/>
          </div>
        </div>
        <div className='h-[250px] m-auto relative w-screen mt-[60px]'>
          <div className='flex space-x-16 pb-0 pt-10 mr-0'data-aos="fade-up"data-aos-duration="3000">
            <div className='flex h-[200px] w-[250px] justify-center p-2'>
              <img className='rounded-2xl 'src='/resource-renting/pexels-expect-best-79873-323780.jpg'/>
            </div>
            <div className='flex h-[200px] w-[250px] justify-center p-2 rounded-2xl'>
              <img  className='rounded-2xl'src='/resource-renting/pexels-felipepelaquim-1895031.jpg'/>
            </div>
            <div className='flex h-[200px] w-[250px] justify-center p-2 rounded-2xl'>
              <img  className='rounded-2xl'src='/resource-renting/pexels-justyzvidz-9952001.jpg'/>
            </div>
            <div className='flex h-[200px] w-[250px] justify-center p-2 rounded-2xl'>
              <img className='rounded-2xl' src='/resource-renting/pexels-kelly-1179532-3127152.jpg'/>
            </div>
            <div className='flex h-[200px] w-[250px] justify-center p-2 rounded-2xl'>
              <img  className='rounded-2xl'src='/resource-renting/pexels-tobiasbjorkli-2360673.jpg'/>
            </div>
          </div>


        </div>



    </div>
  )
}

export default R1
