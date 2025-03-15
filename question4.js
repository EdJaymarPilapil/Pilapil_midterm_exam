// In-memory task storage
let tasks = [];
let nextId = 1;

// Create - Add a new task
function addTask(name, description) {
    const newTask = {
        id: nextId++,
        name,
        description
    };
    tasks.push(newTask);
    return newTask;
}

// Read - Get all tasks
function getAllTasks() {
    return tasks;
}

// Read - Get task by ID
function getTaskById(id) {
    return tasks.find(task => task.id === id) || null;
}

// Update - Update a task
function updateTask(id, updatedData) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) return null;
    
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedData };
    return tasks[taskIndex];
}

// Delete - Remove a task
function deleteTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) return false;
    
    tasks.splice(taskIndex, 1);
    return true;
}

// Test the CRUD operations
console.log("Adding tasks:");
addTask("Homework", "Complete JavaScript assignment");
addTask("Shopping", "Buy groceries");
console.log(getAllTasks());

console.log("\nUpdating task 1:");
updateTask(1, { name: "Urgent Homework" });
console.log(getTaskById(1));

console.log("\nDeleting task 2:");
deleteTask(2);
console.log(getAllTasks());