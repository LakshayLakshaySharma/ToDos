var input = document.getElementById("input");
var btn = document.getElementById("btn");
var todos = document.getElementById("todos");


btn.addEventListener("click", function(){
  var para = document.createElement("p");
  para.innerText = input.value;
  input.value = "";
  todos.appendChild(para);

  para.addEventListener("click", function(){
    para.style.textDecoration = "line-through";
    para.style.color = "red"
  });
  para.addEventListener("dblclick", function(){
    todos.removeChild(para);
  });
});