import { Container, Table } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";

export default function mesportes() {
  return (
    <>
      <Menu />
      <Container>
        <Container className="text-center rounded-pill border border-primary col-8">
          Produtos de esportes
        </Container>
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Produto</th>
                <th>Categoria</th>
                <th>Descrição</th>
                <th>Preço</th>
              </tr>
            </thead>
            <tbody>
{/* aqui será inserido o 
laço de repetição para os produtos */}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
{/* fim laço */}
            </tbody>
          </Table>
        </Container>
      </Container>
      <Footer />
    </>
  );
}
