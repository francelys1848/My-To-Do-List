let tasks =[];

$(".addNew").click(function() {
   
    let task = $(".newToDo").val();
    tasks.push(task);
   
  let tasksone = task.length;
   
    $(".numTask").empty();
    $(".ToDoList").empty();
   
    for (let t of tasks){
    $(".ToDoList").append("<li>" + t + "</li>");}  
   
    $(".newToDo").val("");
    $(".numTasks").text(tasks.length);
});

$(".Clearlast").click(function(){
       tasks.splice(0,1);    
     $(".ToDoList").empty();
   
    for (let t of tasks){
    $(".ToDoList").append("<li>" + t + "</li>");}  
});
