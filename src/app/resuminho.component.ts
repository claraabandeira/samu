import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

@Component({
  selector: 'app-root',
  templateUrl: './resuminho.component.html',
  styleUrls: ['./app.component.css']
})
export class resuminhoComponent implements OnInit {
    title = 'app';
    ufs : UF[];
    // dados_da_samu : Dados[];
    minha_id = 14;
    uf : UF;
    valor : number;
    media: number;
    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        // this.ufs = this.ufService.getAll();
        this.uf = this.ufService.getporID(this.minha_id);
        this.media = this.samuService.calcularMedia(this.minha_id);

    }
  }
