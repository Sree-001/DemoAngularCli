import { Injectable } from '@angular/core';

@Injectable()
export class MyDemoServiceService {

  constructor() { }

  getMessage() {
    return "I am from the Service";
  }

}
