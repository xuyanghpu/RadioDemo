import { HttpInterfaceService } from './services/http-interface.service';
import { StorageService } from './services/storage.service';
import { CountServiceService } from './services/count-service.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//引入表单相关的模块 才可以用双休数据绑定
import { FormsModule } from '@angular/forms';
//加载echarts
import { NgxEchartsModule} from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';

import  {HttpClientModule}  from '@angular/common/http';
import { DetailComponent } from './components/home/detail/detail.component';

import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { RadioStateComponent } from './components/evaluation/radio-state/radio-state.component';
import { ChannelStateComponent } from './components/evaluation/channel-state/channel-state.component';
import { FrequencyStateComponent } from './components/evaluation/frequency-state/frequency-state.component';
import { EvaluationStateComponent } from './components/evaluation/evaluation-state/evaluation-state.component';
import { EvaluationHomeComponent } from './components/evaluation/evaluation-home/evaluation-home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    DetailComponent,
    RadioStateComponent,
    ChannelStateComponent,
    FrequencyStateComponent,
    EvaluationStateComponent,
    EvaluationComponent,
    EvaluationHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxEchartsModule,
    FormsModule
  ],
  providers: [
    CountServiceService,
    StorageService,
    HttpInterfaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
