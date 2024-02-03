import React, { useState } from "react";
import { Form, Button, ProgressBar } from "react-bootstrap";
import { Col, Container, Row } from 'react-bootstrap'
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import axios from 'axios';


const Registration = () => {




  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [Password, setPassword] = useState('');
  const [Password2, setPassword2] = useState('');
  const [HallName, setHallName] = useState('');
  const [Capacity, setCapacity] = useState('');
  const [amenities, setAmenities] = useState([]);

  const [step, setStep] = useState(1);


  const SubmitHandler = async (e) => {
    e.preventDefault();

    await axios.post("/api/user/auth/signup", JSON.stringify({ FirstName, LastName, Email, Mobile, Password, Password2, HallName, Capacity, amenities }), {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response.data);
    })
      .catch(error => {
        console.log(error);
      });

    window.location.href = "/";
  }


  const HandleCheck = (event) => {

    const { value, checked } = event.target


    if (checked) {
      setAmenities(e => [...e, value])
    }
    else (
      setAmenities(e => {
        return [...e.filter(ev => ev !== value)]
      })
    )

  }


  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };


  return (
    <>
      <Container fluid className="p-0 overflow-hidden">
        <NavBar />
        <Row className=''>
          <Col md={12} xs={12}>
            <div className="main">
              <div className="contain d-flex  justify-content-center align-items-center vh-100  ">
                <ProgressBar now={(step / 4) * 100} />
                <div className=" form ">
                  <h1 className="text-center pt-5">Create Your Account</h1>
                  {step === 1 && (
                    <>

                      <Form onSubmit={handleNextStep} className=" w-75">
                        <h3 className="text-center">Personal Information</h3>
                        <div className=' d-flex flex-column pt-2 pb-1'>
                          <label  htmlFor="fname">First Name:</label>
                          <input type="text" id="fname" name="FirstName" placeholder='Enter First Name' value={FirstName} onChange={(e) => setFirstName(e.target.value)} required></input>
                        </div>
                        <div className=' d-flex flex-column pt-2 pb-1'>
                          <label  htmlFor="lname">Last Name:</label>
                          <input type="text" id="lname" name="LastName" placeholder='Enter First Name' value={LastName} onChange={(e) => setLastName(e.target.value)} ></input>
                        </div>
                        <div className=' d-flex flex-column pt-2 pb-1'>
                          <label  htmlFor="email">Email:</label>
                          <input type="email" id="email" name="Email" placeholder='Enter Email' value={Email} onChange={(e) => setEmail(e.target.value)} required></input>
                        </div>
                        <div className=' d-flex flex-column pt-2 pb-1'>
                          <label  htmlFor="Mobile">Mobile:</label>
                          <input type="text" id="Mobile" name="Mobile" placeholder='Enter Mobile No' value={Mobile} onChange={(e) => setMobile(e.target.value)} required></input>
                        </div>
                        <Row>
                          <Col>
                            <div className="text-end pt-3">
                              <Button type="submit" className="next">Next</Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </>
                  )}

                  {step === 2 && (
                    <>

                      <Form onSubmit={handleNextStep} className=" w-75">
                        <h3 className="text-center">Create A password</h3>
                        <div className='pt-2 pb-1 d-flex flex-column'>
                          <label  htmlFor="password">Password:</label>
                          <input type="password" id="password" name="Password" placeholder='Enter Password' value={Password} onChange={(e) => setPassword(e.target.value)} required></input>
                        </div>
                        <div className='pt-2 pb-1 d-flex flex-column'>
                          <label  htmlFor="confirm-password">Confirm Password:</label>
                          <input type="password" id="confirm-password" name="Password2" placeholder='Re-Type Your Password' value={Password2} onChange={(e) => setPassword2(e.target.value)} required></input>
                        </div>

                        <Row className="pt-3">
                          <Col>
                            <div className="text-start">
                              <Button variant="secondary" className="previous" onClick={handlePreviousStep} >
                                Previous
                              </Button>
                            </div>
                          </Col>
                          <Col>
                            <div className="text-end">
                              <Button type="submit" className="next">Next</Button>
                            </div>
                          </Col>
                        </Row>

                      </Form>
                    </>
                  )}

                  {step === 3 && (
                    < >

                      <Form onSubmit={SubmitHandler} method="POST" className=" w-75">
                        <h3 className="text-center">Hall Information</h3>
                        <div className="d-flex flex-column justify-content-between">
                          <div className=' d-flex flex-column pt-2 pb-1'>
                            <label  htmlFor="HallName">HallName:</label>
                            <input type="text" id="HallName" name="HallName" placeholder='Enter Your Hall Location' value={HallName} onChange={(e) => setHallName(e.target.value)} required ></input>
                          </div>
                          <div className=' d-flex flex-column pt-2 '>
                            <label  htmlFor="capacity">capacity:</label>
                            <input type="text" id="capacity" name="Capacity" placeholder='Enter The Hall Capacity' value={Capacity} onChange={(e) => setCapacity(e.target.value)} required></input>
                          </div>
                        </div>
                        <h5 className="p-0 pt-5 "> Amentities : </h5>
                        <div className="d-flex flex-xs-column pb-5   ">

                          <div className=' d-flex flex-column  '>
                            <div className=' d-flex flex-row  '>
                              <input type="checkbox" id="amenities1" name="amenities" value="Parking facilities" onChange={HandleCheck}></input>
                              <label className="pt-2 pb-1 checklabel"> Parking facilities</label>
                            </div>
                            <div className="me-5">
                              <input type="checkbox" id="amenities1" name="amenities" value="Tables and chairs" onChange={HandleCheck}></input>
                              <label className="pt-2 pb-1 checklabel">   Tables and chairs</label>
                            </div>
                            <div>
                              <input type="checkbox" id="amenities1" name="amenities" value="Sound system and speakers" onChange={HandleCheck}></input>
                              <label className="pt-2 pb-1 checklabel">   Sound system</label>
                            </div>
                            <div>
                              <input type="checkbox" id="amenities1" name="amenities" value="Stage or platform" onChange={HandleCheck}></input>
                              <label className="pt-2 pb-1 checklabel">  Stage or platform</label>
                            </div>
                          </div>
                          <div className=' d-flex flex-column  ' >
                            <div className="ms-5">
                              <input type="checkbox" id="amenities1" name="amenities" value="Lighting and special effects" onChange={HandleCheck}></input>
                              <label className="pt-2 pb-1 checklabel">   Lighting </label>
                            </div>
                            <div className="ms-5" >
                              <input type="checkbox" id="amenities1" name="amenities" value="Catering and kitchen facilities" onChange={HandleCheck}></input>
                              <label className="pt-2 pb-1 checklabel">   Catering and kitchen facilities</label>
                            </div>
                            <div className="ms-5">
                              <input type="checkbox" id="amenities1" name="amenities" value="Catering and kitchen facilities" onChange={HandleCheck}></input>
                              <label className="pt-2 pb-1 checklabel">   Catering and kitchen facilities</label>
                            </div>
                            <div className="ms-5">
                              <input type="checkbox" id="amenities1" name="amenities" value="Cleaning and maintenance services" onChange={HandleCheck}></input>
                              <label className="pt-2 pb-1 checklabel">   Cleaning services</label>
                            </div>
                          </div>
                        </div>

                        <Container>
                          <Row className="pb-5">
                            <Col>
                              <div className="text-start">
                                <Button variant="secondary" className="previous" onClick={handlePreviousStep} >
                                  Previous
                                </Button>
                              </div>
                            </Col>
                            <Col>
                              <div className="text-end">
                                <Button type="submit" className="next">Submit</Button>
                              </div>
                            </Col>
                          </Row>
                        </Container>

                      </Form>
                    </>
                  )}

                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Registration;