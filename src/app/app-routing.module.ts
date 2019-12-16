import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { TarefasComponent } from './Model/tarefas.component';
import { BuscaComponent } from './busca/busca.component';




const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full' }, // caso vazio redireciona para a Home
  {path:'home', component:HomeComponent},
  {path:'Tarefas', component:TarefasComponent},
  {path: 'Busca', component:BuscaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
