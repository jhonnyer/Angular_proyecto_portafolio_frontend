// ElementRef permite que cuando se selecciono un elemento muestre su contenido nativo 
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el:ElementRef) {
   };

   ngOnInit(){
    // Muestra la directiva seleccionada 
    console.log(this.el.nativeElement);
    var element=this.el.nativeElement;
    // cambia el estilo de la directiva seleccionada 
    element.style.background="blue";
    element.style.padding="20px";
    element.style.marginTop="15px" 
    element.style.color="white"
    console.log("Texto obtenido con la directiva personalizada");
    console.log(element.innerText);
    // Convertir texto en mayuscula 
    element.innerText=element.innerText.toUpperCase();
    // Remplazar una palabra del parrafo seleccionado con la directiva. Se coloca en mayuscula porque anteriormente ha sido convertido en mayuscula
    element.innerText=element.innerText.toUpperCase().replace("INQUIETUD","SUGERENCIA");
   }

}
