// login.component.ts

import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { UsuarioDto } from '../common/usuario.dto';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  email: string;
  password: string;
  roleID: string;

  constructor(private servicioUsuario: UsuarioService, public router: Router,) {}
  invalid = false;
  submitted = false;
  respuesta: boolean;

    login() {


    this.submitted = true;
    
    const usuario: UsuarioDto = {
      username: this.email,
      password: this.password,
      roleID: this.roleID,
      nombre: "", 
      apellidos: "", 
      email : "", 
      telefono: 1,
    }
    this.servicioUsuario
      .getLogin(usuario)
      .subscribe({
      next: (resp: boolean) => {
        this.respuesta = resp;
      },
      error:  (err) => {
        console.error(err);
      },
      complete: () => (this.updateAddress()),
    });
    //QUEDARIA DIFERENCIAR QUE PONER EN CADA VISTA 
    if(this.roleID=="1"){
      this.router.navigate(['vistaAdmin'])
    }else if(this.roleID=="2"){
      this.router.navigate(['vistaUsuarioPrivilegiado'])
    }else{
      this.router.navigate(['vistaUsuario'])
    }
      
    
  }
  
  updateAddress(): void {
    console.log(this.respuesta);
    if(this.respuesta){
      localStorage.setItem("name", `${this.email}`);
      this.router.navigate(['reuniones']);
      this.invalid = false;
    }else{
      this.invalid = true;
    }
  }

  registrar(): void {
    this.router.navigate(['registro'])
  }
  

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

}