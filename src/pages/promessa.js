import { Container } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";
import { useState } from "react";

export default function Promessa(){

    const [prometido, setPrometido] = useState("")
    setTimeout(() => {   
        setPrometido("é uma dívida")
        document.title="Promessa é dívida"
    }, 2000);
    return <>
    <Menu />
    <Container>
        Promessa {prometido}
    </Container>
    <Footer />
    </>
}










/**
 * {prometido===""?<img src="loading.gif" width="100" height={40}/>:prometido}
 */