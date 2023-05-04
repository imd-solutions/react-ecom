import { iProduct } from "../types/Product";
import NewPill from "./NewPill";
import SalePill from "./SalePill";
import ProductPrice from "./ProductPrice";
import StarRating from "./StarRating";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StoreItem(product: iProduct) {
  return (
    <div>
      <div className="p-6 bg-white p-2">
        {product.new ? <NewPill /> : <span className="badge">&nbsp;</span>}
        {product.sale > 0 ? (
          <SalePill sale={product.sale} />
        ) : (
          <span className="badge">&nbsp;</span>
        )}
        <NavLink
          to={"/store/" + product.id}
          className="d-block px-6 mt-6 mb-2 link-dark text-decoration-none"
        >
          <img
            className="mb-5 mx-auto w-100 img-fluid"
            style={{ height: "224px", objectFit: "contain" }}
            src={product.imgUrl}
            alt=""
          />
          <div className="row">
            <div className="col-6">
              <h5 className="mb-2">{product.title}</h5>
              <ProductPrice {...product} />
            </div>
            <div className="col-6">
              <StarRating rating={product.rating} />
            </div>
          </div>
        </NavLink>
        <div className="row px-3 justify-content-between ">
          <NavLink
            to={"/store/" + product.id}
            className="d-flex align-items-center justify-content-center border rounded-3"
            style={{ width: "48px", height: "48px" }}
          >
            <FontAwesomeIcon icon="eye" />
          </NavLink>
          <NavLink
            to={"/store/" + product.id}
            className="col-6 d-flex align-items-center justify-content-center border rounded-3"
            style={{ width: "48px", height: "48px" }}
          >
            <FontAwesomeIcon icon="plus" color="red" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
