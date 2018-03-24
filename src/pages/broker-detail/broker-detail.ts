import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {BrokerService} from '../../providers/broker-service-mock';

@Component({
    selector: 'page-broker-detail',
    templateUrl: 'broker-detail.html'
})
export class BrokerDetailPage {

    broker: any={};
    education:any={};
    id;

    constructor(public navCtrl: NavController, public navParams: NavParams, public service: BrokerService) {
        this.broker = this.navParams.data;
        this.education=this.broker.education;
        /* service.findById(this.id).then(
        data =>{
                console.log(data);
                this.broker = data;
                this.education=data.education;
            }
        ); */
    }

}
