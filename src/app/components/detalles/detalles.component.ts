import { Component, OnInit } from '@angular/core';
// importo el modelo project 
import { Project } from '../../models/project';
// importo el servicio projectService que trae los datos del proyecto y el global que tiene la url
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
// Cargar el componente del router
import { Router , ActivatedRoute, Params} from '@angular/router'; 

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
  providers:[ProjectService]
})
export class DetallesComponent implements OnInit {
  public url:String;
  public project:any=Project;
  // Crear propiedad de confirmacion de borrado de un componente 
  public confirm:boolean;
  constructor(
    private _projectService:ProjectService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this.url=Global.url;
    this.confirm=false;
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

  // metodo de confirmacion para eliminar un proyecto 
  deleteConfirm(confirm:boolean){
    this.confirm=confirm;
  }

  // Metodo para eliminar un proyecto 
  deleteProject(id:any){
    this._projectService.deleteProject(id).subscribe(
      response=>{
        if(response.project){
          this._router.navigate(['/proyectos']); //cuando se elimine el proyecto redirigir a la ruta proyectos
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

}
