import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AuthGuard } from '../services/auth.guard';

import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { AddNewUserComponent } from '../components/user/add-new-user/add-new-user.component';
import { UserAccountComponent } from '../components/user/user-account/user-account.component';
import { EditUserComponent } from '../components/user/edit-user/edit-user.component';
import { MapComponent } from '../components/map/map.component';
import { TrainFeesComponent } from '../components/train-fees/train-fees.component';
import { ViewPurchasesComponent } from '../components/view-purchases/view-purchases.component';

const applicationRoutes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'addnewuser',component:AddNewUserComponent},
  {path:'edituser',component:EditUserComponent,canActivate: [AuthGuard]},
  {path:'user-account',component:UserAccountComponent,canActivate: [AuthGuard]},
  {path:'view-map',component:MapComponent},
  {path:'train-fee',component: TrainFeesComponent },
  { path:'view-purchases', component: ViewPurchasesComponent }


];

@NgModule({
  imports: [
    RouterModule.forRoot(applicationRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
