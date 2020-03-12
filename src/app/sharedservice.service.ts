import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  data: Object;

  constructor() { }


  setValue(data) {
    this.data = data
  }

  getValue() {
    return this.data
  }


}
