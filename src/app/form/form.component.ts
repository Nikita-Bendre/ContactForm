import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent 
{
  myForm = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl('')
});

}
