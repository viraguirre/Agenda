let tasks = [];

function addTask() {
    const newTask = prompt("Ingrese la nueva tarea:");
    if (newTask) {
        tasks.push(newTask);
        updateTaskList();
    }
}

function showTasks() {
    let taskList = "Lista de tareas:\n";
    tasks.forEach((task, index) => {
        taskList += `${index + 1}. ${task}\n`;
    });
    alert(taskList);
}

function deleteTask() {
    const indexToDelete = parseInt(prompt("Ingrese el número de tarea que desea eliminar:")) - 1;
    if (indexToDelete >= 0 && indexToDelete < tasks.length) {
        const deletedTask = tasks.splice(indexToDelete, 1);
        alert(`Tarea "${deletedTask}" eliminada.`);
        updateTaskList();
    } else {
        alert("Índice inválido.");
    }
}

function updateTaskList() {
    const taskListDiv = document.getElementById("taskList");
    taskListDiv.innerHTML = "<ul>";
    tasks.forEach((task, index) => {
        taskListDiv.innerHTML += `<li>${index + 1}. ${task}</li>`;
    });
    taskListDiv.innerHTML += "</ul>";
}


