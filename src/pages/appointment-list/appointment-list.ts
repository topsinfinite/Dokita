import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PropertyService} from '../../providers/property-service-mock';
import {PropertyDetailPage} from '../property-detail/property-detail';

@Component({
    selector: 'page-appointment-list',
    templateUrl: 'appointment-list.html'
})
export class AppointmentListPage {

    appointments: Array<any>;

    constructor(public navCtrl: NavController, public service: PropertyService) {
        this.getAppointments();
    }

    itemTapped(appointment) {
        this.navCtrl.push(PropertyDetailPage, appointment.property);
    }

    deleteItem(appointment) {
        this.service.removeAppointment(appointment)
            .then(() => {
                this.getAppointments();
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    getAppointments() {
        this.service.getAppointments()
            .then(data => this.appointments = data);
    }

}
