import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalleComponent } from './salle/salle.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PatientComponent } from './patient/patient.component';
import { MedecinComponent } from './medecin/medecin.component';
import { OperationComponent } from './operation/operation.component';
import { ServiceMComponent } from './service-m/service-m.component';
import { EtatComponent } from './etat/etat.component';
import { AddSalleComponent } from './add-salle/add-salle.component';
import { UpdateSalleComponent } from './update-salle/update-salle.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AddMedecinComponent } from './add-medecin/add-medecin.component';
import { AddServiceMComponent } from './add-service-m/add-service-m.component';
import { AddOperationComponent } from './add-operation/add-operation.component';
import { AddEtatComponent } from './add-etat/add-etat.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { UpdateMedecinComponent } from './update-medecin/update-medecin.component';
import { UpdateServiceMComponent } from './update-service-m/update-service-m.component';
import { UpdateOperationComponent } from './update-operation/update-operation.component';
import { UpdateEtatComponent } from './update-etat/update-etat.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { VideComponent } from './vide/vide.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { JwtModule } from '@auth0/angular-jwt'

@NgModule({
  declarations: [
    AppComponent,
    SalleComponent,
    HeaderComponent,
    FooterComponent,
    PatientComponent,
    MedecinComponent,
    OperationComponent,
    ServiceMComponent,
    EtatComponent,
    AddSalleComponent,
    UpdateSalleComponent,
    AddPatientComponent,
    AddMedecinComponent,
    AddServiceMComponent,
    AddOperationComponent,
    AddEtatComponent,
    UpdatePatientComponent,
    UpdateMedecinComponent,
    UpdateServiceMComponent,
    UpdateOperationComponent,
    UpdateEtatComponent,
    SigninComponent,
    RegisterComponent,
    VideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatSliderModule,
    JwtModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
