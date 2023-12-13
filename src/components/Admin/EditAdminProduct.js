import React from 'react'
import { useNavigate} from 'react-router-dom'
import { myContext } from '../../App'
import { useState,useContext } from 'react'

function EditAdminProduct() {

  const navigate = useNavigate () 
    

  const { products, editValue } = useContext(myContext)
  const [hello , setHello] = useState(products[editValue])

  console.log(hello);


  const workingFuctiion = (e) => {
    const obj = {...hello , [e.target.name] : e.target.value}
    setHello(obj)
  }

  const Submit = (e)=>{
    e.preventDefault()
    products[editValue] = hello 
    navigate('/admin-product')
  }
  return (
    <div>
    
      <div className='editProductPage'>
    <h1 style={{marginBottom : '50px' , marginTop : '30px'}}>Edit Product Here</h1>
    <form className='editProdctsForm' onSubmit={Submit}>
        <input value={hello.name} name='name' type='text' placeholder='name' onChange={workingFuctiion} />
        <br/> <br/>
        <input value={hello.image} name='image' type='text' placeholder='ImageUrl' onChange={workingFuctiion} />
        <br/> <br/>
        <input value={hello.price} name='price' type='number' placeholder='Price' onChange={workingFuctiion} />
        <br/> <br/>
        <div style={{display : 'flex' , gap : '30px' , justifyContent : 'center'}}>
        <button onClick={() => navigate('/admin-product')} style={{backgroundColor : 'red' , border:'none' , color : 'white' , padding : '10px'}}>Cancel.!</button>
        <button style={{backgroundColor : 'green' , border:'none' , color : 'white' , padding : '10px'}}>SUBMIT</button>
        </div>
    </form>
</div>
    </div>
  )
}

export default EditAdminProduct
