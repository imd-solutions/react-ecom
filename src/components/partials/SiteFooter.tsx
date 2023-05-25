import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/logo/logo.png";
import { iApplication } from "../../types/Application";
import { iLink } from "../../types/Link";
import Nav from "react-bootstrap/esm/Nav";

interface iFooter extends iApplication {
  links: iLink[];
}

export default function SiteFooter({ name, version, links }: iFooter) {
  return (
    <footer
      className="text-center text-lg-start text-muted mt-3"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <section className="">
        <div className="container text-center text-md-start pt-4 pb-4">
          <div className="row mt-3">
            <div className="col-12 col-lg-3 col-sm-12 mb-2">
              <NavLink to="/">
                <img src={logo} height="35" />
              </NavLink>
              <p className="mt-2 text-dark">© 2023 Copyright: {name}</p>
            </div>

            <div className="col-6 col-sm-4 col-lg-2">
              <h6 className="text-uppercase text-dark fw-bold mb-2">Pages</h6>
              <ul className="list-unstyled mb-4">
                <li>
                  <Nav.Link to={`/`} as={NavLink}>
                    Home
                  </Nav.Link>
                </li>
                {links.map((link, i) => (
                  <li key={i}>
                    <Nav.Link to={link.to} as={NavLink}>
                      {link.title}
                    </Nav.Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-6 col-sm-4 col-lg-2">
              {/* <h6 className="text-uppercase text-dark fw-bold mb-2">
                Information
              </h6>
              <ul className="list-unstyled mb-4">
                <li>
                  <a className="text-muted" href="#">
                    Help center
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Money refund
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Shipping info
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Refunds
                  </a>
                </li>
              </ul> */}
            </div>

            <div className="col-6 col-sm-4 col-lg-2">
              {/* <h6 className="text-uppercase text-dark fw-bold mb-2">Support</h6>
              <ul className="list-unstyled mb-4">
                <li>
                  <a className="text-muted" href="#">
                    Help center
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Documents
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    Account restore
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="#">
                    My orders
                  </a>
                </li>
              </ul> */}
            </div>

            <div className="col-12 col-sm-12 col-lg-3">
              <h6 className="text-uppercase text-dark fw-bold mb-2">
                Newsletter
              </h6>
              <p className="text-muted">
                Stay in touch with latest updates about our products and offers
              </p>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control border"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-light border shadow-0"
                  type="button"
                  id="button-addon2"
                  data-mdb-ripple-color="dark"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
          <p>Version: {version}</p>
        </div>
      </section>
    </footer>
  );
}
