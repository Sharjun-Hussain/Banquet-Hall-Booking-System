import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'

const NotFound = () => {
    return (
        <Container className='bg-white'>
            <Row>
                <Col  className='d-flex justify-content-center align-items-center' style={{height:"100vh",position:"relative",alignItems:"center"}}>

                    <div  className='d-flex justify-content-center align-items-center'>
                        <div> 
                            OOOOPS PAGE NOT FOUND
                        </div>
                        <h3>404 Not Fund</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound