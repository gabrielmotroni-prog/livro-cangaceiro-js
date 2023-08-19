import { handleStatus } from "./utils/promise-helpers.js";

//listar dados na home
document.querySelector("#myButton").onclick = () =>
  fetch("http://localhost:3000/notas")
    //tratamento para resposstas diferentes de ok
    .then(handleStatus)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
console.log("oi");
