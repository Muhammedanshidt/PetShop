import React, { useContext, useState,useEffect } from 'react'
import {Card,Button,Row} from "react-bootstrap"
import "./style/AllCollection.css"
import { myContext } from '../App'
function AllCollection() {
   const {products,setProduts,cart,setCart,search} = useContext (myContext)

   const [searchData,setSearchData] = useState([{}])

   useEffect(() => {
    searchFilter(products)
  },[search,products])

  const searchFilter = (data) => {
    const result = data.filter((element) => {
      // console.warn(element === '')
      return  element.name.toUpperCase().includes(search.toUpperCase())
    })

    setSearchData(result)
  }

   console.log(search);
   const addCart = (element) => {
     const cartIndex=cart.findIndex((valu)=>valu.id===element.id)
     
     
    if(cartIndex !== -1){
      cart[cartIndex].quantity = cart[cartIndex].quantity + 1 
      setCart(cart)
    }else{
      setCart([...cart , {...element , quantity : 1}])
    }


   }
  return (
    <div >
      <h1>All Collection</h1>
      <div className='allcollection' >
      <Row className='container '>
      {searchData.map((products) => {
        const {id,name,category,image,price}=products
   return (
   <Card key={id} className='shadow p-3 mb-5 bg-white rounded' style={{ width:'14rem'}}>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <p><small className='text-muted'>{category}</small></p>
        <p>${price}</p>
        <p>Qty:1</p>
      
        <Button onClick={()=> addCart(products) } variant="primary"  >Add To Cart</Button>
      </Card.Body>
    </Card>)
      })}</Row>
      </div>
    </div>
  )
}
export default AllCollection
