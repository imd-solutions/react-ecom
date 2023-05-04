import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../utilities/axios";
import { iProduct } from "../types/Product";
import PageLoading from "../components/PageLoading";
import ProductItem from "../components/ProductItem";

export default function Product() {
  const { id } = useParams();
  const [spinner, setSpinner] = useState(true);
  const [product, setProduct] = useState<iProduct>({
    id: 0,
    title: "",
    subTitle: "",
    description: "",
    price: 0,
    imgUrl: "",
    qty: 0,
    rating: 0,
    new: false,
    feature: false,
    sale: 0,
  });

  useEffect(() => {
    axios.get(`/products/${id}`).then((response) => {
      setSpinner(false);
      setProduct(response.data);
    });
  }, [id]);

  return (
    <div>
      {spinner ? <PageLoading /> : ""}
      <ProductItem {...product} />
    </div>
  );
}
