import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  theme:Subject<String> = new Subject<String>()
  constructor() { }
}
