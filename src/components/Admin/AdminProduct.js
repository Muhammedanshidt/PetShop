import React from 'react'
import { useState,useContext,useEffect} from 'react'
import { Button,Card,Row } from 'react-bootstrap'
import { myContext } from '../../App'
import AdminHome from './AdminHome'
import "../Admin/AdminProduct.css"
import { Link, useNavigate } from 'react-router-dom'
function AdminProduct() {

  const navigate = useNavigate ()

  const [allProductsAdmin,setAllProductsAdmin] = useState ([])
  const {products,setProduts,setEditValue} = useContext (myContext)

   console.log(products);


  useEffect(() => {
    setAllProductsAdmin(products)
    },[products])


const adminProductDelete = (ind) =>{
   const delobj = allProductsAdmin.filter((element,index) => {
   return element.id !== ind
   })
   setAllProductsAdmin(delobj)
   setProduts(delobj)

}
const editOnProduct = (ind) => {
  setEditValue(ind)
  navigate('/edit-product')
}

  return (
    <>
     <AdminHome/>
    <div className='allContainer'>
     
      <div><h1>ADMIN PRODUCTS</h1></div>

      <div style={{display : 'flex', justifyContent:'flex-end'}}><Link to='/add-product'><Button className='m-5' >Add Products</Button></Link></div>
      <Row className='container '>
      {
        allProductsAdmin.map ((element,index) => {
          return (
            <Card key={element.id} className='shadow p-3 mb-5 bg-white rounded' style={{ width:'14rem'}}>
            <Card.Img variant="top" src={element.image}/>
            <Card.Body>
              <Card.Title>{element.name}</Card.Title>
              <p><small className='text-muted'>{element.category}</small></p>
              <p>${element.price}</p>
              <p>Qty:1</p>
              <div>
                <Button onClick={() => adminProductDelete(element.id)} className='m-3' variant='danger'>Delete</Button>
                <Button onClick={() => editOnProduct(index)} variant='success'>Edit</Button>
              </div>
            </Card.Body>
          </Card>
          )
        }) }
    </Row>
    </div>
    </>
  )
}

export default AdminProduct
