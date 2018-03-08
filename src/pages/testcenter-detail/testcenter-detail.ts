import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

 
 @Component({
  selector: 'page-testcenter-detail',
  templateUrl: 'testcenter-detail.html',
})
export class TestCenterDetailPage {
  testcenter: any;
  appmtType:string;
  tests:any={};
  schedules:string[]=[];;
  appdate:any;
  isSet:boolean=false;
  appointmentCount:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.testcenter=this.navParams.data;
    this.tests=this.testcenter.test;
    //console.log(this.testcenter);
  }

  ionViewDidLoad(){
    this.appdate=new Date().toISOString();
}
changeDate(dateval){
    this.isSet=true;
    this.schedules=this.testcenter.scheduleTime;
}

}
