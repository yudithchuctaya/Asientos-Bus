var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}
var numAsientos ;
function redirect(event){
	numAsientos = event.target.textContent;
    document.getElementById("mostrar").innerHTML=(event.target.textContent);

// (event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';
  
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

    var mostrarReserva =document.getElementById("mostrar").innerHTML ="<center><div><h1>Datos de Reserva</h1><p><strong>Nombre : </strong></p>"+
   name+"</div><br><p><strong>Apellido :</strong></p>"+apellido+"</p></div><br><strong>DNI :</strong><p>"+dni+"</p></center>"; 
    
    
   asientos[numAsientos - 1] = {
               nombre : name,
               apellido:apellido,
               dni: dni
            };
            console.log(asientos);
    // var color = asientos()        
   celdita.style.backgroundColor="#00000";
        
 } 
 function buscar (){
 	
 }
                              


	




