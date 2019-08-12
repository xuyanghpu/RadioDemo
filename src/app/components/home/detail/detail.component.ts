import { Component, OnInit } from '@angular/core';
import { HttpInterfaceService } from './../../../services/http-interface.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  
  options:any;
  lst:any[] = [];
  addr:number=242001;
  address_lst:any[] = [];
  value_lst:any[] = [];

  constructor(public http:HttpInterfaceService,public rount:ActivatedRoute) {

    this.rount.queryParams.subscribe((ad:any)=>{
      this.addr = ad.address;
     console.log(ad);
    })
    this.http.get_all_datainfo_group_by_type_axios(this.addr).then((data:any)=>{
      console.log(data);
      this.lst = data.data;

      this.lst.forEach(element => {
        this.address_lst.push(element._id);
        this.value_lst.push(element.count);
      });

      console.log(this.address_lst);
      console.log(this.value_lst);

      this.options = {
        title : {
          text: ['电台' + this.addr.toString() +'指令统计分析'],
          subtext: '对单个电台采集的所有指令按照指令类型进行分类统计',
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
          x:'left'
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
            name:'累计指令数量',
            type: 'line',
            stack: 'counts',
            areaStyle: { normal: {} },
            //data: [120, 132, 101, 134, 90, 230, 210]
            data: this.value_lst
          }
        ]
      };

    });

   }

  ngOnInit() {
    console.log(this.rount);
  }

}
