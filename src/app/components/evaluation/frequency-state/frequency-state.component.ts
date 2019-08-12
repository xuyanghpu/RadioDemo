import { Component, OnInit } from '@angular/core';
declare var BMap: any;
@Component({
  selector: 'app-frequency-state',
  templateUrl: './frequency-state.component.html',
  styleUrls: ['./frequency-state.component.scss']
})
export class FrequencyStateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const map = new BMap.Map('map');//创建地图实例
    const point = new BMap.Point(116.404, 39.915);//创建点坐标
    map.centerAndZoom(point, 15);//初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);//开启鼠标滚轮缩放
  }

}
