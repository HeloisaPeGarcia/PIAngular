import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',  // Certifique-se de que o caminho está correto
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  
  constructor(private router: Router) {}

  onLoginSubmit() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    // Lógica de verificação de login
    if (username === 'admin' && password === 'senha') {
      // Usando o Angular Router para redirecionar para a página /estoque
      this.router.navigate(['/estoque']);
    } else {
      alert('Usuário ou senha inválidos');
    }
  }
}
