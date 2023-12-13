import React, { useContext } from 'react'
import { myContext } from '../App'
import { Button } from 'react-bootstrap'
function Cat() {
  const {products}  = useContext(myContext)
  console.log(products)

    const filterCat = products.filter((element) =>  element.category === "cat")

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
            <div className='eachCardmaindivBcat'>
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

export default Cat

