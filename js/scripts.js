document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.querySelector('form[aria-label="Task Form"]');
    const taskList = document.querySelector('#taskList');
    const filterSelect = document.querySelector('#filterSelect');
    let tasks = []; // This will hold all tasks
  
    // Event listener for adding tasks
    taskForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form from reloading the page
  
      const name = document.querySelector('#taskName').value.trim();
      const desc = document.querySelector('#taskDesc').value.trim();
      const date = document.querySelector('#taskDate').value;
  
      if (!name || !desc || !date) {
        alert('Please fill in all fields.');
        return;
      }
  
      // Create a task object
      const task = {
        name,
        description: desc,
        dueDate: new Date(date),
      };
  
      // Add task to the tasks array
      tasks.push(task);
  
      // Clear the form fields
      taskForm.reset();
  
      // Render tasks after adding
      renderTasks();
  
      alert('Task added successfully!');
    });
  
    // Function to render tasks
    function renderTasks() {
      // Clear current task list
      taskList.innerHTML = '';
  
      // Sort tasks based on the selected filter
      const filterValue = filterSelect.value;
  
      let sortedTasks = [...tasks]; // Create a shallow copy of the tasks array
  
      if (filterValue === 'alphabetical') {
        // Sort tasks alphabetically by name
        sortedTasks.sort((a, b) => a.name.localeCompare(b.name));
      } else if (filterValue === 'date') {
        // Sort tasks by due date (ascending)
        sortedTasks.sort((a, b) => a.dueDate - b.dueDate);
      }
  
      // Render sorted tasks to the task list
      sortedTasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('list-group-item');
  
        taskItem.innerHTML = `
          <strong>${task.name}</strong><br>
          <small class="text-muted">Due: ${task.dueDate.toLocaleDateString()}</small><br>
          <p>${task.description}</p>
        `;
  
        taskList.appendChild(taskItem);
      });
    }
  
    // Event listener for filter change
    filterSelect.addEventListener('change', renderTasks);
  });
  
// JavaScript function for the "Hire Now" button
document.addEventListener('DOMContentLoaded', function () {
    const hireButton = document.querySelector('#hireBtn');
    
    hireButton.addEventListener('click', function() {
      alert('You have successfully hired this gladiator');
    });
  });
  