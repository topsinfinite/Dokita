import {Component} from '@angular/core';
import * as moment from 'moment';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController,AlertController} from 'ionic-angular';
import {BrokerDetailPage} from '../broker-detail/broker-detail';
import {AppointmentListPage} from '../appointment-list/appointment-list';
import {PropertyService} from '../../providers/property-service-mock';

@Component({
    selector: 'page-property-detail',
    templateUrl: 'property-detail.html'
})
export class PropertyDetailPage {

    property: any;
    appdate:any;
    appmtType:string;
    isSet:boolean=false;
    schedules:string[]=[];
    appDetail:any;
    appointmentCount:any;
    category:string="Doctor";
    appointmentCategory:any;

    constructor(public alertCtrl: AlertController,public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, 
        public navParams: NavParams, public propertyService: PropertyService, public toastCtrl: ToastController)
         {
        this.property = this.navParams.data;
        propertyService.findById(this.property.id).then(
            property => this.property = property
            
        );
        this.getPendingAppointCount();
    }
    ionViewDidLoad(){
        this.appdate=new Date().toISOString();
    }
    changeDate(dateval){
        this.isSet=true;
        this.schedules=this.property.scheduleTime;
    }
    logAppointment(evt){
       this.confirmAppointment(evt);
        console.log(evt);
    }
    getPendingAppointCount(){
        this.propertyService.getAppointments(this.category)
        .then(data=>
        {
            this.appointmentCategory={category:this.category};
            this.appointmentCount=data.length;
        });
    }
    confirmAppointment(timepicked) {
       this.appdate=moment(this.appdate).format('D MMM YYYY');
        let confirm = this.alertCtrl.create({
          title: 'Kindly confirm your appointment',
          message: `Your scheduled appointment is with : ${this.property.name} Appointment Type: ${this.appmtType} Date: ${this.appdate } Time: ${timepicked}`,
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
                      doctor:this.property,
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
    openBrokerDetail(id) {
        this.navCtrl.push(BrokerDetailPage, id);
    }
    goAppointment(appdetail){
        this.navCtrl.push(AppointmentListPage,this.appointmentCategory);
    }
    favorite(property) {
        this.propertyService.favorite(property)
            .then(property => {
                let toast = this.toastCtrl.create({
                    message: 'Property added to your favorites',
                    cssClass: 'mytoast',
                    duration: 1000
                });
                toast.present(toast);
            });
    }

    share(property) {
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
