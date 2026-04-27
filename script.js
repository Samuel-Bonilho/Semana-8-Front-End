let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  const lista = document.getElementById('lista');
  lista.innerHTML = '';
  tasks.forEach((task, index) => {
    lista.innerHTML += `
      <li class="todo-item">
        <span class="${task.completed ? 'completed' : ''}" 
          onclick="toggleComplete(${index})">
          ${task.text}
        </span>
        <button onclick="removeTask(${index})">Remover</button>
      </li>`;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById('input');
  if (input.value.trim() === '') return;
  tasks.push({ text: input.value, completed: false });
  input.value = '';
  renderTasks();
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();