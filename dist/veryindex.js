const database = {};

const btnActions = () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => btn.addEventListener('click', action));

  const makeQuery = () => {
    const div = document.getElementById('projects');
    const query = document.createElement('div');
    query.classList.add('query');
    const name = document.createElement('textarea');
    name.rows = '1';
    name.cols = '15';
    name.placeholder = 'Project name';
    const color = document.createElement('textarea');
    color.rows = '1';
    color.cols = '15';
    color.placeholder = 'Choose a Color';
    query.appendChild(name);
    query.appendChild(color);
    div.appendChild(query);
  }
  
  const deleteQuery = () => {
    const query = document.querySelector('.query');
    query.parentNode.removeChild(query);
  }

  const makeTodo = (title, dueDate, priority, description, notes) => {
    const _title = title;
    const _dueDate = dueDate;
    const _priority = priority;
    const _description = description;
    const _notes = notes;
  
    const sayTitle = () => {return _title};
    const sayDueDate = () => {return _dueDate};
    const sayPriority = () => {return _priority};
    const sayDescription = () => {return _description};
    const sayNotes = () => {return _notes};
  
    const editTitle = (newTitle) => {_title = newTitle};
    const editDueDate = (newDueDate) => {_dueDate = newDueDate};
    const editPriority = (newPriority) => {_priority = newPriority};
    const editDescription = (newDescription) => {_description = newDescription};
    const editNotes = (newNotes) => {_notes = newNotes};
  
    return {
      sayTitle,
      sayDueDate,
      sayDescription,
      sayPriority,
      sayNotes,
      editDescription,
      editDueDate,
      editNotes,
      editPriority,
      editTitle,
    }
  }
  
  const makeProject = (title, color) => {
    const _title = title;
    const _color = color;
  
    const sayTitle = () => {return _title};
    const sayColor = () => {return _color};
  
    const editTitle = (newTitle) => {_title = newTitle};
    const editColor = (newColor) => {_Color = newColor};
  
    return {
      sayTitle,
      sayColor,
      editTitle,
      editColor,
    }
  }

  function action(e) {
    switch (e.target.name) {
      case "newProject":
        console.log("hello");
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