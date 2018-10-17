function validarform() {
    var x = document.getElementById("tel").value;
    if (x == "") {
        alert("Name must be filled out");
    }
}

function crearTR(e){
    var tabla = document.getElementById("tabla");
    var tr = document.createElement("tr");

    var nnombre = document.getElementById("nombre");
    var aapellido = document.getElementById("apellido");
    var eedad = document.getElementById("edad");
    var ssexo = document.getElementById("sexo");
    var nnacionalidad = document.getElementById("nacionalidad");
    var ddomicilio = document.getElementById("domicilio");
    var ttel = document.getElementById("tel");

    var nombre = document.createElement("td");
    nombre.innerHTML = nnombre.value;
    tr.appendChild(nombre);

    var apellido = document.createElement("td");
    apellido.innerHTML = aapellido.value;
    tr.appendChild(apellido);

    var edad = document.createElement("td");
    edad.innerHTML = eedad.value;
    tr.appendChild(edad);

    var sexo = document.createElement("td");
    sexo.innerHTML = ssexo.value;
    tr.appendChild(sexo);

    var nacionalidad = document.createElement("td");
    nacionalidad.innerHTML = nnacionalidad.value;
    tr.appendChild(nacionalidad);

    var domicilio = document.createElement("td");
    domicilio.innerHTML = ddomicilio.value;

    var tel = document.createElement("td");
    tel.innerHTML = ttel.value;
    tr.appendChild(tel);

    tr.appendChild(domicilio);
    tabla.appendChild(tr);

    nnombre.value = "";
    aapellido.value = "";
    eedad.value = "";
    ssexo.value = "";
    ddomicilio.value = "";
    nnacionalidad.value = "";
    ttel.value = "";
    return true;
}