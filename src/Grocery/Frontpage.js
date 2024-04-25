import React from 'react'

function Frontpage(){
    return(
       
       
            <div >
                <h1 className='text-center font-sans text-5xl mt-5'>GROCERY</h1>
                <div className="flex items-center justify-center m-5 "data-aos="zoom-in-up">
                    <img src='/Groceryimg/frontpage/img.png.jpeg'/>
                    </div>
                    <div className='text-center font-bold'>
                        <h2>SHOP BY CATEGORY</h2>
                        
                        </div>
                        <div class="grid grid-rows-2 grid-cols-3 gap-5   ml-12 my-5 ">
                        <div className='rounded-full w-96 h-96'><img className="rounded-2xl"src='/Groceryimg/frontpage/fruitsandveg.jpeg'/><p className='text-center py-5 text-lg'>Fruits and vegetables</p></div>
                        <div className=' rounded-full w-96 h-96'><img  className="rounded-2xl"src='/Groceryimg/frontpage/beverages.jpeg'/><p className='text-center py-5 text-lg'>Beverages</p></div>
                        <div className='rounded-full w-96 h-96'><img className="rounded-2xl"src='/Groceryimg/frontpage/dairy.jpeg'/><p className='text-center py-5 text-lg'>Dairy Products</p></div>
                        <div className=' rounded-full w-96 h-96'><img className="rounded-2xl"src='/Groceryimg/frontpage/fish.jpeg'/><p className='text-center py-5 text-lg'>Fish</p></div>
                        <div className=' rounded-full w-96 h-96'><img className="rounded-2xl"src='/Groceryimg/frontpage/oils.jpeg'/><p className='text-center py-5 text-lg'>Oils</p></div>
                        <div className='rounded-full w-96 h-96'><img className="rounded-2xl"src='/Groceryimg/frontpage/petproducts.jpeg'/><p className='text-center py-5 text-lg'> Pet Products</p></div>
                       
                       
                    </div>
            </div>
         
    );
}
export default Frontpage

