import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

//let testcenters = Observable.of([
    let testcenters:Array<any> =[
    {
        id: 1,
        name:"Howard County General hospital outpatient Laboratory",
        address: "18 Henry st",
        city: "Cambridge",
        state: "MA",
        zip: "01742",
        price: "$130",
        category:"lab",
        long: -71.11095,
        lat: 42.35663,
        test:[
            {
                testname:"CBT",
                cost:"$300",
            },
            {
                testname:"Chem7",
                cost:"$1200"
            },
            {
                testname:"LFT",
                cost:"$800"
            }

        ],
        Phone:"617-244-3672",   
        Mobile:"617-244-3672",
        thumbnail:"assets/img/labimg01-thumbnail.jpg",
        picture: "assets/img/labimg01.jpg"
    },
    {
        id: 2,
        name:"Boston General hospital Laboratory",
        address: "18 Henry st",
        city: "Boston",
        state: "MA",
        zip: "01742",
        price: "$130",
        category:"lab",
        long: -71.10869,
        lat: 42.359103,
        test:[
            {
                testname:"CBT",
                cost:"$400",
            },
            {
                testname:"Chem7",
                cost:"$1100"
            },
            {
                testname:"LFT",
                cost:"$900"
            }

        ],
        Phone:"617-244-3672",   
        Mobile:"617-244-3672",
        thumbnail:"assets/img/labimg01-thumbnail.jpg",
        picture: "assets/img/labimg01.jpg"
    },
    {
        id: 3,
        name:"Columbia Outpatient Laboratory",
        address: " 5755 Cedar Ln",
        city: "Columbia",
        state: "MD",
        zip: "21044",
        price: "$130",
        category:"imaging",
        long: -71.10869,
        lat: 42.359103,
        test:[
            {
                testname:"CBT",
                cost:"$500",
            },
            {
                testname:"Chem7",
                cost:"$1900"
            },
            {
                testname:"LFT",
                cost:"$800"
            }

        ],
        Phone:"617-244-3672",   
        Mobile:"617-244-3672",
        thumbnail:"assets/img/labimg01-thumbnail.jpg",
        picture: "assets/img/labimg01.jpg"
    }

];

export default testcenters