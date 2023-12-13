import React from 'react'
import AllCollection from './AllCollection'
import "./style/Main.css"
function Main() {
 

  return (
    <div>
    <div style={{ 
      backgroundImage: `url("https://www.gea.com/fr/binaries/market-pet-food-2_tcm29-56908.jpg")`, 
    height:"600px"}}>
     <h1 className='head'>Dog</h1>
     <h4 className='content'>
     All the products you need to keep your dog healthy, happy and full of life are right here. <br/>
     From food and treats to beds, collars and toys, our selection of dog supplies covers it all.
      </h4>
      <br/> <br/>
      <h1 className='head'> Cat</h1>
     <h4 className='content'>
     Pets at Home has a wide range of cat supplies to suit any cat; take a look at our selection of  <br/>
     food and treats or browse our other cat products to see everything on offer!
      </h4>

    </div>
      <AllCollection/>
      </div>
  )
}
export default Main
