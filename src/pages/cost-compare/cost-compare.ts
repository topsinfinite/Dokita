import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
    selector: 'modal-cost-compare',
    templateUrl: 'cost-compare.html',
  })
  export class CostCompareModal {
      constructor(public navparam:NavParams){
          let data=this.navparam.data;
          console.log(data.userId);
      }
  }