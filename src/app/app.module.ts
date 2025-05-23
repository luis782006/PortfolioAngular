//basicos
//basicos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NavComponent } from './componentes/header/nav/nav.component';
import { LogoComponent } from './componentes/header/logo/logo.component';

import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
// importaciones de terceros


//librerias externas npm
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgCircleProgressModule } from 'ng-circle-progress';

//Import necesarios para el crud
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // Asegúrate que HTTP_INTERCEPTORS está importado
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HardSoftSkillComponent } from './componentes/hard-soft-skill/hard-soft-skill.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { interceptorProvider } from './interceptors/persona-interceptor';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SpinnerComponent } from './componentes/spinner/spinner.component';

// Mock API Interceptor
import { MockHttpInterceptor } from './interceptors/mock-http.interceptor';
import { environment } from '../environments/environment';

const mockInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: MockHttpInterceptor,
  multi: true
};

export function getProviders() {
  const providers = [
    interceptorProvider // Existing interceptor
  ];
  if (environment.useMockApi) {
    providers.push(mockInterceptorProvider);
    console.log('Mock API enabled. MockHttpInterceptor provided.');
  }
  return providers;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    LogoComponent,
   
    BannerComponent,
    AcercaComponent,
   
    ExperienciaComponent,
    EducacionComponent,
    HardSoftSkillComponent,
    ProyectoComponent,
    RegistroComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    SpinnerComponent,
   
    
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModule,
    AlifeFileToBase64Module,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({}),
    ToastrModule.forRoot()
  ],
  providers: getProviders(), // Use the function to get providers
  bootstrap: [AppComponent]
})
export class AppModule { }