var todoApp = (function(){
    let tasks = [];
    const taskList = document.getElementById('list');
    const addTaskInput = document.getElementById('add');
    let tasksCounter = document.getElementById('tasks-counter');

    // console.log('Working');
    async function fetchAPI(){
        try{
            console.log("api 1")
            var result = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await result.json();
            tasks = data.slice(0,10);
            console.log("api fetched")
            renderList();
        }catch(error){
            console.log(error);
        }
        // fetch('https://jsonplaceholder.typicode.com/todos')
        // .then(function(response){
        //         return (response.json());
        //     }
        // ).then(function(response){
            
        //     tasks = response.slice(0,10);
        //     console.log(tasks);
        //     renderList();
        // })
        // .catch(function(data)
        // {
        //     console.log( "Error " + data);
        //     alert("Could not fetch the API")
        // })
        
        

    }
    function addTaskToDOM(task)
    {
        var li = document.createElement('li');
        li.innerHTML =`
            <input type="checkbox" id="${task.id}" ${task.completed ? `checked`:``} class="custom-checkbox">
            <label for="${task.id}">${task.title}</label>
            <img src="bin.svg" class="delete" data-id="${task.id}" />
        `;
        taskList.append(li);
    }
    function renderList () {
    taskList.innerHTML = '';
    for(let i=0;i<tasks.length;i++)
    {
        addTaskToDOM(tasks[i]);
    }
    tasksCounter.innerHTML= tasks.length;
    //tasksCounter.innerHTML = tasksCounter;
    }

    function markTaskAsComplete (taskId) {
        for(let i=0;i<tasks.length;i++)
        {
            if(tasks[i].id == taskId){
                tasks[i].completed = !tasks[i].completed;
                renderList();
                showNotification("Task toggled successfully !!");
                return;
            }
        }
        showNotification("Could not toggle the task(no such task exist with id "+ taskId +")");
    }

    function deleteTask (taskId) {
        const newTasks = tasks.filter((task) =>{
            return task.id != taskId;
        });
        tasks = newTasks;
        renderList();
        showNotification("Task Deleted successfully!!");
    }

    function addTask (task) {
        if(task)
        {
            tasks.push(task);
            console.log("Task added");
            showNotification("Task Added successfully!")
            renderList();
            return;
        }
        showNotification("Task can not be added.");
    }

    function showNotification(text) {
        window.alert(text);
    }

    function handleInput(e)
    {
        if(e.key == "Enter")
        {
            const text = e.target.value;
            console.log("Enter pressed" , text);
            if(!text)
            {
                showNotification("pls Enter valid text");
                return;
            }
            const task = {
                title : text,
                id : Date.now().toString(),
                completed : false//unchecked
            };
            e.target.value = '';
            addTask(task);``
            
        }
    }
    function handleClickInput(e)
    {
        var target = e.target;
        console.log(target);
        if(target.className == "delete")
        {
            // console.log("clicked on delete");
            var taskId = target.dataset.id;
            // console.log(taskId);
            deleteTask(taskId);
        }
        else if(target.className == "custom-checkbox")
        {
            var taskId = target.id;
            markTaskAsComplete(taskId);
        }
    }
    function intializeApp(){
        fetchAPI();
        document.addEventListener("click", handleClickInput);
        addTaskInput.addEventListener("keyup", handleInput);
    }
    intializeApp();
    return {
        // tasks : tasks,
        intialize : intializeApp
    }
})();