    const input = document.querySelector(".input") 
    const add = document.querySelector("#add")
//ONCLICK ADD =>
add.addEventListener('click', () => {
    const inputValue = input.value.trim()
    if (inputValue != 0){
       
        let task = JSON.parse(localStorage.getItem('task'))
        if (task === null){
            taskItem = []
        }else{
            taskItem = task;
        }

      taskItem.push(input.value)
      localStorage.setItem('task', JSON.stringify(taskItem))
    }
    
    
    warningMessage()
    clearInput()
})
function clearInput(){
    var clear= document.getElementById("clear");
    clear.value='';
}


//WARNING MESSAGE =>
function warningMessage(){
    const inputValue = input.value.trim()

    const warning = document.querySelector(".yellow");
    if(inputValue === ""){
       warning.style.display = "block"
    }else{
       warning.style.display = "none"
    }
}

//CREATE TODO LIST IN HTML =>
function CreateList(){
    let outPut = '';
    let taskListShow = document.querySelector("#customers");



    let task = JSON.parse(localStorage.getItem('task'))
        if (task === null){
            taskItem = []
        }else{
            taskItem = task;
        } 
        taskItem.forEach((data, index)=>{
           outPut += ` <tr>
           <td>(${data})</td>
           <td><i  class="remuve fa-regular fa-circle-check" onClick="deleteItem(${index})" ></i></td>
         </tr>`
        })  
        taskListShow.innerHTML  =  outPut ;
}
    
CreateList()

function deleteItem(index){
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    taskItem.splice(index,1)
    localStorage.setItem('task', JSON.stringify(taskItem))
    CreateList()
}

    
    

   


