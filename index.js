// Definición de array para almacenar las tareas
let tasks = [];

// Función para agregar una tarea
function addTask(task) {
    tasks.push(task);
    alert(`Tarea "${task}" agregada.`);
}

// Función para mostrar todas las tareas
function showTasks() {
    alert("Lista de tareas:");
    tasks.forEach((task, index) => {
        alert(`${index + 1}. ${task}`);
    });
}

// Función para eliminar una tarea
function deleteTask(index) {
    if (index >= 0 && index < tasks.length) {
        const deletedTask = tasks.splice(index, 1);
        alert(`Tarea "${deletedTask}" eliminada.`);
    } else {
        alert("Índice inválido.");
    }
}

// Función para ejecución
function main() {
    alert("¡Bienvenido a tu nueva lista de tareas!");

    let option = "";

    while (option !== "Salir") {
        option = prompt("Ingrese una opción: \n '1' Agregar una tarea. \n '2' Mostrar todas las tareas. \n '3' Eliminar una tarea. \n '4' Salir.");
        switch (option) {
            case "1":
                const newTask = prompt("Ingrese la nueva tarea:");
                addTask(newTask);
                break;
            case "2":
                showTasks();
                break;
            case "3":
                const indexToDelete = parseInt(prompt("Ingrese el número de tarea que desea eliminar:")) - 1;
                deleteTask(indexToDelete);
                break;
            case "4":
                alert("¡Hasta luego!");
                break;
            default:
                alert("Opción no válida.");
        }
    }
}

// Llamada a la función para ejecución
main();