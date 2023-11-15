import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SignImg from "./SignImg";

const Home = () => {

  const data = {
    name: "",
    email:"",
    date:"",
    password:"",
    confirmPassword:""
  }

  const [validInput, setValidInput] = useState(data)

  const handleData = (e)=>{
    setValidInput({...validInput, [e.target.name]:e.target.value})
  }

  return (
    <>
      <div className="container my-5">
        <section className="d-flex justify-content-between">
          <div className="left_data" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-8">Sign Up</h3>
            <Form>
              <Form.Group
                className="mb-3 col-lg-8 my-5"
                controlId="formBasicEmail"
              >
                <Form.Control type="text" name="name" onChange={handleData} placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control type="email" name="email" onChange={handleData} placeholder="Email" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control type="date" name="date" onChange={handleData} placeholder="dd-mm-yyyy" />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-8"
                controlId="formBasicPassword"
              >
                <Form.Control type="password" name="password" onChange={handleData} placeholder="Password" />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-8"
                controlId="formBasicPassword"
              >
                <Form.Control type="password" name="confirmPassword" onChange={handleData} placeholder="Confirm Password" />
              </Form.Group>

              <Button variant="primary" className="col-lg-8 my-2" type="submit">
                Submit
              </Button>

              <p className="mx-5 my-4">Already have an account? <a href="#Login">Sign In</a></p>
            </Form>
          </div>
          <SignImg/>
        </section>
      </div>
    </>
  );
};

export default Home;
