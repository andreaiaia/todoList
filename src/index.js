import {makeTodo, makeProject} from "./make.js";
import {makeQuery, deleteQuery} from "./DOM.js";

const database = {};

const btnActions = () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => btn.addEventListener('click', action));

  function action(e) {
    switch (e.target.name) {
      case "newProject":
        makeQuery();
        //getTitleandColor(e);
        //database["newProject"] = makeProject("ciaone", "green");
        //console.log(database);
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
  function getTitleandColor(e) {
    //makeQuery();
  }
}

btnActions();