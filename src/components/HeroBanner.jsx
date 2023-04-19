import { Container, Row, Col } from 'react-bootstrap';

export default function HeroBanner() {
    return(
        <section>
            <Container fluid className='hero-banner'>
                <Row>  
                    <Col className='hero-text'>
                    <img src="https://picsum.photos/900/300" className='rounded-circle' alt='profile'/>
                    </Col>

                    <Col>
                        <h1 className='mt-3'>Your Name</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}