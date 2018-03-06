import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {TestCenterService} from "../../providers/testcenter-service-mock";


/**
 * Generated class for the TestCenterListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-test-center-list',
  templateUrl: 'test-center-list.html',
})
export class TestCenterListPage {
  searchKey: string = "";
  testSeg: string = "lab";
  isAndroid: boolean = false;

  testcenters: Array<any>;

  constructor(public navCtrl: NavController,public service: TestCenterService, public navParams: NavParams, public platform:Platform) {
    this.findByCategory(this.testSeg);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestCenterListPage');
  }
  findAll() {
    this.service.findAll()
        .then(data => this.testcenters = data)
        .catch(error => alert(error));
  }
  findByCategory(category:string){
    this.service.findByCategory(category)
    .then(data=>this.testcenters=data)
    .catch(error=>alert(error))
  }
  onInput(event) {
  }
  onCancel(event){

  }
  segmentChanged(event)
  {
   console.log(event);
  }
}
