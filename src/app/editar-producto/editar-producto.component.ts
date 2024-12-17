import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { LaptopService } from '../Laptop.service';
import { Laptop, LaptopCrecion } from '../laptop.module';
import { Router } from '@angular/router';
import { FormularioProductoComponent } from '../formulario-producto/formulario-producto.component';
import { LandingComponent } from '../landing/landing.component';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [FormularioProductoComponent, LandingComponent],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent implements OnInit {
  @Input({transform: numberAttribute})
  id!:number

  laptopService = inject(LaptopService);
  router = inject(Router);

  modelo?: Laptop;

  ngOnInit(): void {
    this.laptopService.ObtenerId(this.id).subscribe(laptop=>{
      this.modelo=laptop;
    })
  }

  public GuardarCambios(laptop:LaptopCrecion){
    this.laptopService.actualizar(this.id, laptop).subscribe(()=>{
      this.router.navigate(["/productos"]);
    })
  }

}
