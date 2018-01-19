import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http/client';

@Injectable()
export class NumeroService {

  constructor(private http: HttpClient) {
  }

  getNumeros(): Promise<any> {
    return this.http.get('https://next.json-generator.com/api/json/get/N1Arzfi4N').toPromise();
  }
}
