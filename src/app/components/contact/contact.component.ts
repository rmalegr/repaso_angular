import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  formulario: FormGroup;

  constructor(private form: FormBuilder) {
    this.formulario = this.form.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  enviar() {
    console.log(this.formulario.value);
  }
  hasErrors(controlName: string, errorType: string) {
    return (
      this.formulario.get(controlName)?.hasError(errorType) && this.formulario.get(controlName)?.touched
    );
  }
}
