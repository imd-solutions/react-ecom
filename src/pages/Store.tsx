import { useEffect, useState } from "react";
import { iProduct } from "../types/Product";
import PageLoading from "../components/partials/PageLoading";
import { Row, Col } from "react-bootstrap";
import StoreItem from "../components/pages/store/StoreItem";
import ProductService from "../services/ProductService";

export default function Store() {
  const [spinner, setSpinner] = useState(true);
  const [products, setProducts] = useState<iProduct[]>([]);

  useEffect(() => {
    const products = async () => {
      const response = await ProductService.getAllProducts();
      setSpinner(false);
      setProducts(response.data);
    };
    products();
  }, []);
  return (
    <div>
      <h2 className="mb-16 mb-md-24">Discover our products</h2>
      <Row xs={1} md={2} lg={3} className="g-3">
        {spinner ? <PageLoading /> : ""}
        {products.map((product, i) => (
          <Col key={i}>
            <StoreItem {...product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
