import { Injectable } from '@angular/core';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class UFService {
  getAll(): UF[] {
    return UFs;
  }
  myUF(id:number):UF{
    for (let entry of UFs){
      if(entry.id == id){
        return entry;
      }
    }
    return undefined;
  }
}
