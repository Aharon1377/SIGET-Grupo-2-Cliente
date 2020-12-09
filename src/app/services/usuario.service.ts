import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioDto } from '../common/usuario.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReunionService } from '../services/reunion.service';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  postId: any;
  errorMessage: any;
  constructor(private servicioReunion: ReunionService, private readonly http: HttpClient) {
    
  }

//
  getLogin(usuario: UsuarioDto): any {
    var aux;
    aux=this.http.post<any>(`http://localhost:8080/usuarios/login?username=${usuario.username}&password=${usuario.password}`, {});
    this.servicioReunion.getByAsistentes(aux.nombre,aux.roleID);
    return aux;
  }


  getAll(): Observable<UsuarioDto[]> {
    return this.http.get<any>(`http://localhost:8080/usuarios/getAll`)
    .pipe(
      map((usuarioDto: UsuarioDto[]) => {
        return usuarioDto;
      })
    );
  }

  createUsuario(usuario: UsuarioDto): any {
    return this.http.post<any>(`http://localhost:8080/usuarios/createUsuario?username=${usuario.username}&password=${usuario.password}&roleID=${usuario.roleID}&nombre=${usuario.nombre}&apellidos=${usuario.apellidos}&email=${usuario.email}&telefono=${usuario.telefono}
    `, {}).subscribe({
      next: data => {
          this.postId = data.id;
      },
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
  });
  }
  
}

