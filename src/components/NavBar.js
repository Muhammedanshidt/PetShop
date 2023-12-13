import React, { useContext } from "react"
import "./style/navbar.css"
import { Outlet, useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { myContext } from "../App";


function NavBar() {

  const {search,setSearch,cart} = useContext(myContext)
  let {userName , setUserName} = useContext(myContext)

const navClicked = useNavigate()
const regClicked = useNavigate()
const cartClicked = useNavigate()
const logoClicked = useNavigate()
const settingUser = () => {
  setUserName('')
  navClicked('/login')
}
  return (
    <div className="main">
      <div className="navber">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img onClick={()=>logoClicked("/")} class="dth-site-logo__logo" src="https://media.petsathome.com/wcsstore/pah-as01/images/redesign/new-logo.svg" alt="" width="120" height="68"></img>
      <Form className="d-flex">
            <Form.Control
              onClick={()=> navClicked ("/allcollection")}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event)=>setSearch(event.target.value)}
            />
            <Button className="rounded-pill" variant="outline-success">Search</Button>
          </Form>
            <div className="myacc">
             <Button onClick={()=>regClicked("/registration")} className="rounded-pill" variant="outline-success" name="myaccount" ><PersonOutlineIcon/>{userName ? <> {userName} </>: <>My Account</>  } </Button>
          </div>
          <div  variant="outline-success">
           <Button onClick={()=>cartClicked("/cart") } className="rounded-pill" variant="outline-success" ><ShoppingBasketIcon/>  Basket {cart.length}  </Button>
          </div>
            <div>
            <Button onClick={settingUser} className="rounded-pill" variant="outline-success" name="myaccount" ><PersonOutlineIcon/>{userName ? <> Log-out </>: <>Log-in </>   } </Button>
            </div>
        </nav>
          <div class="bline">
              <div class="parentbl">
             <div class="bicon" onClick={()=>navClicked("/dog")}> Dog </div> 
             <div class="bicon" onClick={()=>navClicked("/allcollection")}>All Collection</div>
             <div class="bicon" onClick={()=>navClicked("/cat")}>Cat</div> 
             
              </div>
          </div>
      </div>
      
      <Outlet/>
    </div>
  )
}

export default NavBar
