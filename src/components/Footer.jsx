import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {

    const currentYear = newDate().getFullYear();
    const gitHubURL = 'https://github.com/anthonym04/profile-app-am'
    return(
        <footer>
            <Container>
                <Row>
                    <Col className="text-center">
                        <p>&copy; {currentYear}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}