import { Col, Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";

export default function mesportes() {
    return <>
        < Menu />
        <Container>
            <Container className="text-center rounded-pill border border-primary col-8">
                Produtos de esportes
            </Container>
            <Container>
                dados
            </Container>
        </Container>
        <Footer />
    </>
}
