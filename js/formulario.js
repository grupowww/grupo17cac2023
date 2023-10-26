function validarformulario(){
    var nombre=document.getElementById("nombre").value.trim() 
    var apellido=document.getElementById("apellido").value.trim()
    var dni=document.getElementById("NumeroDeDocumento").value.trim()
    var edad=document.getElementById("edad").value.trim() 
    var correo=document.getElementById("Correo").value.trim()
    var numeroDeCelular=document.getElementById("NroCelular").value.trim()

if (nombre==="" || apellido==="" || dni==="" || edad==="" || correo==="" || numerDeCelular===""){
    alert("Todos los campos deben estar completos")
    return false
}

var nombretest=/^[a-zA-Z]+$/.test(nombre)
var apellidotest=/^[a-zA-Z]+$/.test(apellido)

if(!nombretest || !apellidotest){
    alert("Los campos para su apellido y nombre deben contener solo letras")
    return false
}

if((isNaN(dni)) || (isNaN(edad)) || (isNaN(numeroDeCelular))){
    alert("Los campos para su dni,edad y numero de celular debe estar compuesto solo por numeros")
    return false
}

if (dni.lenght !==8){
    alert("Su dni debe tener 8 numeros")
    return false
}

if (parseInt(edad) < 18){
    alert("para poder solicitar un turno debe ser mayor de edad")
    return
}

alert("Sus datos fueron enviados exitosamente,lo esperamos")
return true
}    