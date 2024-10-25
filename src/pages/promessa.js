import { Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";
import { useState } from "react";

export default function Promessa(){

    const [prometido, setPrometido] = useState("")
    setTimeout(() => {   
        setPrometido("é uma dívida")
        document.title="Promessa é dívida"
    }, 4000);
    return <>
    <Menu />
    <Container>
        Promessa {prometido==="" ? "<carregando>" : prometido}
    </Container>
    <Footer />
    </>
}