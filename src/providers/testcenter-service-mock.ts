import {Injectable} from '@angular/core';
import testcenters from './mock-testcenters';

@Injectable()
export class TestCenterService {
    findAll() {
        return Promise.resolve(testcenters);
      }
    
      findById(id) {
        return Promise.resolve(testcenters[id]);
      }
    
      findByName(searchKey: string) {
        let key: string = searchKey.toUpperCase();
        return Promise.resolve(testcenters.filter((testcenter: any) =>
            (testcenter.name +  ' ' +testcenter.address +  ' ' + testcenter.city + ' ' + testcenter.test.testname).toUpperCase().indexOf(key) > -1));
      }
      findByCategory(category:string){
        let key: string = category.toUpperCase();
        return Promise.resolve(testcenters.filter((testcenter: any) =>
            (testcenter.category).toUpperCase().indexOf(key) > -1)); 
      }
}