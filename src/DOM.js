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


export {makeQuery as makeQuery, deleteQuery as deleteQuery}
