import {makeTodo, makeProject} from "./make.js";

const database = {};

const btnActions = () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => btn.addEventListener('click', action));

  function action(e) {
    switch (e.target.name) {
      case "newProject":
        database["newProject"] = makeProject("ciaone", "green");
        console.log(database);
        break;
      case "newTodo":

        break;
      case "delete":

        break;
      case "checkbox":

        break;
      default:
        break;
    }
  }
}

btnActions();