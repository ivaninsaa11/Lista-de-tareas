//OBTENER FECHA ACTUAL Y MOSTRAR EN PANTALLA
document.addEventListener('DOMContentLoaded', function(){
  const fechaActualElement = document.getElementById("fechaActual");
  const fechaActual = new Date();
  const opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const fechaFormat = fechaActual.toLocaleDateString('es-ES', opciones);
  fechaActualElement.textContent = `Fecha Actual: ${fechaFormat} `+"📅";
});
//---------------------------------------------------------------

const input = document.querySelector("input");
const hora = document.getElementById("hora");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".nada");
const reset = document.getElementById("reset");

reset.style.display='none'
empty.style.display = "block";

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value; 
  const hour = hora.value;

  if (text !== "" && hour !== "") {
    const li = document.createElement("li");//  AGREGA ELEMENTOS PARA GUARDAR 
    const p = document.createElement("p");//        Y LISTAR LAS TAREAS
    const p2 = document.createElement("p");



    p.textContent = text; // SE GUARDA EN   "p" LO QUE SE INTRODUJO EN "input"
    p2.textContent = hour+" hs.";

    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);
    reset.style.display='block'

    input.value = "";//VACIAR EL CAMPO DE TEXTO
    hora.value = "";
    empty.style.display = "none"; //OCULTAR EL TEXTO DEL DIV "empty"
  }
  else  if (text !== "" && hour == "" ){
    alert("Ingrese un horario válido")
  }
  else if (text == "" && hour !== "" ){
    alert("Ingrese una tarea")
  }
  else{
    alert("Ingrese un horario y una tarea válidos")
  }
});


function addDeleteBtn() {//FUNCIONALIDAD DEL ELEMENTO BORRAR
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);//ELIMINA LA TAREA

    const items = document.querySelectorAll("li");

    if (items.length === 0) { 
      empty.style.display = "block";//SI YA NO HAY TAREAS, MUESTRA EL DIV "empty"
      reset.style.display='none'

    }
  });

  return deleteBtn;
}

function reseteo(){
  location.reload();
}