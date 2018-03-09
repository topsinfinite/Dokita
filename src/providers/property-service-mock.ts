import {Injectable} from '@angular/core';
import properties from './mock-properties';

@Injectable()
export class PropertyService {

  favoriteCounter: number = 0;
  favorites: Array<any> = [];
  appointments:Array<any>=[];

  findAll() {
    return Promise.resolve(properties);
  }

  findById(id) {
    return Promise.resolve(properties[id - 1]);
  }

  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    return Promise.resolve(properties.filter((property: any) =>
        (property.title +  ' ' +property.address +  ' ' + property.city + ' ' + property.description).toUpperCase().indexOf(key) > -1));
  }

  getFavorites() {
    return Promise.resolve(this.favorites);
  }

  favorite(property) {
    this.favoriteCounter = this.favoriteCounter + 1;
    this.favorites.push({id: this.favoriteCounter, property: property});
    return Promise.resolve();
  }

  unfavorite(favorite) {
    let index = this.favorites.indexOf(favorite);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
    return Promise.resolve();
  }
  addAppointment(appDetail:any){
    if(appDetail!==null){
      if(appDetail.category==="Doctor"){
        this.appointments.push({category:appDetail.category,testcenter:{}, doctor:appDetail.doctor,appdate:appDetail.appdate,apptime:appDetail.apptime,apptype:appDetail.apptype});
      }else{
        this.appointments.push({category:appDetail.category,doctor:{}, testcenter:appDetail.testcenter,appdate:appDetail.appdate,apptime:appDetail.apptime,apptype:appDetail.apptype});
      }
    return Promise.resolve()
    }
  }
  getAppointments(category:string){
    return Promise.resolve(this.appointments.filter((appdetail:any)=>{
      appdetail.category.indexOf(category)>-1;
    }));
  }
  removeAppointment(appDetail){
    let index = this.appointments.indexOf(appDetail);
    if (index > -1) {
      this.appointments.splice(index, 1);
    }
    return Promise.resolve();
  }

}
