import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import how1 from '../Assets/how1.png'
import how2 from '../Assets/how2.png'
import how3 from '../Assets/how3.png'


const HowWorks = () => {
    return (
        <div>
            <Container fluid>
                <Row className='text-center text-white mt-5 mb-5 '>
                    <h1 className='text-bold'> SEE HOW IT WORKS</h1>
                </Row>
                <Row className='d-flex flex-row'>
                    <Col xs={12} md={4} lg={4} xl={4} className='d-flex pb-4 pt-2 text-center'>
                        <Card className='card1'>
                            <Card.Img variant="top" src={how1} className='img'/> 
                            <Card.Body className='card-body1'>
                                <Card.Title>Look Our Halls</Card.Title>
                                <Card.Text>
                                Check out our Hall, compare photos, special offers and function package
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} lg={4} xl={4} className='d-flex pb-4 pt-2 text-center'>
                        <Card className='card1'>
                            <Card.Img variant="top" src={how2} className='img'/> 
                            <Card.Body className='card-body1'>
                                <Card.Title>Request Quotes</Card.Title>
                                <Card.Text>
                                Get custom quotes of your short-listed events at the click of Enquery button.
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} lg={4} xl={4} className='d-flex pb-4 pt-2 text-center'>
                        <Card className='card1'>
                            <Card.Img variant="top" src={how3} className='img'/> 
                            <Card.Body className='card-body1'>
                                <Card.Title>Book a Hall</Card.Title>
                                <Card.Text>
                                Select and Book the perfect hall in no time at all. Time is money, save both.
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HowWorks