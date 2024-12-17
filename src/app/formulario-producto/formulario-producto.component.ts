import { Component, EventEmitter, inject, Input, OnInit, Output, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LaptopService } from '../Laptop.service';
import { Router } from '@angular/router';
import { Laptop, LaptopCrecion } from '../laptop.module';

@Component({
  selector: 'app-formulario-producto',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export class FormularioProductoComponent implements OnInit {
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  private readonly formBuilder = inject(FormBuilder);

  @Input({required:true})
  titulo?:string;

  @Input()
  modelo?: Laptop

  @Output()
  posteofomrulario=new EventEmitter<LaptopCrecion>();

  form = this.formBuilder.group({
    nombre:[''],
    description:[''],
    status: [''],
    cantidad:[0,[Validators.required, Validators.min(0)]],
    price:[0,[Validators.required, Validators.min(0)]]
    //price:['']
  })


  pagoEsperado():number{
    const price = this.form.get('price')?.value || 0;
    const cantidad = this.form.get('cantidad')?.value || 0;
    return price * cantidad;
  }

  guardarCambio(){
    let laptop = this.form.value as LaptopCrecion
    // let laptop1 = this.form.validator ?? ""
    this.posteofomrulario.emit(laptop);
  }
}
