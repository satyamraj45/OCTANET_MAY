function addTask() {
    var input = document.getElementById("taskInput");
    var taskName = input.value.trim();
    if (taskName !== "") {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        var task = document.createElement("div");
        task.classList.add("task");
        task.innerHTML = `
            <span>${taskName}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        li.appendChild(task);
        taskList.appendChild(li);
        input.value = "";
    }
}

function completeTask(button) {
    var task = button.parentElement;
    task.classList.toggle("complete");
}

function deleteTask(button) {
    var task = button.parentElement;
    var li = task.parentElement;
    li.remove();
}