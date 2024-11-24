import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/Login/login.component';
import { ContatoComponent } from './Pages/Contato/contato.component';
import { InicioComponent } from './Pages/inicio/inicio.component';  // Importe seu componente
import {EstoqueComponent} from './Pages/Estoque/estoque.component';
export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'login', component: LoginComponent },           // Página de login
    { path: 'contato', component: ContatoComponent },       // Página de contato
    { path: 'estoque', component: EstoqueComponent }, 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
