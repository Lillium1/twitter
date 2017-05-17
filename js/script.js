function agregar() {

    //Recuperamos texto ingresado en textarea 
    var tareas = document.getElementById('tarea').value;
    // limpiamos textarea
    document.getElementById('tarea').value = '';

    // validamos que el campo no este vacio
    if (tareas == null || tareas.length == 0) {
        alert('Error! Debe ingresar una tarea');
        return false;
    }

    //indicamos donde van a estar las tareas que recupere textarea
    var cont = document.getElementById('contenedor');

    // creamos nuestros nuevos nodos elementos
    var nuevasTareas = document.createElement('div');
    var textoNuevaTarea = document.createTextNode('tareas');
    var elementoContenedor = document.createElement('span');

    // asignamos padres a nodos creados
    elementoContenedor.appendChild(textoNuevaTarea);
    nuevasTareas.appendChild(elementoContenedor);
    cont.appendChild(nuevasTareas);

    //creamos checkbox e íconos, les damos atributo y clases
    var chck = document.createElement('input');
    	chck.type = 'checkbox';
    	chck.setAttribute('class', 'check');
    var basura = document.createElement('span');
    	basura.classList.add('fa', 'fa-trash-o');
    var cora = document.createElement('span');
    	cora.classList.add('fa', 'fa-heart');

    //asignamos padres a nodos creados
    nuevasTareas.appendChild(chck);
    nuevasTareas.appendChild(basura);
    nuevasTareas.appendChild(cora);

    //Agregamos un evento al hacer clic, para que elimine o agregue la clase 
    //tachado al elementoContenedor
    chck.addEventListener('click', function() {
        elementoContenedor.classList.toggle('tachado');
    });

    //removemos la tarea al hacer click en el icono basurero
    basura.addEventListener('click', function() {
        cont.removeChild(nuevasTareas);
    });

    //creamos funcion click para el corazon y le asignamos la clase red de CSS
    cora.addEventListener('click', function() {
        cora.classList.toggle('red');
    });


}







