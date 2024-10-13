
document.getElementById('add-btn').addEventListener('click', function() {
  const taskInput = document.getElementById('todo-input');
  const taskText = taskInput.value;

  if (taskText.trim() === '') {
    alert('Please enter a valid task!');
    return;
  }

  
  const li = document.createElement('li');
  li.innerHTML = `
    ${taskText}
    <button class="delete-btn">Delete</button>
  `;

  
  li.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  
  li.querySelector('.delete-btn').addEventListener('click', function(e) {
    e.stopPropagation(); 
    li.remove();
  });

  
  document.getElementById('todo-list').appendChild(li);

  
  taskInput.value = '';
});
