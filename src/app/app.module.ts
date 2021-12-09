import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// importar modulos http y de servicio del formulario
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

// Importar fichero del routing el servicio y el modulo creadp
import { routing, appRoutingProviders } from './app.routing';

// Importar componentes 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

// importar servicio 
import { ProjectService } from './services/project.service';
import { DetallesComponent } from './components/detalles/detalles.component';
import { EditComponent } from './components/edit/edit.component';

// Importo librerias de jQuery en todo el proyecto para utilizar el simbolo $
import * as $ from "jquery";
import { SliderComponent } from './components/slider/slider.component';
import { ResaltadoDirective } from './directivas/resaltado.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    DetallesComponent,
    EditComponent,
    SliderComponent,
    ResaltadoDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders, 
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
