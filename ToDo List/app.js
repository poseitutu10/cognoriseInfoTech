const input = document.querySelector("input");

const todos = document.querySelector(".todos");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    let innerValue = input.value;
    fireFunction(innerValue);
  }
});

function fireFunction(innerValue) {
  const todo = document.createElement("p");
  const openEl = document.createElement("span");
  const btn = document.createElement("button");

  todo.innerHTML = innerValue;
  todo.classList.add("add");

  btn.innerHTML = "Delete";
  todos.appendChild(todo);
  todo.appendChild(btn);

  btn.addEventListener("click", () => {
    todos.removeChild(todo);
  });
}
