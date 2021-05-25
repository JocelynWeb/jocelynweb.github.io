"uso estricto" ;
var  forma  =  documento . getElementById ( "forma" ) ,
    salidaBoleta  =  documento . getElementById ( "salidaBoleta" ) ,
    salidaNombre  =  documento . getElementById ( "salidaNombre" ) ,
    salidaGrupo  =  documento . getElementById ( "salidaGrupo" ) ,
    salidaMateria  =  documento . getElementById ( "salidaMateria" ) ,
    txtFecha  =  forma [ "fecha" ] , 
    salidaFecha  =  documento . getElementById ( "salidaFecha" ) ,
    salidaDatos  =  documento . getElementById ( "salidaDatos" ) ;

function  captura ( )  {
    
    var  fecha  =  nueva  fecha ( valor txtFecha . ) ,
    boleta  =  forma [ "boleta" ] . valor . recortar ( ) ,
    nombre  =  forma [ "nombre" ] . valor . recortar ( ) ,
    grupo  =  forma [ "grupo" ] . valor . recortar ( ) ,
    materia  =  forma [ "materia" ] . valor . recortar ( ) ;

    salidaDatos . textContent  =  "Boleta:"  +  boleta  +  "|"  +  "Nombre"  +  nombre  +  "|"  +  "Grupo:"  +  grupo 
    +  "|"  +  "Materia:"  +  materia  +  "|"  +  "Fecha:"  +  fecha . toUTCString ( ) ;
