import React from 'react'
import data from '../data.json'
import MenuOption from './MenuOption'
import Cart from './Cart'


function Shop() {
  return (
    <>
        <div>
          <h1>Desserts</h1>
          <div className="choices">
              <MenuOption data={data} />
          </div>
        </div>
        <Cart />
       
    </>
  )
}

export default Shop