import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url = environment.urlNewsApi;

  constructor(private http: HttpClient) { }

  getNews(){
    const query = {
      q:"tesla",
      from:"2022-06-24",
      sortBy: "publishedAt",
      apiKey: "6b6bec6cd30740348fda29ecdda8792e"
    }
    //this.url = '/v2/everything'
    return this.http.get(`${this.url}/v2/everything`, {params: query});
  }
}
