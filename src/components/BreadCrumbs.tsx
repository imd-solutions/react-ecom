import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { useLocation, useSearchParams } from "react-router-dom";
import { iProduct } from "../types/Product";

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
    <Container>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {breadcrumbs.map(({ match, breadcrumb }, i) => (
            <li
              className={`breadcrumb-item ${
                match.pathname === location.pathname ? "active" : ""
              }`}
              key={i}
            >
              {match.pathname !== location.pathname ? (
                <NavLink key={i} to={match.pathname}>
                  {breadcrumb}
                </NavLink>
              ) : (
                searchProductName(breadcrumb)
              )}
            </li>
          ))}
        </ol>
      </nav>
    </Container>
  );
}
