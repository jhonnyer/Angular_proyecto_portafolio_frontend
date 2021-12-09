import { Component, OnInit, ViewChild } from '@angular/core';
// import * as $ from "jquery";
// declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider:number;
  public anchuraToSlider:any;
  public captions:boolean;
  // propiedad para mostrar los datos transmitidos en el componente hijo 
  public autor:any;
  
  @ViewChild('text') textos:any=""; //obtiene los datos de un elemento con etiqueta #textos

  constructor() { 
    this.widthSlider=0;
    this.captions=true;
  }

  ngOnInit(): void {
    // seleccionar el elemento texto por medio de jquery y mostrar un mensaje de alerta
    var opcion_clasica=document.querySelector('#texto')?.innerHTML;
    console.log(opcion_clasica);
    // alert(opcion_clasica);
  };

  // Cargar componente ViewChild en la vista de la pantalla y mostrar una alerta 
  ngAfterViewInit () {
    // Ahora puedes utilizar el componente hijo
    console.log(this.textos);
    alert(this.textos.nativeElement.textContent); //accedemos a la propiedad del evento que contiene el parrafo en la vista 
  };

  cargarSlider(){
    this.anchuraToSlider=this.widthSlider;
  };

  resetearSlider(){
    this.anchuraToSlider=false;
  };

  // Metodo para recuperar los datos de un componente hijo, en este caso los datos de la variable transmitida autor
  getAutor(event:any){
    console.log(event);
    // this.autor=JSON.stringify(event);//paso los datos del autor recibido en el evento a la variable autor
    this.autor=event;
    console.log("Array autor");
    console.log(this.autor);
  }

}
