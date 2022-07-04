import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Md5} from "md5-typescript";

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  url = environment.urlMarvelApi;

  constructor(private http: HttpClient) { }
  
  getMarvel(){
    const query = {
      limit: 40,
      ts: new Date().getTime(),
      apikey: environment.publickey,
      hash: Md5.init(new Date().getTime() + environment.privatekey + environment.publickey)
    }
    return this.http.get(`${this.url}:443/v1/public/characters`, {params: query});
  }


}
