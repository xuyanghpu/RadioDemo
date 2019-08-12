import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public http:HttpClient) { }

  


  getdata(){
    return 'xuyang';
  }

  getcount(){
    this.http.get('http://127.0.0.1:3000/mongo/count?address=242001').subscribe(response=>{
      console.log(response);
    });
  }

  get_count_by_axios(){
    return new Promise((resolve,reject)=>{
      axios.get('http://127.0.0.1:3000/mongo/count?address=242001')
      .then(function(reponse){
        resolve(reponse);
      });
    })
  }
}
