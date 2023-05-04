import { useEffect, useState } from "react";
import axios from "../utilities/axios";
import { iProduct } from "../types/Product";
import PageLoading from "../components/PageLoading";
import { Row, Col } from "react-bootstrap";
import StoreItem from "../components/StoreItem";

export default function Store() {
  const [spinner, setSpinner] = useState(true);
  const [data, setData] = useState<iProduct[]>([]);

  useEffect(() => {
    axios.get("/products").then((response) => {
      setSpinner(false);
      setData(response.data);
    });
  }, []);
  return (
    <div>
      <h2 className="mb-16 mb-md-24">Discover our products</h2>
      <Row xs={1} md={2} lg={3} className="g-3">
        {spinner ? <PageLoading /> : ""}
        {data.map((item, i) => (
          <Col key={i}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
