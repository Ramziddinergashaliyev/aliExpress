import { Component, Fragment } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
        <Products />
        <Footer />
      </Fragment>
    );
  }
}
