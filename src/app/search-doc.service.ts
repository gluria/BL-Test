import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Doc }           from './document';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchDocService {

  constructor( private http: Http ) { }

  // search(): Observable<Doc> {
  //   // this.http.get("http://localhost:9200/logstash-2017.08.24/logs/AV4THwTKaQaWgoy7WI0U")
  //   //                 .map(response => console.log(response.json()) );
  //   console.log('Search Document Service!!!!');
  //   // return this.http.get("http://localhost:9200/_search?q=nutritional+supplementation")
  //   //                 .map(response => response.json() as Doc);
  //   return this.http.get("http://localhost:9200/logstash-2017.08.24/logs/AV4THwTKaQaWgoy7WI0U")
  //                   .map(response => response.json() as Doc);
  // }

  search(term:string): Promise<Doc>{
    console.log('Search Document Service!!!!');
    console.log(term);
    return this.http.get('http://localhost:9200/_search?q='+term)
                    .toPromise().then(response => response.json() as Doc);
  }
}
