import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/components/home/home.component';
import { UsuarioComponent } from 'src/components/usuario/usuario.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/usuario', pathMatch: 'full' },
  {path: '', component: UsuarioComponent},
 {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
