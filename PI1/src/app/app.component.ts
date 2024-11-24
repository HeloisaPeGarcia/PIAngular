import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule], // Adicione RouterModule aqui
    template: `
        <header>
            <nav>
                <a routerLink="/login">Login</a>
                <a routerLink="/contato">Contato</a>
            </nav>
        </header>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {}
