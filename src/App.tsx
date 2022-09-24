import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

//@ts-ignore
import { Home, Store, About } from "./pages";
//@ts-ignore
import { Navbar } from "./components";
//@ts-ignore
import { ShoppingCartProvider } from "./context";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/react-ts-shopping-cart/" element={<Home />} />
            <Route path="/react-ts-shopping-cart/about" element={<About />} />
            <Route path="/react-ts-shopping-cart/store" element={<Store />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
