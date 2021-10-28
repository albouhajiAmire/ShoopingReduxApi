import Header from "./containers/components/Header";
import ProductDetails from "./containers/components/ProductDetails";
import ProductListing from "./containers/components/ProductListing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
