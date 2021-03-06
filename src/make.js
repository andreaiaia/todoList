const todoFactory = (title, dueDate, priority, description, notes) => {
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

const projectFactory = (title, color) => {
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

export {todoFactory as makeTodo, projectFactory as makeProject}

// const database = {};
// const _newProject = projectFactory('default', 'red');
// database["default"] = _newProject;
// const _newTodo = todoFactory((all the variables needed));
// database["default"]["_newTodo"] = _newTodo;