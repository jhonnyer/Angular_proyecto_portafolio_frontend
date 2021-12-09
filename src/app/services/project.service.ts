import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService{
    public url:String;
    constructor(
        private http:HttpClient
    ){
        this.url=Global.url;
    }
    testService(){
        return "Probando el servicio de angular";
    }

    saveProject(project:Project):Observable<any>{
        let params=JSON.stringify(project);//le pasamos a la api el objeto proyecto en formato json por eso JSON.stringify 
        let headers=new HttpHeaders().set('Content-Type','application/json');
        // return this.http.post(this.url+'save-project',params, {headers:headers}); //params envia los datos a guardar
        return this.http.post('api/save-project',params, {headers:headers}); //params envia los datos a guardar
    }

    // recuperar los datos de todos los proyectos 
    getProjects():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        // return this.http.get(this.url+'projects',{headers:headers});
        return this.http.get('api/projects',{headers:headers});
    };

    // recuperar un unico proyecto con id pasado por url
    getProject(id:any):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        // return this.http.get(this.url+'project/'+id,{headers:headers});
        return this.http.get('api/project/'+id,{headers:headers});
    };

    deleteProject(id:any):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        // return this.http.delete(this.url+'project/'+id, {headers:headers});
        return this.http.delete('api/project/'+id, {headers:headers});
    };

    // editar los datos de un proyecto. Pasamos los datos del proyecto completo
    updateProject(project:any):Observable<any>{
        let params=JSON.stringify(project); //Guarda los datos del proyecto project en la variable params en formato JSON
        let headers=new HttpHeaders().set('Content-Type','application/json');
        // pasamos el id del proyecto 
        // return this.http.put(this.url+'project/'+project._id,params, {headers:headers});
        return this.http.put('api/project/'+project._id,params, {headers:headers});
    }
}