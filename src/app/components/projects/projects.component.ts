import { Component, OnInit } from '@angular/core';
// importo el modelo project 
import { Project } from '../../models/project';
// importo el servicio projectService que trae los datos del proyecto y el global que tiene la url
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ProjectService]
})
export class ProjectsComponent implements OnInit {
  // propiedad para ver los proyectos en la vista 
  public projects:Project[];
  public url:String;
  constructor(
    private _projectService:ProjectService
    ){
      this.url=Global.url;
      this.projects=[];
    }

  ngOnInit(): void {
    this.getProjects(); //llamo al metodo para ver los proyectos 
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      response=>{
        console.log(response);
        if(response.projects){
          this.projects=response.projects; //asigno al array projects los datos de la respuesta del projecto para listar en la vista
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
