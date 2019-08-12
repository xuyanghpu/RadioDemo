import { HttpInterfaceService } from './../../../services/http-interface.service';
import { Component, OnInit } from '@angular/core';
import {Router,NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  options:any;
  lst:any[] = [];
  address_lst:any[] = [];
  value_lst:any[] = [];

  all_count:number=0;
  constructor( public http:HttpInterfaceService,public router:Router) { 

    this.http.get_address_count_by_axios().then((data:any)=>{
      console.log(data.data);
      this.lst = data.data;
      
      this.lst.forEach(element => {
        this.address_lst.push(element._id);
        this.value_lst.push(element.namecount);
      });

      console.log(this.address_lst);
      console.log(this.value_lst);

      this.options = {
        title : {
          text: '电台累计指令统计分析',
          subtext: '对采集的所有指令按照电台本址分类统计',
          x: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['累计指令数量'],
          x: 'left'
        },
        toolbox: {
          show : true,
          feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              magicType : {show: true, type: ['line', 'bar']},
              restore : {show: true},
              saveAsImage : {show: true}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
           // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
           data: this.address_lst
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '累计指令数量',
            type: 'line',
            stack: 'counts',
            areaStyle: { normal: {} },
            //data: [120, 132, 101, 134, 90, 230, 210]
            data: this.value_lst
          }
        ]
      };
     
    });

    this.http.get_all_datacount_by_axios().then((data:any)=>{
      console.log(data);
      this.all_count = data.data;
    })
  }
  
  ngOnInit() {
    
  }

  showInfos(index:number,address:number){
     let queryParams:NavigationExtras={
      queryParams:{
        'address':address
      }
    }
   this.router.navigate(['/home/detail'],queryParams);
  }
  
}
