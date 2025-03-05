import React from "react";
import {useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function App() {
  const history=useNavigate();
  const [name, setname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  async function submit(e){
    e.preventDefault();
    
    try{
      await axios.post('http://localhost:5173/login',{
        email,
        password
      })
      .then((res)=>{
        if(res.data==="exist"){
          history('/home')
        }
        else if(res.data==="not exist"){
          alert('user not exist');
        }

    }
    )
    .catch((e)=>{
      alert('wrong details');
      console.log(e);

    }
    )
    }
    catch(e){
      console.log(e)
  }
  }
  return (
    <MDBContainer
      fluid
      className="p-4 background-radial-gradient overflow-hidden"
    >
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1
            className="my-5 display-3 fw-bold ls-tight px-3"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            The best offer <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>
              for your business
            </span>
          </h1>

          <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </MDBCol>

        <MDBCol md="6" className="position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>

          <MDBCard className="my-5 bg-glass">
            <MDBCardBody className="p-5">
              <MDBRow>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                onChange={(e)=>setemail(e.target.value)}
                label="Email"
                id="form3"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                onChange={(e)=>setpassword(e.target.value)}
                label="Password"
                id="form4"
                type="password"
              />
              <Link to={`/`}>
              <MDBBtn className="w-100 mb-4" size="md">
                sign in
              </MDBBtn>
              </Link>

              <div className="text-center">
                <p>or sign up :</p>
              <Link to={`/signup`}>
                <MDBBtn className="w-100 mb-4" size="md">
                sign up
              </MDBBtn>
              </Link>
                
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
