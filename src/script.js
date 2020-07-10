// import dom stuff

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

  return {
    sayTitle,
    sayDueDate,
    sayDescription,
    sayPriority,
    sayNotes,
  }
}
// const _newTodo = todoFactory((all the variables needed));
// default[_newTodo] = _newTodo;

const projectFactory = (title, color) => {
  const _title = title;
  const _color = color;

  const sayTitle = () => {return _title};
  const sayColor = () => {return _color};

  return {
    sayTitle,
    sayColor,
  }
}
// const _newProject = projectFactory((all the variables needed));
// database[_newProject] = _newProject;

var database = {
  default:{
    esempio:{
      dueDate : "12/12/20",
      priority : 5,
      description : "this is an example",
      notes : "here you can put any extra information that is needed for the Todo"
    },
  },
};