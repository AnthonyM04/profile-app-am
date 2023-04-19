import { Container, Row, Col, Footer } from "react-bootstrap";

export default function Footer() {

    const currentYear = newDate().getFullYear();
    const gitHubURL = 'https://github.com/anthonym04/profile-app-am'

    return(
        <Footer>
            <Container>
                <Row>
                    <Col className="text-center">
                        <p>&copy; {currentYear} Anthyony Mruhpy
                        <br/>
                        <a  href={gitHubURL}
                            target="norefferer"
                            >COde In GitHUb</a></p>
                    </Col>
                </Row>
            </Container>
        </Footer>
    )
}