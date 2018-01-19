import { Injectable } from '@angular/core';

@Injectable()
export class NumeroService {

  constructor() { }

  getNumeros(): number[] {
    return [1, 1, 2, 3, 5, 8, 13, 21, 34];
  }
}
