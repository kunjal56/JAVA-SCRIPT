document.addEventListener('DOMContentLoaded', function () {
    loadTasks(); // Load tasks from local storage on page load
});

function addTask() {
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;

    // Validation
    if (!title || !dueDate) {
        alert('Title and Due Date are required.');
        return;
    }

    const task = {
        id: Date.now().toString(), // Use timestamp as a unique identifier
        title,
        description,
        dueDate,
        priority,
    };

    saveTask(task); // Save task to local storage
    displayTasks(); // Display tasks on the page

    // Clear input fields
    titleInput.value = '';
    descriptionInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = 'low';
}

function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear existing tasks

    const tasks = getTasks(); // Retrieve tasks from local storage

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span><strong>Title:</strong> ${task.title}</span>
            <span><strong>Description:</strong> ${task.description}</span>
            <span><strong>Due Date:</strong> ${task.dueDate}</span>
            <span><strong>Priority:</strong> ${task.priority}</span>
            <button onclick="editTask('${task.id}')">Edit</button>
            <button onclick="deleteTask('${task.id}')">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function saveTask(task) {
    const tasks = getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function loadTasks() {
    displayTasks();
}

function editTask(taskId) {
    const tasks = getTasks();
    const taskToEdit = tasks.find(task => task.id === taskId);

    if (taskToEdit) {
        // Populate the form fields with existing task data
        document.getElementById('title').value = taskToEdit.title;
        document.getElementById('description').value = taskToEdit.description;
        document.getElementById('due-date').value = taskToEdit.dueDate;
        document.getElementById('priority').value = taskToEdit.priority;

        // Display "Update" button instead of "Add Task"
        const addButton = document.querySelector('#task-form button');
        addButton.textContent = 'Update Task';
        addButton.onclick = function () {
            updateTask(taskId);
        };
    }
}

function updateTask(taskId) {
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;

    // Validation
    if (!title || !dueDate) {
        alert('Title and Due Date are required.');
        return;
    }

    const updatedTask = {
        id: taskId,
        title,
        description,
        dueDate,
        priority,
    };

    const tasks = getTasks();
    const updatedTasks = tasks.map(task => (task.id === taskId ? updatedTask : task));
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    // Display "Add Task" button again
    const addButton = document.querySelector('#task-form button');
    addButton.textContent = 'Add Task';
    addButton.onclick = addTask;

    // Clear input fields
    titleInput.value = '';
    descriptionInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = 'low';

    // Display the updated tasks
    displayTasks();
}
