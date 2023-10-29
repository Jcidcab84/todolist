// DEclaracion variables

const inputTareas = document.getElementById("input");
const botonTarea = document.getElementById("boton");
const lista = document.getElementById("lista");
const listaCantidad = document.getElementById("cuenta-tareas");
const listaCantidadCheck = document.getElementById("totalCheckeado");


// los datos se almacenan en
const tareas = [
  { descripcion: "Hacer mercado", estado: false, id: 16 },
  { descripcion: "Estudiar para la prueba", estado: true, id: 60 },
  { descripcion: "Sacar a pasear a Tobby", estado: true, id: 24 },

];
dibujarLista();

// Contador General de tareas
function prevtotalTareas(){
  listaCantidad.textContent = `Total: ${tareas.length}`;
}
prevtotalTareas();

// Contador de tareas checkeadas
function contarTareasCompletadas(tareas) {
  return tareas.filter(tarea => tarea.estado === true).length;
}
let numeroTareasCompletadas = contarTareasCompletadas(tareas);
listaCantidadCheck.textContent = `Total: ${numeroTareasCompletadas}`;



// lo que se almacena y donde y a traves del boton

botonTarea.addEventListener("click", function () {
  let tarea = {
    descripcion: inputTareas.value,
    id: tareas.length + 1,
    estado: false,
  };
  // como se agrega al array
  tareas.push(tarea);
  // como recibe el html
  dibujarLista();
  inputTareas.value = "";
  listaCantidad.textContent = `Total: ${tareas.length}`;
});

function eliminar(id) {
  tareas.splice(id, 1);
  dibujarLista();
  listaCantidad.textContent = `Total: ${tareas.length}`;
  contarTareasCompletadas(tareas);
  numeroTareasCompletadas = contarTareasCompletadas(tareas);
  listaCantidadCheck.textContent = `Total: ${numeroTareasCompletadas}`;
}

function switchEstadoTarea(id) {
  tareas[id].estado = !tareas[id].estado;
  dibujarLista();
}

function dibujarLista() {
  lista.innerHTML = "";
  let itemHtml = "";
  
  for (let [index, tarea] of tareas.entries()) {
    let checkbox = "";
    if (tarea.estado == true) {
      checkbox = `<input type="checkbox" name="chk${index}" id="chk${index}" onclick="switchEstadoTarea(${index})" checked>`;
    } else {
      checkbox = `<input type="checkbox" name="chk${index}" id="chk${index}" onclick="switchEstadoTarea(${index})" unchecked>`;
    }

    itemHtml = `<li>${tarea.id}  ${tarea.descripcion}   ${checkbox}   <a href='#' onclick=eliminar(${index})><img src="/descarga.png" alt="eliminar" height="15px" width="15px"></a> </li>`;
    lista.innerHTML += itemHtml;
     
  }
 
}


