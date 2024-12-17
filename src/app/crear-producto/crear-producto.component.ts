import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LaptopCrecion } from '../laptop.module';
import { Router } from '@angular/router';
import { LaptopService } from '../Laptop.service';
import { FormularioProductoComponent } from "../formulario-producto/formulario-producto.component";
import { extraerErrores } from '../shared/funciones/errores';
import { MostrarErroresComponent } from '../shared/mostrar-errores/mostrar-errores.component';


@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [MostrarErroresComponent, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormularioProductoComponent],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {
  constructor(private laptopService: LaptopService, private router: Router){}

  errores:string[]=[]
  
  public guardarCambio(laptop:LaptopCrecion){
    this.laptopService.crear(laptop).subscribe({
      next:()=> {
        this.router.navigate(["productos"]);
      },
      error: err=> {
        const errores = extraerErrores(err);
        this.errores=errores;
      },
    })
  
  }
}
