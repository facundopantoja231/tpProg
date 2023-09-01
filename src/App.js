import React from "react";
import Formulario from "./comp/Formulario";
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import Listado from "./comp/Listado";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <div className="form">
          <Formulario />
          <Listado />
        </div>
        <Footer />
      </div>
    );
  }
}
