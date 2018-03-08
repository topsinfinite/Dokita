import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {TestCenterService} from "../../providers/testcenter-service-mock";
import {TestCenterDetailPage} from '../testcenter-detail/testcenter-detail';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'page-test-center-list',
  templateUrl: 'test-center-list.html',
})
export class TestCenterListPage {
  searchKey: string = "";
  testCat: string = "lab";
  isAndroid: boolean = false;

  testcenters: Array<any>=[];

  constructor(public navCtrl: NavController,public service: TestCenterService, public navParams: NavParams, public platform:Platform) {
    this.findByCategory(this.testCat);
    this.testCat="lab";
  }

  ionViewDidLoad() {
    //this.findByCategory(this.testCat);
    //console.log('ionViewDidLoad TestCenterListPage');
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
  findByName(){
    this.service.findByName(this.searchKey,this.testCat)
            .then(data => {
                this.testcenters = data;
                /* if (this.viewMode === "map") {
                    this.showMarkers();
                } */
            })
            .catch(error => alert(JSON.stringify(error)));
  }
  
  onInput(event) {
     this.findByName();
  }
  onCancel(event){
   this.findByCategory(this.testCat);
  }
  segmentChanged(event)
  {
   this.testCat=event.value;
   this.findByCategory(event.value);
  }
  openTestCenterDetail(testcenter:any){
    this.navCtrl.push(TestCenterDetailPage, testcenter);
  }
  /* findByCategory(category:string){
    this.service.findByCategoryObservable(category)
    .subscribe(data=>{
      this.testcenters=data;
    },
    error=>{console.log(error)})
     
  }  */
}
