import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { useLocation } from "react-router-dom";
import { iProduct } from "../../types/Product";

export default function BreadCrumbs() {
  const routes = [
    { path: "/store/:id", breadcrumb: "" },
    { path: "/store", breadcrumb: "Store" },
    { path: "/home", breadcrumb: "Home" },
    { path: "/store/:id", breadcrumb: "Apple" },
    { path: "/contact", breadcrumb: "Contact Us" },
  ];
  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation();

  const productNameById: iProduct[] = [
    { id: 1, title: "Apple", price: 0.0, qty: 0, sale: 0, rating: 0 },
    { id: 2, title: "Banana", price: 0.0, qty: 0, sale: 0, rating: 0 },
    { id: 3, title: "Mango", price: 0.0, qty: 0, sale: 0, rating: 0 },
    { id: 4, title: "Pear", price: 0.0, qty: 0, sale: 0, rating: 0 },
    { id: 5, title: "Orange", price: 0.0, qty: 0, sale: 0, rating: 0 },
  ];

  function searchProductName(productId: any) {
    const product = productNameById.find(
      (o) => o.id === parseInt(productId.props.children)
    );

    if (product) {
      return product.title;
    }
    return productId;
  }

  return (
    <div className="bg-danger mb-3">
      <div className="container py-4">
        <nav className="d-flex">
          <h6 className="mb-0">
            {breadcrumbs.map(({ match, breadcrumb }, i) => (
              <span key={i}>
                {match.pathname !== location.pathname ? (
                  <NavLink to={match.pathname} className={"text-white-50"}>
                    <span className={"px-1"}>{breadcrumb}</span>/
                  </NavLink>
                ) : (
                  <span className={"text-white ps-1"}>
                    {searchProductName(breadcrumb)}
                  </span>
                )}
              </span>
            ))}
          </h6>
        </nav>
      </div>
    </div>
  );
}
