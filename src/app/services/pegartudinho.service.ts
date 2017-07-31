import { Injectable } from '@angular/core';
import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';
import { UF } from '../types/uf';
import { UFs } from './mock-ufs';
import { UFService } from './uf.service';
import { Dadox} from '../types/tudinho'

@Injectable()
export class GetAllService {

constructor(private ufService: UFService) { }

  joinUfs(): Dadox[]{
    let dadosfinais: Dadox[] = [];
    let i: number;
    i = 0;
    let all : Dados[] = VALORES;

    all.forEach((item) => {
      let dado : Dadox = new Dadox();
      dado.ano = item.ano;
      dado.valor = item.valor;
      dado.uf = this.ufService.getporID(item.uf_id);
      dadosfinais.push(dado);
    });
    return dadosfinais;
  }
}
