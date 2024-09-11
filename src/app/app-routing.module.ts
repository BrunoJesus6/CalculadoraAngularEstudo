import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './paginas/calculadora/calculadora.component';

const routes: Routes = [
  { path: '', component: CalculadoraComponent }, // Corrigido para path vazio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
