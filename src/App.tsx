import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import SiteNavbar from "./components/partials/SiteNavbar";
import SiteFooter from "./components/partials/SiteFooter";
import ApplicationService from "./services/ApplicationService";
import { iApplication } from "./types/Application";
import { useEffect, useState } from "react";
import { iLink } from "./types/Link";

function App() {
  const links: iLink[] = [
    { to: "/about", title: "About" },
    { to: "/store", title: "Store" },
    { to: "/contact-us", title: "Contact" },
  ];
  const [application, setApplication] = useState<iApplication>({
    name: "",
    version: "",
  });

  useEffect(() => {
    const products = async () => {
      const response = await ApplicationService.getApplication();

      setApplication(response.data);
    };
    products();
  }, []);
  return (
    <>
      <SiteNavbar links={links} />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/store/:id" element={<Product />} />
        </Routes>
      </Container>
      <SiteFooter
        name={application.name}
        version={application.version}
        links={links}
      />
    </>
  );
}

export default App;
