import { Carousel, Container, Row, Col } from "react-bootstrap";

export default function PictCarousel() {
    return (
        <section>
            <Container className="carousel-container">
                <Row>
                    <Col sm={12} md={6}>
                        <Carousel>
                            <Carousel.Item>
                                <img src="https://picsum.photos/500/300" className="d-block w-100" alt="slide 1" />
                                <Carousel.Caption>
                                    <h2>First Items</h2>
                                    <p>First Items are great because they are the first. I must learn to write better english</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                        <Carousel.Item>
                            <img src="https://picsum.photos/500/300" className="d-block w-100" alt="slide 2" />
                            <Carousel.Caption>
                            <h2>Second Items</h2>
                            <p>First Items are great because they are the first. I must learn to write better english</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src="https://picsum.photos/500/300" className="d-block w-100" alt="slide 3"/>
                            <Carousel.Caption>
                            <h2>Third Items</h2>
                            <p>First Items are great because they are the first. I must learn to write better english</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};