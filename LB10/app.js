if (typeof (Storage) !== "undefined") {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
} else {
    var tasks = [];
}

function displayTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
        var li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);
    });
}

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var task = taskInput.value.trim();

    if (task !== "") {
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
        taskInput.value = "";
        broadcastTask(task);
    }
}

function deleteAllTasks() {
    tasks = [];
    localStorage.removeItem("tasks");
    displayTasks();
}

function broadcastTask(task) {
    if (BroadcastChannel) {
        var channel = new BroadcastChannel("task_channel");
        channel.postMessage(task);
    }
}

displayTasks();

if (BroadcastChannel) {
    var channel = new BroadcastChannel("task_channel");
    channel.onmessage = function (event) {
        tasks.push(event.data);
        displayTasks();
    };
}
