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
       
       
            <div>
                <h1 className='text-center'>GROCERY</h1>
                <div className="flex items-center justify-center m-5">
                    <img src={image}/>
                    </div>
                    <div className='text-center'>
                        <h2>SHOP BY CATEGORY</h2>
                        
                        </div>
                        <div class="grid grid-rows-2 grid-cols-3 gap-5 mx-3 my-5 border border-spacing-4 border-black">
                        <div className='w-96 h-96'><img src={friuts}/><p>Fruits and vegetables</p></div>
                        <div className='w-96 h-96'><img src={beverage}/><p>Beverages</p></div>
                        <div className='w-96 h-96'><img src={dairy}/><p>Dairy Products</p></div>
                        <div className='w-96 h-96'><img src={fish}/><p>Fish</p></div>
                        <div className='w-96 h-96'><img src={oils}/><p>Oils</p></div>
                        <div className='w-96 h-96'><img src={pet}/><p>Pet Products</p></div>
                       
                       
                    </div>
            </div>
         
    );
}
export default Frontpage

