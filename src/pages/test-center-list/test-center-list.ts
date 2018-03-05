import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public platform:Platform) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestCenterListPage');
  }
  onInput(event) {
  }
  onCancel(event){

  }
  segmentChanged(event)
  {

  }
}
