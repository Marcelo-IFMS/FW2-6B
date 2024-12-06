import { Container, Table } from "react-bootstrap";
import Menu from "./component/navbar";
import Footer from "./component/footer";

export default function Cardesportes({ produtos }) {
  return (
    <>
      <Menu />
      <Container>
        <Container className="text-center rounded-pill border border-primary col-8">
          Produtos de esportes
        </Container>
        <Container>
          <div class="row">
            {produtos.map((produto) => (
              <div class="col-sm-3 mb-3 mb-sm-0">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{produto.titulo}</h5>
                    <p class="card-text">{produto.descricao}</p>
                    <a href="#" class="btn btn-primary">
                      {produto.preco}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Container>
      <Footer />
    </>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("http://localhost:3000/api/produtos/data");
  const repo = await res.json();
  // Pass data to the page via props
  return { props: { produtos: repo } };
}
