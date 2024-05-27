// Definición de array para almacenar las tareas
let tasks = [];

// Función para agregar una tarea
function addTask(task) {
    tasks.push(task);
    console.log(`Tarea "${task}" agregada.`);
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
        console.log(`Tarea "${deletedTask}" eliminada.`);
    } else {
        console.log("Índice inválido.");
    }
}

// Función para ejecución
function main() {
    alert("¡Bienvenido a tu nueva lista de tareas!");

    let option = "";

    while (option !== "Salir") {
        option = prompt("Ingrese '1' para agregar una tarea, '2' para mostrar todas las tareas, '3' para eliminar una tarea o '4' para salir:");

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
                console.log("¡Hasta luego!");
                break;
            default:
                console.log("Opción no válida.");
        }
    }
}

// Llamar a la función para ejecución
main();