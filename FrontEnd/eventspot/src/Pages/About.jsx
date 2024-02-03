import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import AboutBackground from '../Assets/Images/AboutBackgeound.jpg'
import HallImg1 from '../Assets/Images/HallImg1.jpg'
import HallImg2 from '../Assets/Images/Hallimg2.jpg'
import HallImg3 from '../Assets/Images/Hallimg3.jpg'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'



const About = () => {
    return (
        <Container fluid className='pe-0' style={{overflowX: "hidden"}}> 
                   <NavBar/>
            <Row>
                <Col >
                    <div className='aboutBackgeoundImage d-flex justify-content-center align-items-center '>
                        <div className='  aboutBackgeoundText '>EventSpot Banquet Hall Booking</div>
                    </div>
                </Col>
            </Row>

            <Container>
                <Row>
                    <Col className='text-center pt-5 AboutContent'>
                        <div className='py-3'>
                            ABOUT US
                        </div>
                        <div className='py-3'>
                            The loyalty and the trust of our valued customers is the most valuable award Kings Food Caterers is awarded with<br /> daily for nearly Three decades. We have also received the following accolades.
                        </div>
                        <div className='py-3'>
                            We understand that you want the dream wedding and your loved ones will remember for a lifetime. <br /> The most important event in your life needs the best place for it to be held in. Newly build up Canelra<br /> Banquet Hall is an impressive venue for weddings or special occasions and corporate events.<br /> Canelra Banquet Hall in Kadawatha, Gampaha will ceremonially open on March 2016.
                        </div>
                        <div className='py-3'>

                            Canelra Banquet Hall managed by Kings Food Caterers (Pvt) Ltd. <br />From the moment you enter the Canelra until the moment you leave
                            you will experience genuine hospitality. <br />
                            We have two Air Conditioned Banquet Halls with modern interior decorations, elegant lightning, a spacious  <br /> dance floor and fully
                            carpeted to match five star atmosphere. Both Banquet Halls can easily accommodate up to 400 guests. <br />
                            Menu selections, designed to fit your function needs will be prepared by our talented chefs and the rest of the staff members. <br /> Our own
                            catering service provider Kings Food Caterers (Pvt) Ltd caters to all functions which held at Canelra. <br /> To enjoy a rich and delicious
                            culinary experience, look no further than our exquisite catering venue in Kadawatha at the Canelra Banquet Hall.  Whatever the menu you
                            pick, we’ll make sure it’s the most delicious food you ever tasted.
                        </div>


                    </Col>
                </Row>

                <Container className='my-5 '>
                    <Row>
                        <Col md={6} xs={12}>

                            <Container fluid >
                                <Row>
                                    <Col>
                                        <div >
                                            <Carousel fade interval={1000} variant='dark' controls={false} indicators={false} style={{ height: '350px', background: "black" }}>
                                                <Carousel.Item >
                                                    {/* <div className='text-success  ' style={{background:"black"}}>Hello</div> */}
                                                    <img src={HallImg1} height={360} />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    {/* <div className='text-success' style={{background:"black"}}>Hello world</div> */}
                                                    <img src={HallImg2} height={360} />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    {/* <div className='text-success' style={{background:"black"}}>Hello srilanka</div> */}
                                                    <img src={HallImg3} height={360} />
                                                </Carousel.Item>

                                            </Carousel>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col md={6} xs={12}>
                            <Container fluid className='text-white'>
                                <Row className='mb-5'>
                                    <Col className='text-center'>
                                        <h2 >VISION</h2>
                                        
                                        <div >To be one of the leading, respected and most trusted caterers in Sri Lanka.</div>
                                    </Col>
                                    
                                </Row>
                                <Row className='mb-5 pt-5'>
                                    <Col className='text-center '>
                                        <h2 >MISSION</h2>
                                        
                                        <div className='font-weight-bold'>We are a committed to meet and exceed the expectations of our customers by providing the highest quality, healthy and hygienic food & beverages, along with personalized service in catering. We value the protection of nature and the values of the society that we live in, and work as a family with our employees.</div>
                                    </Col>
                                    
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer/>
        </Container>
    )
}

export default About