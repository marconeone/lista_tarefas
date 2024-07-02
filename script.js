function addTask() {
    const taskInput = document.getElementById('inserir_tarefa');
    const taskList = document.getElementById('item');

    if (taskInput.value) {
        const li = document.createElement('li');
        li.textContent = taskInput.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.onclick = function() {
            li.classList.toggle('completed');
        };

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }
}
