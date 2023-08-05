import React from 'react'
import Product from './Product'

export default function Main() {
  return (
    <div>
      <div className='hero'>
    
        <div className="row">
          <div className="col-12">
            <img  src="/logo2.png" height="500px" width={"100%"} alt="" />
            <div className="card-img-overlay">
              <h5 className="card-title text-white fs-1 mx-4">New Season Fashion</h5>



            </div>
          </div>

        </div>

      </div>
      <Product />
    </div>
  )
}
