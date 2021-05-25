"use strict";
var forma= document.getElementById("forma"),
    salidaBoleta= document.getElementById("salidaBoleta"),
    salidaNombre= document.getElementById("salidaNombre"),
    salidaGrupo= document.getElementById("salidaGrupo"),
    salidaMateria= document.getElementById("salidaMateria"),
    txtFecha= forma["fecha"], 
    salidaFecha= document.getElementById("salidaFecha"),
    salidaDatos= document.getElementById("salidaDatos");

function  captura() {
    
    var fecha= new Date(txtFecha.value) ,
    boleta =  forma [ "boleta" ].value.trim(),
    nombre =  forma [ "nombre" ].value.trim(),
    grupo =  forma [ "grupo" ].value.trim(),
    materia =  forma [ "materia" ].value.trim();

    salidaDatos . textContent  =  "Boleta: "  +  boleta  +  " | "  +  " Nombre: "  +  nombre  +  " | "  +  " Grupo: "  +  grupo 
    +  " | "  +  " Materia: "  +  materia  +  " | "  +  " Fecha: "  +  fecha . toUTCString ( ) ;
}
