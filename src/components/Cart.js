// import React from "react";
import { myContext } from "../App";
import { useContext } from "react";
import { Delete } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Button, FormControl } from "react-bootstrap";

function Cart() {
  const { cart, setCart,intialValues,formValue,userName} = useContext(myContext);
  console.log(formValue);
  const buyNavi = useNavigate ()

  let alltotal = 0 ;

  const AddingTHeQuantity = (elementId, addValue) => {
    const updatedCart = cart.map((element) => {
      if (element.id === elementId) {
        const updatedValue = {
          ...element,
          quantity: (element.quantity || 1) + addValue,
        };
        return updatedValue;
      }
      return element;
    });

    setCart(updatedCart);
  };
  const deleteHappenInCart = (Id) => {
    const nayyaUpdated = cart.filter((element) => element.id !== Id)
    setCart(nayyaUpdated)
  }

  const buyButton = () =>{
    // if (formValue === intialValues)
  if (!userName)
  {
    alert("log-in for buy products ")
    buyNavi('/registration')
  }
    
else{
  alert("Your order has been placed")
  buyNavi("/payment");
}
  }


  return (
    <>
      <h1>CART PAGE</h1>

      <div className="container">
        <section
          className="h-100 h-custom"
          style={{ backgroundColor: "#eee" }}
        >
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol>
                <MDBCard>
                  <MDBCardBody className="p-4">
                    <MDBRow>
                      <MDBCol lg="7">
                        <MDBTypography tag="h5">
                          <a href="#!" className="text-body">
                            <MDBIcon
                              fas
                              icon="long-arrow-alt-left me-2"
                            />{" "}
                            Continue shopping
                          </a>
                        </MDBTypography>

                        <hr />

                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div>
                            <p className="mb-1">Shopping cart</p>
                          </div>

                          <MDBCard className="mb-3">
                            <MDBCardBody>
                              <div
                                style={{ display: "flex", flexDirection: "column" }}
                                className="d-flex justify-content-between"
                              >
                                {cart.length === 0 ? (
                                  <p>Your cart is empty.</p>
                                ) : (
                                  cart.map((item) => {
                                    let finalTotal =0
                                    finalTotal = item.price * item.quantity;
                                    alltotal += finalTotal;

                                    return (
                                      <div key={item.id}>
                                        <div>
                                          <MDBCardImage
                                            src={item.image}
                                            fluid
                                            className="rounded-3"
                                            style={{ width: "65px" }}
                                            alt="Shopping item"
                                          />
                                        </div>
                                        <div className="ms-3">
                                          <MDBTypography tag="h5">
                                            {item.name}
                                          </MDBTypography>
                                          <p className="small mb-0">
                                            {item.category}
                                          </p>
                                        </div>
                                        <div className="d-flex flex-row align-items-center">
                                          <div style={{ width: "80px" }}>
                                            <MDBTypography tag="h5" className="mb-0">
                                              $ {item.price}
                                            </MDBTypography>
                                          </div>
                                          <div className='cartProductQuantityShow'>
                                            <p>Quantity</p>
                                            <Button
                                              onClick={() =>
                                                AddingTHeQuantity(item.id, 1)
                                              }
                                              className='cardProductAddingBtn'
                                            >
                                              +
                                            </Button>
                                            <FormControl
                                              className='FOrmControleArrowKeyRemove'
                                              min="0"
                                              name="quantity"
                                              value={item.quantity}
                                              type="number"
                                            />
                                            <Button
                                              onClick={() =>
                                                AddingTHeQuantity(item.id, -1)
                                              }
                                              className='cardProductAddingBtn'
                                            >
                                              -
                                            </Button>
                                          </div>
                                          <Button onClick={() => deleteHappenInCart(item.id)} className='AtlastDeleteBtn'> <Delete></Delete> </Button>
                                          <a href="#!" style={{ color: "#cecece" }}>
                                            <MDBIcon fas icon="trash-alt" />
                                          </a>
                                          
                                        </div>
                                        <br />
                                      </div>
                                      
                                    );
                                  })
                                )}
                              </div>
                            </MDBCardBody>
                          </MDBCard>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                  <Button onClick={buyButton} variant="primary" className="m-3">Buy Now</Button>
                  <h3>Order Total : $ {alltotal}</h3>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>
    </>
  );
}

export default Cart;
