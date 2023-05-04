import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import SiteNavbar from "./components/SiteNavbar";

function App() {
  return (
    <>
      <SiteNavbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/store/:id" element={<Product />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
