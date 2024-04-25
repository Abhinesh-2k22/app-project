import React from 'react'
import image from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/frontpage/img.png.jpeg'
import friuts from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/frontpage/fruitsandveg.jpeg'
import beverage from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/frontpage/beverages.jpeg'
import dairy from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/frontpage/dairy.jpeg'
import fish from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/frontpage/fish.jpeg'
import oils from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/frontpage/oils.jpeg'
import pet from '/Users/dhanushas/Desktop/APP/app-project/src/Groceryimg/frontpage/petproducts.jpeg'
function Frontpage(){
    return(
       
       
            <div >
                <h1 className='text-center font-sans text-5xl mt-5'>GROCERY</h1>
                <div className="flex items-center justify-center m-5 "data-aos="zoom-in-up">
                    <img src={image}/>
                    </div>
                    <div className='text-center font-bold'>
                        <h2>SHOP BY CATEGORY</h2>
                        
                        </div>
                        <div class="grid grid-rows-2 grid-cols-3 gap-5   ml-12 my-5 ">
                        <div className='rounded-full w-96 h-96'><img className="rounded-2xl"src={friuts}/><p className='text-center py-5 text-lg'>Fruits and vegetables</p></div>
                        <div className=' rounded-full w-96 h-96'><img  className="rounded-2xl"src={beverage}/><p className='text-center py-5 text-lg'>Beverages</p></div>
                        <div className='rounded-full w-96 h-96'><img className="rounded-2xl"src={dairy}/><p className='text-center py-5 text-lg'>Dairy Products</p></div>
                        <div className=' rounded-full w-96 h-96'><img className="rounded-2xl"src={fish}/><p className='text-center py-5 text-lg'>Fish</p></div>
                        <div className=' rounded-full w-96 h-96'><img className="rounded-2xl"src={oils}/><p className='text-center py-5 text-lg'>Oils</p></div>
                        <div className='rounded-full w-96 h-96'><img className="rounded-2xl"src={pet}/><p className='text-center py-5 text-lg'> Pet Products</p></div>
                       
                       
                    </div>
            </div>
         
    );
}
export default Frontpage

