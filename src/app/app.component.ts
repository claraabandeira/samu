import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UFService, SamuService]
})
export class AppComponent implements OnInit {
    title = 'app';
    ufs : UF[];
    dados_da_samu : Dados[];
    minha_id = 14;
    uf : UF
    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        // this.ufs = this.ufService.getAll();
        this.uf = this.ufService.myUF(this.minha_id);
        this.dados_da_samu = this.samuService.getMunicipiosdoEstado(this.minha_id);

    }
}
