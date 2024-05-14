const bar = document.querySelector(".fa-bars");

const menu = document.querySelector(".menu");

const task_con = document.querySelector("#task-container");

const task_data = document.querySelector(".task-data");

const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input");

const ulEl = document.querySelector(".list");

bar.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

task_con.addEventListener('click',() =>{
  task_data.classList.toggle("show-task");
});

let list = JSON.parse(localStorage.getItem("list"));
if (list) {
  list.forEach((task) => {
    toDoList(task);
  });
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList(task) {
  let newTask = inputEl.value;
  if (task) {
    newTask = task.name;
  }

  const liEl = document.createElement("li");
  if (task && task.checked) {
    liEl.classList.add("checked");
  }
  liEl.innerText = newTask;
  ulEl.appendChild(liEl);
  inputEl.value = "";
  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = `
  <i class="fas fa-check-square">
  `;
  liEl.appendChild(checkBtnEl);
  const trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML = `
  <i class="fas fa-trash"></i>
  `;
  liEl.appendChild(trashBtnEl);

  checkBtnEl.addEventListener("click", () => {
    liEl.classList.toggle("checked");
    updateLocalStorage();
  });

  trashBtnEl.addEventListener("click", () => {
    liEl.remove();
    updateLocalStorage();
  });
  updateLocalStorage();
}

function updateLocalStorage() {
  const container = document.querySelector("#id1");
  const liEls = container.querySelectorAll("ul.list > li");
  // console.log(liEls)
  list = [];
  liEls.forEach((liEl) => {
    list.push({
      name: liEl.innerText,
      checked: liEl.classList.contains("checked"),
    });
  });
  localStorage.setItem("list", JSON.stringify(list));
}


function getGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting;

  if (hour >= 5 && hour < 12) {
    greeting = "Good morning!🌞";
  } else if (hour >= 12 && hour < 16) {
    greeting = "Good afternoon!🌤️";
  } else {
    greeting = "Good evening!🌙";
  }

  return greeting;
}

function greet(){
  const greetingElement = document.querySelector(".greeting");
  const greeting = getGreeting() ;
  greetingElement.textContent = greeting;
};
greet();

