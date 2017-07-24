
// var pasajeros = new array (32); 
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}
var numAsientos ;
function redirect(event){
	numAsientos = event.target.textContent;
    document.getElementById("mostrar").innerHTML=(event.target.textContent);
 
}
 var Numero = 32; // Número de asientos
   var asientos = [];
   for (var i = 0; i < Numero; i++) {
      asientos[i] = undefined;
   }

//RESERVA LOS ASIENTOS Y LO ALMACENA
function reservar (){
	var asiento = numAsientos;
  
	var name =document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var dni =document.getElementById("dni").value;

 var mostrarReserva = document.getElementById("mostrar").innerHTML ="<center><div><h1>Datos de Reserva</h1><p><strong>Nombre : </strong></p>"+
   name+"</div><br><p><strong>Apellido :</strong></p>"+apellido+"</p></div><br><strong>DNI :</strong><p>"+dni+"</p></center>"; 
    
    
   asientos[numAsientos - 1] = {
               nombre : name,
               apellido:apellido,
               dni: dni
            };
            console.log(asientos);
          
   celda.style.backgroundColor="yellow";
  
 }

function cancelar(){
    asiento[numeroAsientos - 1] = undefined;
    console.log(cancel);
    celda.style.backgroundColor="transparet";
 }
/*
 function listar(){
    var listado = document.getElementById('listar');
 listado.onclick = function() {
  reservar(seleccionarAsiento());
}
 function cancelar (){
   
    asientos[numeroAsientos - 1] = undefined;
    console.log(cancel);
    celda.style.backgroundColor="transparet";
} 

 
 function buscar (){
 	
 }
 */                          


	




