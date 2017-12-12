import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  private apiUrl: string;
  private http: Http;

  constructor(http: Http) {
    this.apiUrl = 'https://randomuser.me/api/';
    this.http = http;
  }

  public getData(results: string, gender: string, nat: string) {
    console.log(this.apiUrl + '?results=' + results + '&gender=' + gender + '&nat=' + nat);
    return this.http.get(this.apiUrl + '?results=' + results + '&gender=' + gender + '&nat=' + nat).map((res: Response) => res.json());
  }

}
