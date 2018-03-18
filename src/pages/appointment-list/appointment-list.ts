import {Component} from '@angular/core';
import {NavController,NavParams,ToastController,AlertController} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';
import {PropertyDetailPage} from '../property-detail/property-detail';
import {TestCenterDetailPage} from '../testcenter-detail/testcenter-detail';

@Component({
    selector: 'page-appointment-list',
    templateUrl: 'appointment-list.html'
})  
export class AppointmentListPage {

    appointments: Array<any>;
    appointmentCategory:any={};
    category:string="Doctor";
    constructor(public alertCtrl: AlertController,public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams,public service: PropertyService) {
        this.appointmentCategory=this.navParams.data;
        if(this.appointmentCategory.category){
            this.category=this.appointmentCategory.category;
        }
        this.getAppointments();
    }

    itemTapped(appointment) {
        if(this.category==="Doctor"){
          this.navCtrl.push(PropertyDetailPage, appointment);
        }else{
            this.navCtrl.push(TestCenterDetailPage, appointment.testcenter);
        }
    }

    deleteItem(evt) {
        this.confirmDelete(evt);
    }
    editItem(appointment) {
         this.itemTapped(appointment);
    }
    confirmDelete(appointment){
     let confirm = this.alertCtrl.create({
       title: 'Kindly confirm appointment cancellation',
       message: `Your scheduled appointment : Type: ${appointment.appmtType}
        Date: ${appointment.appdate } Time: ${appointment.apptime}  will be cancelled.`,
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
            this.service.removeAppointment(appointment)
            .then(() => {
                this.getAppointments();
            })
            .catch(error => alert(JSON.stringify(error)));
              let toast = this.toastCtrl.create({
                 message: 'Successfully cancelled appointment',
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
    getAppointments() {
        this.appointments=[];
        this.service.getAppointments(this.category)
            .then(data => this.appointments = data);
    }
    segmentChanged(event){
      this.category=event.value
      this.getAppointments();
    }

}
