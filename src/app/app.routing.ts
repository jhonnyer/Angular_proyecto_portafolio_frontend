import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


// Importar componentes 
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetallesComponent } from "./components/detalles/detalles.component";
import { EditComponent } from "./components/edit/edit.component";
import { ErrorComponent } from './components/error/error.component';

const appRoutes:Routes=[
    {path:'',component:AboutComponent},
    {path:'sobre-mi',component:AboutComponent},
    {path:'proyectos',component:ProjectsComponent},
    {path:'crear-proyecto',component:CreateComponent},
    {path:'contacto',component:ContactComponent},
    {path:'proyecto/:id',component:DetallesComponent},
    {path:'editar-proyecto/:id',component:EditComponent},
    {path:'**',component:ErrorComponent} //Ruta no existe carga el componente Error 
]

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);
