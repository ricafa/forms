import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: 'loiane@gtoner.com'
  };

  onSubmit(form) {
    console.log(form, form.value.email, form.value.nome);
    console.log(this.usuario);
  }

  constructor() { }

  ngOnInit() {
  }

}
