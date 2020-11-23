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
    return this.http.post<any>(`https://siget-grupo2.herokuapp.com/reuniones/create?temas=${reunion.temas}&descripcion=${reunion.descripcion}&horaInicio=${reunion.horaInicio}&horaFin=${reunion.horaFin}&asistentes=${reunion.asistentes}&convocante=${reunion.convocante}`, {});
  }
  postId;
  errorMessage;

 

  getByAsistentes(name: string): Observable<ReunionDto[]> {
    return this.http.get<any>(`https://siget-grupo2.herokuapp.com/reuniones/get?asistentes=${name}`)
    .pipe(
      map((reunionesDto: ReunionDto[]) => {
        console.log(reunionesDto);
        return reunionesDto;
      })
    );
  }



  deleteByHoraInicio(reunion: ReunionDto) {
    this.http.post<any>(`https://siget-grupo2.herokuapp.com/reuniones/delete?horaInicio=${reunion.horaInicio}`, { title: 'Angular POST delete' }).subscribe({
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
