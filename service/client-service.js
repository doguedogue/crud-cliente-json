// const URL_SERVER_JSON = "http://localhost:3000/perfil";
const URL_SERVER_JSON = "https://my-json-server.typicode.com/doguedogue/my-json-server/perfil";


const listaClientes = () =>
  fetch(URL_SERVER_JSON).then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch(URL_SERVER_JSON, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

const eliminarCliente = (id) => {
  return fetch(URL_SERVER_JSON + "/" + id, {
    method: "DELETE",
  });
};

const detalleCliente = (id) => {
  return fetch(URL_SERVER_JSON + "/" + id).then((respuesta) =>
    respuesta.json()
  );
};

const actualizarCliente = (nombre, email, id) => {
  return fetch(URL_SERVER_JSON + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};
