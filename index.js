document.addEventListener('DOMContentLoaded', () => {
    function addTask() {
        const taskInput = document.getElementById('taskInput');
        const taskValue = taskInput.value.trim();
        
        if (taskValue === '') {
            alert('Por favor, ingrese una tarea.');
            return;
        }
        
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskValue}</span>
            <button onclick="removeTask(this)">Eliminar</button>
            <input type="checkbox" onclick="toggleTask(this)">
        `;
        
        document.getElementById('taskList').appendChild(li);
        
        taskInput.value = '';
    }

    window.removeTask = function(button) {
        const li = button.parentElement;
        li.remove();
    }

    window.toggleTask = function(checkbox) {
        const li = checkbox.parentElement;
        if (checkbox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    }

    document.querySelector('button').addEventListener('click', addTask);

    document.getElementById('taskInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});