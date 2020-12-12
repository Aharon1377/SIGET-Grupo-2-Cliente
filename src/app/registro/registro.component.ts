import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { UsuarioDto } from 'src/app/common/usuario.dto';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    username: string;
    password: string;
    nombre: string;
    apellidos: string;
    email: string;
    telefono: number;
    roleID: string;
    creado: boolean;

    constructor(private servicioUsuario: UsuarioService) { }


    ngOnInit(): void {


    }

    metodoRegistrar() {
        

        const usuario: UsuarioDto = {
            username: this.username,
            password: this.password,
            nombre: this.nombre,
            apellidos: this.apellidos,
            email: this.email,
            telefono: this.telefono,
            roleID: this.roleID,
        }
        //if( !(this.password.length<8) && !(this.password===this.password.toLowerCase()) && !(this.password === this.password.toUpperCase()) && !(this.password.search(/[0-9]/)<0) ){
        if ((this.password.length >= 8) && (this.password !== this.password.toLowerCase()) && (this.password !==this.password.toUpperCase())) {
            
            this.servicioUsuario.createUsuario(usuario);
            alert('Usuario creado')
            this.creado=true;
           
        } else {
            alert('La contraseña debe tener como mínimo 8 caracteres, un mayúscula y un minúscula ')
            this.creado=false;
        }
    }

}