import { Container, Row, Col } from "react-bootstrap"

export default function About () {
    return(
        <main>
            <Container>
                <Row className="text-center">
                    <Col sm={12} md={6}>
                        <img src="https://picsum.photo/300/300" className="rounded-circle" alt="profile"/>
                    </Col>
                    
                    <Col>
                    <h1>ClassName</h1>
                    <p>OKAY THIS IS EPIC</p>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}