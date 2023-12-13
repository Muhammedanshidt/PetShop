import React from 'react'
import { myContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
function AdminAddproduct() {

  const navigate = useNavigate()
  const {products,setProduts,formValue, setFormValue,} = useContext(myContext)  

  const setUpObj = (e) => {
      const obj = {...formValue , [e.target.name] : e.target.value}
      setFormValue(obj)
  }
  const workingTheFormSubmit = (e) => {
    e.preventDefault();
    if (formValue.id) {
      setProduts([...products, formValue]);
      setFormValue({});
      navigate('/admin-product');
    } else {
      alert('Enter the field or press cancel');
    }
  };



  return (
    <div className='container'>
        <h1> Add Products </h1>
         <div className='addProductContainer'>
        <h1 style={{marginBottom : '50px' , marginTop : '30px'}}>Add Product Here</h1>
        <form className='editForm' onSubmit={workingTheFormSubmit}>
            <input onChange={setUpObj} name='id' type='number' placeholder='id' />
            <br/> <br/>
            <input onChange={setUpObj} name='name' type='text' placeholder='name' />
            <br/><br/>
            <input onChange={setUpObj} name='image' type='text' placeholder='ImageUrl' />
            <br/><br/>
            <input onChange={setUpObj} name='price' type='number' placeholder='Price' />
            <div className='iiinneerwq'>
                <div className='rrraadddiioo'>
                <div>
                <h4>TYPE</h4>
                <label>Dog</label>
                <input onChange={setUpObj} name='category' type='radio' value='dog' id='dog' />
                </div>
                <div>
                <label>Cat</label>
                <input onChange={setUpObj} name='category' type='radio' value='cat' id='cat' />
                </div>
                </div>
            </div>
            <div>
            <button onClick={() => navigate('/admin-product')} style={{backgroundColor : 'red' , border:'none' , color : 'white' , padding : '10px'}}>Cancel.!</button>
            <br/><br/>
            <button style={{backgroundColor : 'green' , border:'none' , color : 'white' , padding : '10px'}}>SUBMIT</button>
            </div>
        </form>
        </div>
    </div>
  )
}


export default AdminAddproduct
