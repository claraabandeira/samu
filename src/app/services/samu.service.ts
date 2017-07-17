import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';
import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class SamuService {

  getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;
  }
  //municipios por estado
  getMunicipiosdoEstado(uf: UF): Dados[]{
    let valoresDoEstado:Dados[] = [];
    let i = 0;
    for (let entry of VALORES){
      if(entry.uf_id == uf.id){
        valoresDoEstado[i] = entry;
        i++;
      }
      return valoresDoEstado;
    }
  }
  //anos e municipios atendidos
  getAno(id: number): Dados[] {
    let ano: Dados[] = [];
    let x = 0;
    for (let entry of VALORES){
      if(entry.uf_id === id)
      {
        ano[x] = entry;
        x++;
      }
    }
    return ano;
  }
  //média
  calcularMedia(id:number): number{
    let uf:UF;
    let media = 0;
    let soma = 0;
    let ac = 0; //ac => acumulador
    for(let entry of VALORES){
      if(entry.uf_id == id){
        soma =+ entry.valor;
        ac++;
      }
      media = soma/ac;
    }
      return Math.round(media);
  }
}
