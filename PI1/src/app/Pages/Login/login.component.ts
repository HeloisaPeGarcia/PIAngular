import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private router: Router) {}

  onLoginSubmit() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    // Lógica de verificação de login
    if (username === 'admin' && password === 'senha') {
      // Redirecionar com o Angular Router
      this.router.navigate(['/estoque']);
    } else {
      alert('Usuário ou senha inválidos');
    }
  }
}
