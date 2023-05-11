import { iProduct } from "../../../types/Product";

export default function ProductPrice(product: iProduct) {
  function productPrice(price: number, sale: number) {
    if (sale > 0) {
      const discount = price * (sale / 100);
      return `£${(price - discount).toFixed(2)}`;
    }
    return `£${price.toFixed(2)}`;
  }
  function salePrice(price: number, sale: number) {
    if (sale > 0) {
      return `£${price.toFixed(2)}`;
    }
    return "";
  }
  return (
    <div className="row">
      <p className="h6 text-info col-6">
        {productPrice(product.price, product.sale)}
      </p>
      <span className="small text-muted fw-normal text-decoration-line-through col-6">
        {salePrice(product.price, product.sale)}
      </span>
    </div>
  );
}
