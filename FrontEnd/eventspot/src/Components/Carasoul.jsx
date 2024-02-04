import React from 'react'
import '../App.css';
import { Carousel, Row, Col } from 'react-bootstrap';

import back from '../Assets/back.png'
import back2 from '../Assets/back2.png'
import back3 from '../Assets/back3.webp'

export const Carasoul = () => {
    return (
        <div className='d-flex justify-content-center align-items-center hero car'>
            <div className='carasoulText '>
                EventSpot  Hall Booking
            </div>
            <div className="p-0 carasoulBody " style={{ overflowX: "hidden" }}  >
                <Row className='var' >    
                    <Col xs={12} md={12} className='carasoul'>
                        <Carousel fade >
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={back}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={back2}
                                    alt="Second slide"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={back3}
                                    alt="Third slide"
                                />

                            </Carousel.Item>


                        </Carousel>
                    </Col>
                </Row>
            </div>
            




        </div>
    )
}
