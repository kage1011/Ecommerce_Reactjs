import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import ProductViewModal from "../src/components/ProductViewModal";
import Home from "../src/pages/Home";
import Catalog from "../src/pages/Catalog";
import Cart from "../src/pages/Cart";
import Product from "../src/pages/Product";

import Routes from "./routes/Routes";
function App(props) {
  console.log("props", props);
  return (
    <BrowserRouter>
      <>
        {/* <Route
        render={(props) => (
          <div> */}
        <Header {...props} />
        <div className="container">
          <div className="main">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/catalog/:slug" component={Product} />
              <Route path="/catalog" component={Catalog} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </div>
        </div>
        <Footer />
        <ProductViewModal />
        {/* </div>
        )}
      /> */}
      </>
    </BrowserRouter>
  );
}

export default App;
