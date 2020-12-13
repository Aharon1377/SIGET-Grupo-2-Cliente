import { Injectable} from '@angular/core';
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

  public usuarioGlobal:UsuarioDto;

  getId(usuario: UsuarioDto){
    return this.http.get(`https://siget-equipo2.herokuapp.com/api/usuarios/getID?username=${usuario.username}`, {});

  }

  getLogin(usuario: UsuarioDto): any {
    
    this.usuarioGlobal=usuario;
    
    this.getId(usuario).subscribe((res: UsuarioDto) => {
      this.usuarioGlobal = res;
      localStorage.setItem("roleID", this.usuarioGlobal.roleID);
    });
    return this.http.post<any>(`https://siget-equipo2.herokuapp.com/api/usuarios/login?username=${usuario.username}&password=${usuario.password}`, {});
  }


  getAll(): Observable<UsuarioDto[]> {
    return this.http.get<any>(`https://siget-equipo2.herokuapp.com/api/usuarios/getAll`)
    .pipe(
      map((usuarioDto: UsuarioDto[]) => {
        return usuarioDto;
      })
    );
  }

  createUsuario(usuario: UsuarioDto): any {
    return this.http.post<any>(`https://siget-equipo2.herokuapp.com/api/usuarios/createUsuario?username=${usuario.username}&password=${usuario.password}&roleID=${usuario.roleID}&nombre=${usuario.nombre}&apellidos=${usuario.apellidos}&email=${usuario.email}&telefono=${usuario.telefono}
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
