function addTask() {
  let item = document.getElementById("txtTodo").value;
  document.getElementById("list").innerHTML += `<h1 class="todo">${item}</h1>`;
  document.getElementById("txtTodo").value = "";
}
