import { viewController } from "./view/viewController.js";
import { Usuario } from "./model/usuario.model.js";

let data = [];

const saveData = (event) => {
  event.preventDefault();
  const newData = new Usuario(
    nome.value,
    idade.value,
    login.value,
    senha.value
  );
  data.push(newData);

  viewController.update(data, new Usuario("", 0, "", ""));
};

const callForUpdate = (event) => {
  alert("left flick ");
  console.log(event.target.closest(""));
};
const callForDelete = (event) => {
  event.preventDefault();
  if (event.button === 2) {
    console.log(event.target.getRootNode());
  }
};

const controller = {
  iniciar: () => {
    viewController.build();
    const form = document.getElementById("signForm");
    form.addEventListener("submit", saveData);

    const userListElement = document.getElementById("users-result");
    userListElement.addEventListener("click", callForUpdate);
    userListElement.addEventListener("contextmenu", callForDelete);
  },
};

export { controller };
