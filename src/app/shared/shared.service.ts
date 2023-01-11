import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

 emitselectedproduct:BehaviorSubject<number>=new BehaviorSubject(0);
 cartobs=this.emitselectedproduct.asObservable();
  constructor() { }
}
