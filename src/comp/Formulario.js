import React from "react";
import Input from "./Input";
import Boton from "./Boton";
export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: "",
      Materia: "",
      Docente: "",
      HsCatedras: "",
      Nota: ""
    };
  }

  render() {
    const { ID, Materia, Docente, HsCatedras, Nota } = this.state;
    return (
      <div className="Formulario">
        Formulario
        <Input
          titulo="ID"
          valor={ID}
          onChange={(valor) => this.setstate({ ID: valor })}
        />
        <Input
          titulo="Materia"
          valor={Materia}
          onChange={(valor) => this.setstate({ Materia: valor })}
        />
        <Input
          titulo="Docente"
          valor={Docente}
          onChange={(valor) => this.setstate({ Docente: valor })}
        />
        <Input
          titulo="HsCatedras"
          valor={HsCatedras}
          onChange={(valor) => this.setstate({ HsCatedras: valor })}
        />
        <div>
          <Input
            titulo="Nota"
            valor={Nota}
            onChange={(valor) => this.setstate({ Nota: valor })}
          />
        </div>
        <div>
          <Boton titulo="Guardar" onClick={() => alert("Hola")} />
        </div>
        <div>
          <Boton />
          <Boton />
        </div>
      </div>
    );
  }
}
