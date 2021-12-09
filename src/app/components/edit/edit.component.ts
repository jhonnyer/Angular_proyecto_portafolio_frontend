import { Component, OnInit } from '@angular/core';
// importar modelo 
import { Project } from '../../models/project';
// importar servicio 
import {ProjectService} from '../../services/project.service';
import { Global } from '../../services/global'; 
// importar servicio de subir imagen 
import { UploadService }  from '../../services/upload.service';
// Importar modulo router 
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html', //Reutilizamos la vista del componente create
  styleUrls: ['./edit.component.css'],
  providers:[ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title:String;
  public project:any=Project; //objeto que modificara el formulario 
  // propiedad que permite ver el proyecto creado en el formulario en un link externo 
  public save_project:any;
  // status propiedad para enviar mensaje del formulario cuando se envia la peticion con exito o falla 
  public status:String;
  // propiedad creada para subir un archivo 
  public FilesToUpload:Array<File>;
  public url:String;
  constructor(
    // propiedades del sevicio 
    private _projectService:ProjectService, 
    private _uploapService:UploadService,
    private _route:ActivatedRoute,
    private _router:Router
  ) { 
    this.title="Editar proyecro";
    this.status="";
    this.FilesToUpload=[];
    this.save_project;
    this.url=Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id=params.id;
      this.getProject(id);
    });
  }

  getProject(id:any){
    this._projectService.getProject(id).subscribe(
      response=>{
        this.project=response.project;
      },
      error=>{
        console.log(<any>error);
      }
    )
  };

  // onSubmit recibe los datos del formulario con la etiqueta projectForm y los guarda
  onSubmit(form:any){
    this._projectService.updateProject(this.project).subscribe(
      response=>{
        if(response.project){
          // Condicion de solo enviar la imagen a actualizar en el boton de editar, cuando en el formulario se suba una imagen nueva, sino se mantiene la misma 
          if(this.FilesToUpload.length>=1){
            // En este paso se realiza la subida de la imagen a la base de datos y el servidor
            //makeFileRequest subir los archivos por ajax. Metodo UploadImage recibe un campo del nombre de la imagen llamado image, ver metodo  var filePath=req.files.image.path
            // this._uploapService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.FilesToUpload, 'image')
            this._uploapService.makeFileRequest("api/upload-image/"+response.project._id, [], this.FilesToUpload, 'image')
            .then((result:any)=>{
              this.status='success';  //variable de comprobacion se coloca success para indicar que la peticion fue enviada con exito
              console.log(result);
              this.save_project=result.project; //variable creada para acceder al proyecto creado, obtener el id y avanzar a un link externo
            });
          }else{
            this.save_project=response.project; //variable creada para acceder al proyecto creado, obtener el id y avanzar a un link externo
            this.status='success';  //variable de comprobacion se coloca success para indicar que la peticion fue enviada con exito
          }
        }else{
          this.status='failed';
        }
        console.log(response);
      },
      error=>{
        console.log(<any>error);
      }
    )
  };

  // Metodo para subir  archivos 
  // fileInput recibe los datos del archivo cargado en el input 
  fileChangeEvent(fileInput:any){
    console.log(fileInput);
    //inicializo que el archivo FilesToUpload sea de tipo array y le paso los datos del fileInput que contiene los ficheros de la imagen cargada en el input, la propiedad target.files de la imagen
    this.FilesToUpload=<Array<File>>fileInput.target.files; 
  }

}
