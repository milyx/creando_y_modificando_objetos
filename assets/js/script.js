const pacientes = [
  {
    nombre: "Franco Urra",
    edad: 47,
    rut: "12345678-9",
    diagnostico: "Hipertensión Arterial",
  },
  {
    nombre: "Matías Mesa",
    edad: 27,
    rut: "12345678-9",
    diagnostico: "Diabetes Mellitus 1",
  },
  {
    nombre: "Enrique Flores",
    edad: 37,
    rut: "12345678-9",
    diagnostico: "Disfunción de la vista",
  },
  {
    nombre: "Milagros Acosta",
    edad: 17,
    rut: "12345678-9",
    diagnostico: "Hipertensión Pulmonar",
  },
  {
    nombre: "Victor Fernandez",
    edad: 47,
    rut: "12345678-9",
    diagnostico: "Diabetes Mellitus 2",
  },
  {
    nombre: "Is Pinto",
    edad: 15,
    rut: "12345678-9",
    diagnostico: "Pancreatitis Aguda",
  },
  {
    nombre: "Francisco Lobos",
    edad: 2,
    rut: "12345678-9",
    diagnostico: "Neuroblastoma",
  },
  {
    nombre: "Jean Jaque",
    edad: 67,
    rut: "12345678-9",
    diagnostico: "Enfermedad de Parkinson",
  },
  {
    nombre: "Cesar Riveros",
    edad: 87,
    rut: "12345678-9",
    diagnostico: "Alopecia por Radiación",
  },
  {
    nombre: "Joshua Espinoza",
    edad: 77,
    rut: "12345678-9",
    diagnostico: "Enfermedad de Creutzfeldt-Jakob",
  },
];

class Paciente {
  constructor(nombre, edad, rut, diagnostico) {
    this._nombre = () => nombre;
    this._edad = () => edad;
    this._rut = () => rut;
    this._diagnostico = () => diagnostico;
  }
  get nombre() {
    return this._nombre();
  }
  get edad() {
    return this._edad();
  }
  get rut() {
    return this._rut();
  }
  get diagnostico() {
    return this._diagnostico();
  }
  imprimirDatos(id, index) {
    const data = document.getElementById(id);
    data.innerHTML += `
      <tr>
        <td>${index}</td>
        <td>${this.nombre}</td>
        <td>${this.edad}</td>
        <td>${this.rut}</td>
        <td>${this.diagnostico}</td>
      </tr>
     `;
  }
}

for (let i = 1; i <= pacientes.length; i++) {
  let paciente = new Paciente(
    pacientes[i - 1].nombre,
    pacientes[i - 1].edad,
    pacientes[i - 1].rut,
    pacientes[i - 1].diagnostico
  );
  
  paciente.imprimirDatos("idpacientes", i);
}

const buscar = () => {
  const data = document.getElementById("idpacientes");
  data.innerHTML = "";

  const info = document.getElementById("busqueda").value;

  console.log(info);

  for (let i = 1; i <= pacientes.length; i++) {
    if (info === pacientes[i - 1].nombre || info === "") {
      let paciente = new Paciente(
        pacientes[i - 1].nombre,
        pacientes[i - 1].edad,
        pacientes[i - 1].rut,
        pacientes[i - 1].diagnostico
      );
      paciente.imprimirDatos("idpacientes", i);
    }
  }
};

//const paciente1 = new Paciente('Franco Urra', 47, '12345578-9', 'Hipertension Arterial');
//console.log(paciente1.nombre);
//paciente1.imprimirDatos("idpacientes");
