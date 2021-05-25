export class CtrlSaludo {
  /**@param {string} dato */
  calculaSaludo(dato){
    const nombreSinEspacios= dato ? dato.trim(): "";
    if (!nombreSinEspacios) {
      throw new Error("Falta proporcionar el nombre");
    }
    return '${nombreSinEspacios}';
  }
}
