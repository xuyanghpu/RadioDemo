
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
    import { WelcomeComponent } from './components/home/welcome/welcome.component';
    import { DetailComponent } from './components/home/detail/detail.component';

import {EvaluationComponent}  from './components/evaluation/evaluation.component'
    import { RadioStateComponent } from './components/evaluation/radio-state/radio-state.component';
    import { ChannelStateComponent } from './components/evaluation/channel-state/channel-state.component';
    import { FrequencyStateComponent } from './components/evaluation/frequency-state/frequency-state.component';
    import { EvaluationStateComponent } from './components/evaluation/evaluation-state/evaluation-state.component';
    import { EvaluationHomeComponent } from './components/evaluation/evaluation-home/evaluation-home.component';


const routes: Routes = [
  {
    path:'home',component:HomeComponent,
    children:[
      {
        path:'welcome', component:WelcomeComponent
      },
      {
        path:'detail',component:DetailComponent
      },
      {
        path:'**',redirectTo:'welcome'
      }
    ]
  },
  {
    path:'evaluation',component:EvaluationComponent,
    children:[
      {
        path:'evaluationhome',component:EvaluationHomeComponent
      },
      {
        path:'radiostate',component:RadioStateComponent
      },
      {
        path:'channelstate',component:ChannelStateComponent
      },
      {
        path:'frequencystate',component:FrequencyStateComponent
      },
      {
        path:'evaluationstate',component:EvaluationStateComponent
      },
      {
        path:'**',redirectTo:'evaluationhome'
      }
    ]
  },
  {
    path:'**',redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
