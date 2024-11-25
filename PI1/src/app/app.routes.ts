import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { ContatoComponent } from './Pages/Contato/contato.component';
import { InicioComponent } from './Pages/inicio/inicio.component';  // Importe seu componente
import {EstoqueComponent} from './Pages/Estoque/estoque.component';
import {ProdutosComponent} from './Pages/Produtos/produtos.component';
export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'login', component: LoginComponent },           // Página de login
    { path: 'contato', component: ContatoComponent },       // Página de contato
    { path: 'estoque', component: EstoqueComponent }, 
    { path: 'produto' , component: ProdutosComponent }, 
];    

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
