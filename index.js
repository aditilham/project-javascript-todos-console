let showTodoList = () => {
    for (task of tasks) {
        printTask(task);
    }
}

let printTask = (task) => {
    outputString = ""
    outputString += (task.status == "Completed" ? "✔ " : "✕ ")
    outputString += (task.name)
    console.log(outputString)
    alert(outputString)
}
let searchTodoList = (searchKey) => {
    console.log(`Matching items with keyword "${searchKey}"`);
    alert(`Matching items with keyword "${searchKey}"`)
    for (task of tasks) {
        if (task.name.toLowerCase().includes(searchKey.toLowerCase())) {
            printTask(task)
        }
    }
}
let addTodoList = (newName, newPriority, newStatus) => {
    let newTodo = {
        name: newName,
        priority: newPriority,
        status: newStatus
    }
    tasks.push(newTodo)
}

let menu = 0;

while (menu == 0) {
    let menuInput = parseInt(prompt('What do you want to? 1.Show ToDo List 2.Search ToDo 3.Input New ToDo 4.Exit'))
    switch (menuInput) {
        case 1:
            showTodoList();
            break;
        case 2:
            let searchEngine = prompt('Who are you looking for?')
            searchTodoList(searchEngine);
            break;
        case 3:
            let addName = prompt('Input new objective')
            let addPriority = prompt('Input the priority (Major/Minor)')
            let addStatus = prompt('Input the status (Complete/Incomplete)')
            addTodoList(addName, addPriority, addStatus)
            break;
        case 4:
            menu = 1;
            break;
        default:
            alert('There is no option for that')
            break;
    }
}
alert('Thanks for using ToDo console, all data that you already input will be automatically deleted.')