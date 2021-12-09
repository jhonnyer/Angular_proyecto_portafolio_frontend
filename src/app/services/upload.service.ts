import { Injectable } from "@angular/core";
import { Global } from "./global";

@Injectable()
export class UploadService{
    public url:String;
    constructor()
    {   
        this.url=Global.url;
    }

    // funcion para subir una imagen al backend 
    makeFileRequest(url:string, params:Array<String>, files:Array<File>, name:String){
        return new Promise(function(resolve, reject){
            var formData:any=new FormData; //crea una especie de formulario en un objeto y sera de tipo any
            var xhr= new XMLHttpRequest(); //peticion asincrona html
            // Recorro los ficheros de la peticion ajax de archivos enviados y adjunto en el formulario con el nombre, la posicion y recogo por ultimo el nombre del archivo enviado
            for(var i=0;i<files.length;i++){
                formData.append(name, files[i], files[i].name); 
            }
            // hacemos la peticion ajax 
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4){
                    if(xhr.status==200){
                        resolve(JSON.parse(xhr.response)); //paso la peticion del response de la imagen enviada
                    }else{
                        reject(xhr.response);
                    }
                }
            }
            // hago la peticion post a la api del response de la imagen enviada 
            // metodo post, url enviado y true para que realice la peticion 
            xhr.open('POST',url,true);
            xhr.send(formData); //envio el formulario de la imagen guardada en el formData con el metodo send 
        });
    }
}