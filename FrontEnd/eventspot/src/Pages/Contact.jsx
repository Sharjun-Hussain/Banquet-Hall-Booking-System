import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import NavBar from '../Components/NavBar'
import { AiFillPhone } from 'react-icons/ai'
import { MdLocationPin, MdEmail } from 'react-icons/md'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsGoogle } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Contact = () => {
    const [Email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [Hall, setHall] = useState('');
    const [Message, SetMessage] = useState('');
    const [Mobile, setMobile] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [EmailError, setEmailError] = useState('');

    const validate = ()=>{
        const validatePhoneNumber = () => {
            const phoneNumberPattern = /^[0-9]{10}$/;
    
            if (!phoneNumberPattern.test(Mobile)) {
                setPhoneNumberError('Invalid phone number format Make Sure It has 10 Digits');
    
                return false;
            }
    
            setPhoneNumberError('');
    
            return true;
        };
    
    
        const validateEmail = () => {
            const EmailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
            if (!EmailPattern.test(Email)) {
                setEmailError('Invalid phone number format Make Sure It has 10 Digits');
    
                return false;
            }
    
            setEmailError('');
    
            return true;
        };

        validatePhoneNumber();
        validateEmail();

    }
    const handlSubmit = (e) => {
        e.preventDefault();

        if (validate()) {

            
                // Perform further actions (e.g., submit the form)
                // submitForm();


            



        }
    };
    return (
        <Container fluid>
            <NavBar />
            <Row>
                <Col>
                    <div className='text-center text-white mt-5'>
                        <h1>
                            Contact Us
                        </h1>
                        <h6>Fill Out the Form And We will get back you again within 24 hours .</h6>

                    </div>

                    <div >
                        <Container className='p-5'>
                            <Row>
                                <Col md={3} className=' text-white' style={{ height: "400px", backgroundColor: "#081546", borderRadius: "10px" }}>
                                    <h4 className='my-5 text-center'>Contact Information</h4>


                                    <div className='d-flex ms-4 my-3'>
                                        <AiFillPhone /><h6 className='mx-2'> +94757340891</h6>
                                    </div>
                                    <div className='d-flex ms-4 my-3'>
                                        <MdEmail /><h6 className='mx-2'> Eventspot@gmail.com</h6>
                                    </div>
                                    <div className='d-flex ms-4 my-3'>
                                        <MdLocationPin /><h6 className='mx-2'> 670/A , Ahamed Road SM -14</h6>
                                    </div>

                                    <div className='d-flex justify-content-center '>
                                        <Link to={"www.facebook.com"}> <FaFacebookF className=' me-2' style={{ width: "35px", height: "30px", backgroundColor: "white", borderRadius: "50%", marginTop: "50px" }} /></Link>
                                        <Link to={"www.Instagram.com"}> <AiFillInstagram className=' me-2' style={{ width: "35px", height: "30px", backgroundColor: "white", borderRadius: "50%", marginTop: "50px" }} /></Link>
                                        <Link to={"www.twitter.com"}>  <AiOutlineTwitter className=' me-2' style={{ width: "35px", height: "30px", backgroundColor: "white", borderRadius: "50%", marginTop: "50px" }} /></Link>
                                        <Link to={"mail.google.com"}> <BsGoogle className=' me-2' style={{ width: "35px", height: "30px", backgroundColor: "white", borderRadius: "50%", marginTop: "50px" }} /></Link>


                                    </div>
                                </Col>
                                <Col md={9} style={{ height: "400px", backgroundColor: "#FFFFFF", borderRadius: "10px" }}>
                                    <Form onSubmit={handlSubmit}>
                                        <Container className='mt-5'>
                                            <Row>

                                                <Col>

                                                    <div>
                                                        <label  htmlFor="validationCustom01" className="form-label">Email</label>
                                                        <input type="email" name="my_email" className="form-control" id="validationCustom01" placeholder='Joon@gmail.com' value={Email} onChange={(e) => setEmail(e.target.value)} required ></input>

                                                    </div>
                                                    <div >
                                                        <label  htmlFor="validationCustom01" className="form-label">Mobile</label>
                                                        <input type="text" name="phone_input" className="form-control" id="validationCustom01" placeholder='0757340891' value={Mobile} onChange={(e) => setMobile(e.target.value)} required ></input>
                                                        {phoneNumberError && <h6 className='mt-1 text-danger'>{phoneNumberError}</h6>}
                                                    </div>
                                                </Col>
                                                <Col>

                                                    <div>
                                                        <label  htmlFor="validationCustom01" className="form-label">Name</label>
                                                        <input type="text" name="Name" className="form-control" id="validationCustom01" placeholder='Sharjun hussain' value={Name} onChange={(e) => setName(e.target.value)} required></input>

                                                    </div>


                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                        <Form.Label>Select Hall</Form.Label>
                                                        <Form.Select aria-label="Default select example" value={Hall} onChange={(e) => setHall(e.target.value)}>
                                                            <option>Select Hall (If YOu Need)</option>
                                                            <option value="64893f7516426dc8b68124bc">Lee Meridian</option>
                                                            <option value="64893f7516426dc8b68124bd">Paradise</option>
                                                            <option value="64893f7516426dc8b68124bf">Bawa Royal</option>
                                                            <option value="64893f7516426dc8b68124be">Pearls </option>
                                                        </Form.Select>
                                                    </Form.Group>


                                                </Col>

                                            </Row>
                                            <Row>
                                                <div>
                                                    <label  htmlFor="validationCustom01" className="form-label">Consern : </label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={Message} onChange={(e) => SetMessage(e.target.value)} placeholder='Please Type YOur Concerns' required></textarea>
                                                </div>

                                                <Button type="submit" className="btn btn-primary my-3">Submit</Button>
                                            </Row>
                                        </Container>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default Contact

