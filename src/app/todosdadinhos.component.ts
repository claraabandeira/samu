import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service';
import { Dadox} from './types/tudinho';
import {Dados} from './types/samu';
import {SamuService} from './services/samu.service';
import {GetAllService} from "./services/pegartudinho.service";

@Component({
  selector: 'app-root',
  templateUrl: './todosdadinhos.component.html',
  styleUrls: ['./app.component.css']
})
export class todosdadinhosComponent implements OnInit {
    title = 'app';
    ufs : UF[];
    dados_da_samu : Dados[];
    minha_id = 14;
    uf : UF;
    valor : number;
    anos: Dados[];
    media: number;
    dados: Dadox[];
    constructor(private ufService: UFService, private samuService: SamuService, private getAllService: GetAllService)
    { }

    ngOnInit(): void {
        // this.ufs = this.ufService.getAll();
        this.uf = this.ufService.getporID(this.minha_id);
        this.dados_da_samu = this.samuService.getMunicipiosdoEstado(this.uf);
        this.anos = this.samuService.getAno(this.minha_id);
        this.media = this.samuService.calcularMedia(this.minha_id);
        this.dados = this.getAllService.joinUfs();
    }
  }
