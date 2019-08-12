import { Component, OnInit } from '@angular/core';
import { HttpInterfaceService } from './../../../services/http-interface.service';
import {Router,NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-evaluation-home',
  templateUrl: './evaluation-home.component.html',
  styleUrls: ['./evaluation-home.component.scss']
})
export class EvaluationHomeComponent implements OnInit {
  lst:any[] = [];
  address_lst:any[] = [];
  constructor(public http:HttpInterfaceService,public router:Router) {
    this.http.get_all_address().then((data:any)=>{
      data.data.forEach(element => {
        this.address_lst.push(element);
      });

      console.log(this.address_lst);
    });
  

  }

 ngOnInit() {
 }

 public address:number = 242002
 public begindate:string = new Date().toISOString().substr(0,10);
 public enddate:string = new Date().toISOString().substr(0,10);

  //监听获取开始日期接口
  getBeginDate(val){
    this.begindate = val;
    console.log(val)//打印获取的值
  }

  //监听获取结束日期接口
  getEndDate(val){
    this.enddate =val;
    console.log(val)//打印获取的值
  }

  //监听获取电台本址接口
  getAddress(val){
    this.address = parseInt(val);
    console.log(this.address);
  }

  showRadioState(){
    let queryParams:NavigationExtras={
      queryParams:{
        'address':this.address,
        'begin_date':this.begindate,
        'end_date':this.enddate
      }
    }

   this.router.navigate(['/evaluation/radiostate'],queryParams);
  }


  showChannelState(){
    let queryParams:NavigationExtras={
      queryParams:{
        'address':this.address,
        'begin_date':this.begindate,
        'end_date':this.enddate
      }
    }

   this.router.navigate(['/evaluation/channelstate'],queryParams);
  }

  showFrequencyState(){
    let queryParams:NavigationExtras={
      queryParams:{
        'address':this.address,
        'begin_date':this.begindate,
        'end_date':this.enddate
      }
    }

   this.router.navigate(['/evaluation/frequencystate'],queryParams);
  }

  showEvaluationState(){
    let queryParams:NavigationExtras={
      queryParams:{
        'address':this.address,
        'begin_date':this.begindate,
        'end_date':this.enddate
      }
    }
    
   this.router.navigate(['/evaluation/evaluationstate'],queryParams);
  }

}
