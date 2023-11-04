import { viewController } from "./view/viewController.js";
import { Usuario } from "./model/usuario.model.js";

let data = [];

const types = { SAVE: 0, UPDATE: 1, DELETE: 2 };
let currentIndex = null;
let submitState = types.SAVE;


const handleSubmit = (event) => {
  event.preventDefault();
  const usr = new Usuario(nome.value, idade.value, login.value, senha.value);
  if (submitState == types.SAVE) {
    saveData(usr);
  } else if (submitState == types.UPDATE) {
    updateData(currentIndex, usr);
    submitState = types.SAVE;
    btnSub.innerText = "Save";
  }
  viewController.update(data, new Usuario("", 0, "", ""));
  console.log(data)
};

const saveData = (newData) => {
  data.push(newData);
};

const updateData = (index, value) => {
  data[index] = value;
};

const deleteData = (index) => {
  data.splice(index, 1);
  viewController.update(data, new Usuario("", 0, "", ""));
};
const callForUpdate = (event) => {
  alert("Butuo esquerdo - data went up");

  currentIndex = event.target.closest("tr").id.split("")[4];
  submitState = types.UPDATE;
  btnSub.innerText = "Update";
  console.log(data[currentIndex]);
  viewController.updateForm(data[currentIndex]);
};
const callForDelete = (event) => {
  event.preventDefault();
  if (event.button === 2) {
    alert("Butou direito - go to delete");
    currentIndex = event.target.closest("tr").id.split("")[4];
    let confirmDelete = window.confirm("Opa! Vai deletar mesmo isso ai?");
    if (confirmDelete) {
      deleteData(currentIndex);
    }
  }
};

const controller = {
  iniciar: () => {
    viewController.build();
    const form = document.getElementById("signForm");
    form.addEventListener("submit", handleSubmit);
    const userListElement = document.getElementById("users-result");
    userListElement.addEventListener("click", callForUpdate);
    userListElement.addEventListener("contextmenu", callForDelete);
  },
};

export { controller };
