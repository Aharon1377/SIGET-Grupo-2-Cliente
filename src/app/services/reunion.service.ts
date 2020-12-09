import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReunionDto } from '../common/reunion.dto';



@Injectable({
  providedIn: 'root'
})
export class ReunionService {
  constructor(private readonly http: HttpClient, @Inject(PLATFORM_ID) private platformId: object) {
  }

  crear_reunion(reunion: ReunionDto): any {
    return this.http.post<any>(`http://localhost:8080/reuniones/create?temas=${reunion.temas}&descripcion=${reunion.descripcion}&horaInicio=${reunion.horaInicio}&horaFin=${reunion.horaFin}&asistentes=${reunion.asistentes}&convocante=${reunion.convocante}`, {});
  }
  postId;
  errorMessage;

 

  getByAsistentes(name: string, rol: string): Observable<ReunionDto[]> {
    if(rol=="1"){
      return this.http.get<any>(`http://localhost:8080/reuniones/getAll?`) 
      .pipe(
        map((reunionesDto: ReunionDto[]) => {
          console.log(reunionesDto);
          return reunionesDto;
        })
      );
    }else{
      return this.http.get<any>(`http://localhost:8080/reuniones/get?asistentes=${name}&roleID=${rol}`)
    .pipe(
      map((reunionesDto: ReunionDto[]) => {
        console.log(reunionesDto);
        return reunionesDto;
      })
    );
    }
    
  }

  getByAdmin(): Observable<ReunionDto[]> {
    return this.http.get<any>(`http://localhost:8080/reuniones/getAll?`) 
    .pipe(
      map((reunionesDto: ReunionDto[]) => {
        console.log(reunionesDto);
        return reunionesDto;
      })
    );
  }



  deleteByHoraInicio(reunion: ReunionDto) {
    this.http.post<any>(`https://siget-equipo2.herokuapp.com/reuniones/delete?horaInicio=${reunion.horaInicio}`, { title: 'Angular POST delete' }).subscribe({
        next: data => {
            this.postId = data.id;
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    })
}



}

