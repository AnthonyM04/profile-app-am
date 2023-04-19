import { Container, Row, Col, React } from "react-bootstrap"

export default function Video() {
    return(
        <>
        <section>
            <Container className="bg-secondary video-container">
                <Row>
                    <Col>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/87xS4cgTf68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
 }