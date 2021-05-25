      const ctrlSaludo= new CtrlSaludo();
      formSaludo.addEventListener("submit", evt => {
        try {
          evt.preventDefault();
          const datos=new FormData(formSaludo);
          const bol=datos.get("boleta");
          const nom=datos.get("nombre");
          const gru=datos.get("grupo");
          const mat=datos.get("materia");
          const fec=datos.get("fecha");
          var dato= "Boleta: "+bol +" Nombre: "+nom +" Grupo: "+gru +" Materia: "+mat +" Fecha: "+fec ;
          const saludo= ctrlSaludo.calculaSaludo(dato);
          formSaludo.salida.value= saludo;
        } catch (error) {
          console.log(error);
          formSaludo.salida.value=error.message;
        }
      });
