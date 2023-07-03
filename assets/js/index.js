const taskContainer = document.getElementById("taskContainer");
const todoInput = document.getElementById("todoInput");
const todoBtn = document.getElementById("todoBtn");

const addTask = () => {
    if (todoInput.value.trim() !== "") {
      const task = document.createElement("div");
      const inputTask = document.createElement("input");
      const spanTask = document.createElement("span");
      const btnTask = document.createElement("button");
  
      task.classList.add("task");
      inputTask.classList.add("task__ckbox");
      btnTask.classList.add("task__btn");
      inputTask.setAttribute("type", "checkbox");
      spanTask.textContent = todoInput.value;
      btnTask.textContent = "delete";
  
      task.appendChild(inputTask);
      task.appendChild(spanTask);
      task.appendChild(btnTask);
  
      taskContainer.appendChild(task);
      todoInput.value = "";
  
      // Aplicar transición al agregar elemento
      setTimeout(() => {
        task.classList.add("task--added");
      }, 10);
  
      taskCb = document.querySelectorAll(".task__ckbox");
      taskCb.forEach((element) => {
        element.addEventListener("click", checked);
      });
    } else {
      swal("Debes escribir algo antes de agregar", " ", "warning");
    }
  };
  
  const deleteTask = (event) => {
    if (event.target.classList.contains("task__btn")) {
      const task = event.target.parentElement;
  
      swal({
        title: "¿Estás seguro que quieres borrar la tarea?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          task.classList.add("task--fade-out"); // Agregar clase para animación de fade-out
          task.addEventListener("animationend", () => {
            // Remover el elemento después de finalizar la animación
            task.remove();
          });
        }
      });
    }
  };
  

const checked = (event) => {
    if(event.target.checked){
        event.target.parentElement.classList.add("task--checked");
    }
    else {
        event.target.parentElement.classList.remove("task--checked");
    }
}


todoBtn.addEventListener("click", addTask);
taskContainer.addEventListener("click", deleteTask);