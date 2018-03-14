//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/of';

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
        picture: "assets/img/labimg01.jpg",
        scheduleTime:["9:00am","9:30am","10:00am","10:30am","11:00am","11:30am","12:00pm","12:30am","1:00pm","1:30pm","2:00pm"]
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
        picture: "assets/img/labimg01.jpg",
        scheduleTime:["9:00am","9:30am","10:00am","10:30am","11:00am","11:30am","12:00pm","12:30am","1:00pm","1:30pm","2:00pm"]
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
        picture: "assets/img/labimg01.jpg",
        scheduleTime:["9:00am","9:30am","10:00am","10:30am","11:00am","11:30am","12:00pm","12:30am","1:00pm","1:30pm","2:00pm"]
    },
    {
        id: 4,
        name:"New Jersey Outpatient Laboratory",
        address: " 574 wetmore Ln",
        city: "Jersey city",
        state: "NJ",
        zip: "21044",
        price: "$130",
        category:"lab",
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
                testname:"OPTION",
                cost:"$800"
            }

        ],
        Phone:"617-244-3672",   
        Mobile:"617-244-3672",
        thumbnail:"assets/img/labimg01-thumbnail.jpg",
        picture: "assets/img/labimg01.jpg",
        scheduleTime:["9:00am","9:30am","10:00am","10:30am","11:00am","11:30am","12:00pm","12:30am","1:00pm","1:30pm","2:00pm"]
    }

];

export default testcenters