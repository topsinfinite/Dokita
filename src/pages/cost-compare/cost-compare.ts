import { Component } from '@angular/core';
import { NavParams,ViewController,NavController } from 'ionic-angular';
import {TestCenterDetailPage} from '../testcenter-detail/testcenter-detail';
import {TestCenterService} from "../../providers/testcenter-service-mock";

@Component({
    selector: 'modal-cost-compare',
    templateUrl: 'cost-compare.html',
  })
  export class CostCompareModal {
      test:any;
      testList:Array<any>=[];
      testcenter:any;
      constructor(public navCtrl: NavController,public navparam:NavParams,public service: TestCenterService, public viewCtrl:ViewController){
          let data=this.navparam.data;
          this.test=data.test;
          this.testList=data.testList;
         // console.log(data.testList);
      }
  
      dismiss() {
        this.viewCtrl.dismiss();
      }
      openTestCenterDetail(itm:any){
        this.service.findById(itm.id)
        .then(data=>{
            this.testcenter=data;
            this.navCtrl.push(TestCenterDetailPage, this.testcenter);
        })
       
      }
  }