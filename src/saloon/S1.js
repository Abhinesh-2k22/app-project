import React from 'react'

function S1() {
  return (
<section className='bg-white h-screen w-screen'>
    <div className='flex item-center justify-center '>
      <div class="card w-96 bg-base-100 shadow-xl my-32">
            <figure><img className='mt-5' src="/salon/7.jpeg" alt="S" /></figure>
           <div class="card-body">
              <h2 class="card-title">Fairy Professional salon</h2>
                <p>address comes here!!</p>
              <div class="flex card-actions justify-center">
                <div>
                <select class="flex select w-full max-w-xs ">
                    <option disabled selected>Pick your time to book appoinment!</option>
                    <option>9am</option>
                    <option>10am</option>
                    <option>11am</option>
                    <option>1pm</option>
                    <option>3pm</option>
                    <option>5pm</option>
                    <option>8pm</option>
                </select>
                </div>
                <div>
                <button class="btn btn-primary">Book Now</button>
                </div>
              </div>
           </div>
       </div>
    </div>
</section>
  )
}

export default S1
