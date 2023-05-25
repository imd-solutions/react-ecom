import { Col, Row } from "react-bootstrap";
import StoreItem from "./StoreItem";
import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import { iProduct } from "../../../types/Product";
import PageLoading from "../../partials/PageLoading";

export default function NewProducts() {
  const [spinner, setSpinner] = useState(true);
  const [products, setProducts] = useState<iProduct[]>([]);

  useEffect(() => {
    const products = async () => {
      const response = await ProductService.getNewProducts();
      setSpinner(false);
      setProducts(response.data);
    };
    products();
  }, []);
  return (
    <section>
      <div className="container my-5">
        <header className="mb-4">
          <h3>New products</h3>
        </header>
        <Row>
          {spinner ? <PageLoading /> : ""}
          {products.map((product, i) => (
            <Col key={i}>
              <StoreItem {...product} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
