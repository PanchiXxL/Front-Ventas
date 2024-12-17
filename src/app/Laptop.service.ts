import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Laptop, LaptopCrecion } from './laptop.module';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  
  constructor(private http:HttpClient) { }
  private URLBase  = environment.apiUrl+'/api/laptop';

  public ObtenerTodos():Observable<Laptop[]>{
    return this.http.get<Laptop[]>(this.URLBase);
  }
  public ObtenerId(id:number):Observable<Laptop>{
    return this.http.get<Laptop>(`${this.URLBase}/${id}`)
  }
  public crear(laptops: LaptopCrecion){
    return this.http.post(this.URLBase, laptops).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error?.errors) {
      // Extraer errores de validación del backend
      const mensajes = Object.keys(error.error.errors)
        .flatMap(campo => error.error.errors[campo])
        .join(', ');
      return throwError(() => new Error(mensajes));
    } else {
      // Otro tipo de error
      return throwError(() => new Error('Error inesperado. Intenta nuevamente.'));
    }
  }

  public actualizar(id: number, laptop:LaptopCrecion){
    return this.http.put(`${this.URLBase}/${id}`, laptop);
  }

  public Delete(id:number){
    return this.http.delete(`${this.URLBase}/${id}`)
  }


}
