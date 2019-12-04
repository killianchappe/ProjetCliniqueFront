import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalleComponent } from '../app/salle/salle.component'
import { AddSalleComponent } from '../app/add-salle/add-salle.component'
import { UpdateSalleComponent } from './update-salle/update-salle.component';
import { PatientComponent } from './patient/patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { MedecinComponent } from './medecin/medecin.component';
import { AddMedecinComponent } from './add-medecin/add-medecin.component';
import { UpdateMedecinComponent } from './update-medecin/update-medecin.component';
import { EtatComponent } from './etat/etat.component';
import { AddEtatComponent } from './add-etat/add-etat.component';
import { UpdateEtatComponent } from './update-etat/update-etat.component';
import { ServiceMComponent } from './service-m/service-m.component';
import { AddServiceMComponent } from './add-service-m/add-service-m.component';
import { UpdateServiceMComponent } from './update-service-m/update-service-m.component';
import { OperationComponent } from './operation/operation.component';
import { AddOperationComponent } from './add-operation/add-operation.component';
import { UpdateOperationComponent } from './update-operation/update-operation.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './service/auth-guard/auth-guard.service'
import { VideComponent } from './vide/vide.component';

const routes: Routes = [
  {
    path: "salle",
    component: SalleComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "addsalle",
    component: AddSalleComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "updatesalle/:id",
    component: UpdateSalleComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "patient",
    component: PatientComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "addpatient",
    component: AddPatientComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "updatepatient/:id",
    component: UpdatePatientComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "medecin",
    component: MedecinComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "addmedecin",
    component: AddMedecinComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "updatemedecin/:id",
    component: UpdateMedecinComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "etat",
    component: EtatComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "addetat",
    component: AddEtatComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "updateetat/:id",
    component: UpdateEtatComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "servicem",
    component: ServiceMComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "addservicem",
    component: AddServiceMComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "updateservicem/:id",
    component: UpdateServiceMComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "operation",
    component: OperationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "addoperation",
    component: AddOperationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "updateoperation/:id",
    component: UpdateOperationComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "signin",
    component: SigninComponent,
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "",
    component: VideComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
