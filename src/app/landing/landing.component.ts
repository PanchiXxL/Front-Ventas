import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {


  climas:any[] =[];

  constructor(){
    // this.weatherforecastService.ObtenerClima().subscribe(datos => {
    //   this.climas=datos;
    // });
  }
}
