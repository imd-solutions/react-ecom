import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { iLink } from "../types/Link";
import { iButton } from "../types/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BreadCrumbs from "./BreadCrumbs";

export default function SiteNavbar() {
  const cartItemCount = 0;
  const links: iLink[] = [
    { to: "/about", title: "About" },
    { to: "/store", title: "Store" },
    { to: "/contact-us", title: "Contact" },
  ];

  const buttons: iButton[] = [
    { title: "Login", variant: "danger", css: "me-2" },
    {
      title: "",
      variant: "outline-danger",
      icon: "cart-shopping",
      css: "rounded-circle",
      style: { width: "3rem", height: "3rem", position: "relative" },
      additional: {
        css: "rounded-circle bg-danger d-flex justify-content-center align-item-center",
        style: {
          color: "#fff",
          height: "1.5rem",
          width: "1.5rem",
          position: "absolute",
          bottom: 0,
          right: 0,
          transform: "translate(25%, 25%)",
        },
      },
    },
  ];
  return (
    <div>
      <Navbar sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
          <Nav className="me-auto">
            {links.map((link, i) => (
              <Nav.Link to={link.to} as={NavLink} key={i}>
                {link.title}
              </Nav.Link>
            ))}
          </Nav>
          {buttons.map((button, i) => (
            <div key={i}>
              <Button
                variant={button.variant}
                className={button.css}
                style={button.style}
              >
                {button.icon ? (
                  <FontAwesomeIcon icon={button.icon} className="me-2" />
                ) : (
                  ""
                )}
                {button.title}
                {button.additional && cartItemCount ? (
                  <div
                    className={button.additional.css}
                    style={button.additional.style}
                  >
                    {cartItemCount}
                  </div>
                ) : (
                  ""
                )}
              </Button>
            </div>
          ))}
        </Container>
      </Navbar>
      <BreadCrumbs />
    </div>
  );
}
