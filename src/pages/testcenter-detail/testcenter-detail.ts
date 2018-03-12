import { Component } from '@angular/core';
import * as moment from 'moment';
import {ActionSheetController, ModalController, ActionSheet, NavController, NavParams, ToastController,AlertController} from 'ionic-angular';
import {AppointmentListPage} from '../appointment-list/appointment-list';
import {CostCompareModal} from '../cost-compare/cost-compare';
import {PropertyService} from '../../providers/property-service-mock';
 
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
  appointmentCount:any=0;
  appDetail:any;
  category:string="Testing";
  appointments:any;
  selectOptions:any={};
  isSelected:boolean=false;

  constructor(public alertCtrl: AlertController,public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController, public navParams: NavParams,public propertyService: PropertyService, public toastCtrl: ToastController) {
     
      this.testcenter=this.navParams.data;
      this.tests=this.testcenter.test;
      this.getPendingAppointCount();
    //console.log(this.testcenter);
  }

  ionViewDidLoad(){
    this.appdate=new Date().toISOString();
    this.selectOptions = {
      title: 'Select Test/Procedure/Imaging',
      mode: 'ios'
    };
  }
  presentProfileModal() {
    let costCompModal = this.modalCtrl.create(CostCompareModal, { userId: 8675309 });
    costCompModal.present();
  }
  clickOption(){
    this.isSelected=true;
  }
  testSelected(newval) {
    let selectedTest = this.tests.find((f)=>{
      return f.testname=== newval;
    });
    this.tests.test=selectedTest;
}
  changeDate(dateval){
      this.isSet=true;
      this.appmtType=this.tests[0];
      this.schedules=this.testcenter.scheduleTime;
  }
  logAppointment(evt){
    this.confirmAppointment(evt);
     //console.log(evt);
  }
  goAppointment(appdetail){
    this.navCtrl.push(AppointmentListPage,this.appointments);
}
  confirmAppointment(timepicked) {
    this.appdate=moment(this.appdate).format('D MMM YYYY');
     let confirm = this.alertCtrl.create({
       title: 'Kindly confirm your appointment',
       message: `Your scheduled appointment is with : ${this.testcenter.name} Appointment Type: ${this.appmtType} Date: ${this.appdate } Time: ${timepicked}`,
       buttons: [
         {
           text: 'Cancel',
           handler: () => {
             console.log('Disagree clicked');
           }
         },
         {
           text: 'Confirm',
           handler: () => {
               this.appDetail={
                   testcenter:this.testcenter,
                   category:this.category,
                   appdate:this.appdate,
                   apptime:timepicked,
                   apptype:this.appmtType
               }
              this.propertyService.addAppointment(this.appDetail);
              this.getPendingAppointCount();
              let toast = this.toastCtrl.create({
                 message: 'Successfully added to your appointments',
                 cssClass: 'mytoast',
                 duration: 1000
             });
             toast.present(toast);
           }
         }
       ]
     });
     confirm.present();
   }
   getPendingAppointCount(){
    this.propertyService.getAppointments(this.category)
    .then(data=>{
      this.appointments={category:this.category,appointmentList:data};
      this.appointmentCount=data.length
    });
  }
  getCategory(){
    if(this.testcenter!==null){
      switch(this.testcenter.category){
        case "lab":
        return "Laboratory";
        case "procedure":
        return "Procedure";
        case "imaging":
        return "Imaging"

      }
    }
  }
  share(testcenter) {
    let actionSheet: ActionSheet = this.actionSheetCtrl.create({
        title: 'Share via',
        buttons: [
            {
                text: 'Twitter',
                handler: () => console.log('share via twitter')
            },
            {
                text: 'Facebook',
                handler: () => console.log('share via facebook')
            },
            {
                text: 'Email',
                handler: () => console.log('share via email')
            },
            {
                text: 'Cancel',
                role: 'cancel',
                handler: () => console.log('cancel share')
            }
        ]
    });

    actionSheet.present();
}

}
