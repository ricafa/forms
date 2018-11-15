import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usuario: any = {
    nome: 'Ricardo',
    historico: 'comprou duas garrafas'
  };

  usuario1: any = {
    nome: 'Ricardox',
    historico: 'comproux duas garrafas'
  };

  usuarios: any = [
    { nome: 'Ricardo', historico: 'teste 00' },
    { nome: 'Ricardox', historico: 'teste 01' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
