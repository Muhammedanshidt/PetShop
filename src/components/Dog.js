import React from 'react'
import { myContext } from '../App'
import { useContext } from "react"
import {productsData} from './Data/product'
import { Button } from 'react-bootstrap'

function Dog() {
  const {products}  = useContext(myContext)
  console.log(products)

    const filterCat = products.filter((element) =>  element.category === "dog")

  return (
    <div className='catMain'><h1>cat section</h1>
          <div className='catParent'>  
            <div className='catBody'>

            {
        filterCat.map((element , index) => {
          const {id,name,image,price,category}=element
          return (
            <div key={index} className='catProductImg'>
            <img alt='cat' className='eachProductCatImg' src={image} />
            <div className='eachCardmaindivBed'>
              <h2 className='catProductTitle'>{name}</h2>
              <h4 className='catProductPrice'>Price: $ {price}</h4>
              <h4>{category}</h4>
            </div >
            
            <div className='butparent'>

          
           <Button variant="primary"  >Add To Cart</Button>

            </div>


            </div>
          
          )
        })
      }


            </div>
          </div>
    </div>
  )
}

export default Dog
