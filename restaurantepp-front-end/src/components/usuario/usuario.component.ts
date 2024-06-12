import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {

loginForm: FormGroup | any;

constructor(private router: Router, private fb: FormBuilder){}

ngOnInit() {
  this.loginForm = this.fb.group({
    usuario: ['', Validators.required],
    senha: ['', Validators.required]
  });
}

acessarSistema() {
  if (this.loginForm.valid) {
    const usuario = this.loginForm.get('usuario').value;
    const senha = this.loginForm.get('senha').value;
    if(usuario === 'admin' && senha === '123'){
      console.log(usuario, senha)
      this.router.navigate(['/home']);
    }
    else{
      console.log('erro usuario e senha')
    }

  }

}
}
