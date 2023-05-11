interface ProductSale {
  sale: number;
}

export default function SalePill(product: ProductSale) {
  function salePrice(sale: number): string {
    return `-${sale}%`;
  }

  return (
    <div className="float-end">
      <span className="badge bg-transparent border border-2 border-danger rounded-pill fw-bold text-danger">
        {salePrice(product.sale)}
      </span>
    </div>
  );
}
