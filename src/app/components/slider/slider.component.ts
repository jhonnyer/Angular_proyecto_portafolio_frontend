import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  // variable de entrada del componente padre contacto 
  @Input() anchura:number=0;
  @Input('etiquetas') captions:boolean=true; //recojo la variable etiquetas enviado en el componente contacto

  // pasar datos de un elemento hijo a un elemento padre 
  @Output() conseguirAutor=new EventEmitter();

  public autor:any;
  constructor() { 
    this.autor={
      nombre:"Jhonnyer Galindez",
      website:"jhonnyerg@gmail.com",
      youtube:"Jhonnyer Galindez"
    };
  }

  ngOnInit(): void {
    // Utilizar jquery en el componente de contacto 
    $("#logo").click(function(e:any){
      e.preventDefault(); //Desactiva que el enlace del logo rediriga a otra vista
        $("header").css("background","green")
                  .css("height","50px");
    });

    // Importo jquery bxlider para las imagenes de la vista de contactos 
    $('.bxslider').bxSlider({
      mode: 'fade',
      // captions: true,
      captions:this.captions,
      // slideWidth: 800
      slideWidth:this.anchura //recupero datos de entrada del componente padre contacto
    });
    // se puede tranmitir los datos de la variable autor sin necesidad de un boton 
    this.conseguirAutor.emit(this.autor);

  };

  // Funcion para trasmitir datos de un componente hijo a un componente padre 
  lanzar(event:any){
    console.log(event);
    this.conseguirAutor.emit(this.autor);
  }

}
