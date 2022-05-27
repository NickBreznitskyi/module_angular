import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IPost} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  storagePost = new BehaviorSubject<IPost | null>(null);

  constructor() {
  }
}
