function addTask() {
    const taskInput = document.getElementById('inserir_tarefa');
    const taskList = document.getElementById('item');

    if (taskInput.value) {
        const li = document.createElement('li');
        li.textContent = taskInput.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.onclick = function() {
            if (confirm('Tem certeza que deseja deletar esta tarefa?')) {
                taskList.removeChild(li);
            }
        };

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'complete';
        completeButton.onclick = function() {
            li.classList.toggle('completed');
        };

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }
}

async function saveAsPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const taskItems = document.querySelectorAll('#item li');
    let text = '';

    taskItems.forEach((item, index) => {
        text += `${index + 1}. ${item.textContent.replace('DeleteComplete', '').trim()}\n`;
    });

    doc.text(text, 10, 10);
    doc.save('lista_de_tarefas.pdf');
}
