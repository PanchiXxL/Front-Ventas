import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { LaptopService } from '../Laptop.service';
import { Laptop } from '../laptop.module';
import { MatTableModule } from '@angular/material/table';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { LandingComponent } from '../landing/landing.component';

@Component({
  selector: 'app-indice-products',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatTableModule, SweetAlert2Module, LandingComponent ],
  templateUrl: './indice-products.component.html',
  styleUrl: './indice-products.component.css'
})
export class IndiceProductsComponent {
  laptopSrevice = inject(LaptopService);
  laptops?:Laptop[];
  columnasMostrar=["Nombre","Descripcion","Status","Cantidad","Precio","Total","Acciones"]

  constructor(){
    this.CargarProductos();
  }

  public CargarProductos(){
    this.laptopSrevice.ObtenerTodos().subscribe(laps=>{
      this.laptops=laps;
    })
  }

  public borrar(id:number){
    this.laptopSrevice.Delete(id).subscribe(()=>{

      Swal.fire("Exitoso", "El registro a sido borrado exitosamente!",'success')
      this.CargarProductos();
    })
  }
}
