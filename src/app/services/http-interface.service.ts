import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttpInterfaceService {

  constructor(public http:HttpClient) { }


   //获取数据库中所有地址的数据量统计
   get_address_count_lst(){
    let api = 'http://127.0.0.1:3000/mongo/aggregate_group_by_address_count';
    this.http.get(api).subscribe(response=>{
      console.log(response);
      return response;
    });
  }

  //获取数据库中所有地址的数据量统计
  get_address_count_by_axios(){
    let api = 'http://127.0.0.1:3000/mongo/aggregate_group_by_address_count';
    return new Promise((resolve,reject)=>{
      axios.get(api)
      .then(function(reponse){
        resolve(reponse);
      });
    })
  }

  get_all_datacount(){
    let api = 'http://127.0.0.1:3000/mongo/count';
    this.http.get(api).subscribe(response=>{
      console.log(response);
      return response;
    });
  }

    //获取数据库中所有地址的数据量统计
    get_all_datacount_by_axios(){
      let api = 'http://127.0.0.1:3000/mongo/count';
      return new Promise((resolve,reject)=>{
        axios.get(api)
        .then(function(reponse){
          resolve(reponse);
        });
      })
    }

        //获取数据库中所有地址的数据量统计
        get_all_datainfo_group_by_type_axios(address:number){
          let api = 'http://127.0.0.1:3000/mongo/aggregate_group_detailinfo_by_type?address='+address;
          return new Promise((resolve,reject)=>{
            axios.get(api)
            .then(function(reponse){
              resolve(reponse);
            });
          })
        }

//查询某个电台的故障状态的信息 按照时间排序
        get_fault_state_by_address_axios(address:number){
          let api = 'http://127.0.0.1:3000/mongo/find_fault_state_by_address?address='+address;
          return new Promise((resolve,reject)=>{
            axios.get(api)
            .then(function(reponse){
              resolve(reponse);
            });
          })
        }

  //获取所有电台的本址信息
    get_all_address(){
      let api = 'http://127.0.0.1:3000/mongo/aggregate_find_all_address';
      return new Promise((resolve,reject)=>{
        axios.get(api)
        .then(function(reponse){
          resolve(reponse);
        });
      })
    }

    //查询最大时间和最小时间
    get_min_max_datetime(){
      let api = 'http://127.0.0.1:3000/mongo/aggregate_find_min_max_datetime';
      return new Promise((resolve,reject)=>{
        axios.get(api)
        .then(function(reponse){
          resolve(reponse);
        });
      })
    }
}
