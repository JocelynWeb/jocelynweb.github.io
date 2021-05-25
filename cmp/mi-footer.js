class MiFooter extends HTMLElement{
  connectedCallback(){
    this.innerHTML=/* html */
      'Copyright &copy; Garduño Rebollar Lizeth Jocelyn ';
  }
}
customElements.define("mi-footer",MiFooter);
