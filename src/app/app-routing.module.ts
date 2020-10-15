import { CoinDashbordComponent } from './components/coin-dashbord/coin-dashbord.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: CoinDashbordComponent, pathMatch: 'full'},
 // { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
