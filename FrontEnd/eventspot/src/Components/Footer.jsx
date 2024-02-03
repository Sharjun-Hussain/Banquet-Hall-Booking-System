import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo1 from '../Assets/logo1.png'
import { FaFacebook ,FaInstagram,FaTwitter,FaGoogle} from 'react-icons/fa'

import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { Link } from "react-router-dom";



const Footer = () => {
    return (
      

        <Container fluid className="bg-white py-4">
            <Row className="d-md-flex d-none ">
                <Col md={2} className="ps-5 ">
                    <img src={logo1} height="70"/>
                </Col>
                <Col>
               <div> We have  Air Conditioned Banquet Halls with modern interior decorations, <br/>elegant lightning, a spacious dance floor and fully carpeted to match five star atmosphere.</div>
                </Col>
                <Col className="d-flex flex-column">
                    <Link to="/" >EventSpot</Link>
                    <Link to="/Contatct" >Contatct-Us</Link>
                    <Link to="/About" >About-Us</Link>
                    <Link to="/admin/Login" >Login</Link>
                </Col>
                <Col className="">
                   <Link to="www.facebook.com" className="ms-3"><FaFacebook size={30} className="ms-3" /></Link>
                   <Link to="www.instagram.com" >  <FaInstagram size={30} className="ms-3" /></Link>
                   <Link to="www.twitter.com" ><FaTwitter size={30} className="ms-3"/></Link>
                   <Link to="www.mail.google.com"> <FaGoogle size={30} className="ms-3"/></Link>
                </Col>
            </Row>

            <Row className="d-md-none d-block justify-content-center">
                <Col sm={12} md={2} className="ps-5 justify-content-center">
                    <img src={logo1} height="70"/>
                </Col>
                <Col sm={12}>
               <div className="justify-content-center"> We have  Air Conditioned Banquet Halls with modern interior decorations, <br/>elegant lightning, a spacious dance floor and fully carpeted to match five star atmosphere.</div>
                </Col>
                <Col sm={12} className="d-flex flex-column justify-content-center">
                    <Link to="/" >EventSpot</Link>
                    <Link to="/Contatct" >Contatct-Us</Link>
                    <Link to="/About" >About-Us</Link>
                    <Link to="/admin/Login" >Login</Link>
                </Col>
                <Col sm={12} className="">
                   <Link to="www.facebook.com" className="ms-3"><FaFacebook size={30} className="ms-3" /></Link>
                   <Link to="www.instagram.com" >  <FaInstagram size={30} className="ms-3" /></Link>
                   <Link to="www.twitter.com" ><FaTwitter size={30} className="ms-3"/></Link>
                   <Link to="www.mail.google.com"> <FaGoogle size={30} className="ms-3"/></Link>
                </Col>
            </Row>


        </Container>



    );
};

export default Footer;
