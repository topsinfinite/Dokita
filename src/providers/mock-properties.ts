let properties: Array<any> = [
    {
        id: 1,
        address: "18 Henry st",
        city: "Cambridge",
        state: "MA",
        zip: "01742",
        price: "$130",
        title: "Primary care doctor",
        name:"Tokunbo Ajay M.D",
        rating:"5",
        bedrooms: 4,
        bathrooms: 3,
        long: -71.11095,
        lat: 42.35663,
        picture: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        thumbnail: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 1,
            name: "Tokunbo Ajayi",
            title: "Primary care doctor",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
        },
        affliation:["Johns Hopkins Hospital","University of Maryland"],
        scheduleTime:["9:00am","9:30am","10:00am","10:30am","11:00am","11:30am","12:00pm","12:30am","1:00pm","1:30pm","2:00pm"]
    },
    {
        id: 2,
        address: "24 Pearl st",
        city: "Cambridge",
        state: "MA",
        zip: "02420",
        price: "$140",
        title: "Internal medicine",
        name:"Caroline Kingsley M.D",
        rating:"3",
        bedrooms: 5,
        bathrooms: 4,
        long: -71.10869,
        lat: 42.359103,
        picture: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        thumbnail: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 2,
            name: "Caroline Kingsley",
            title:"Internal medicine",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
        },
        affliation:["Johns Hopkins Hospital","University of Maryland"],
        scheduleTime:["9:00am","9:30am","10:00am","10:30am","11:00am","11:30am","12:00pm","12:30am","1:00pm","1:30pm","2:00pm"]
    },
    {
        id: 3,
        address: "61 West Cedar st",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$200",
        title: "Cardiologist",
        name:"Michael Jones M.D",
        rating:"5",
        bedrooms: 5,
        bathrooms: 4,
        long: -71.070061,
        lat: 42.359986,
        picture: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        thumbnail: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 3,
            name: "Michael Jones",
            title: "Cardiologist",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
        },
        affliation:["Johns Hopkins Hospital","University of Maryland"],
        scheduleTime:["9:00am","9:30am","10:00am","10:30am","11:00am","11:30am","12:00pm","12:30am","1:00pm","1:30pm","2:00pm"]
    },
    {
        id: 4,
        address: "32 Prince st",
        city: "Cambridge",
        state: "MA",
        zip: "02420",
        price: "$200",
        title: "Dentist",
        name:"Jonathan Bradley M.D",
        rating:"4",
        bedrooms: 5,
        bathrooms: 4,
        long: -71.110448,
        lat: 42.360642,
        picture: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        thumbnail: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        tags: "victorian",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 4,
            name: "Jonathan Bradley",
            title: "Dentist",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jonathan_bradley.jpg"
        },
        affliation:["Johns Hopkins Hospital","University of Maryland"],
        scheduleTime:["9:00am","9:30am","10:00am","10:30am","11:00am","11:30am","12:00pm","12:30am","1:00pm","1:30pm","2:00pm"]
    },
    {
        id: 5,
        address: "211 Charles Street",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$80",
        title: "Dermatologist",
        name:"Tim Walker M.D",
        rating:"4",
        bedrooms: 3,
        bathrooms: 2,
        long: -71.084454,
        lat: 42.368168,
        picture: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        thumbnail: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 4,
            name: "Jennifer Wu",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
        },
        affliation:["Johns Hopkins Hospital","University of Maryland"],
        scheduleTime:["9:00am","9:30am","10:00am","10:30am","11:00am","11:30am","12:00pm","12:30am","1:00pm","1:30pm","2:00pm"]
    },
    {
        id: 6,
        address: "448 Hanover st",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$100",
        title: "Opthamologist",
        name:"Jennifer Sam M.D",
        rating:"4",
        bedrooms: 4,
        bathrooms: 2,
        long: -71.052617,
        lat: 42.366855,
        picture: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        thumbnail: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 5,
            name: "Olivia Green",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg"
        },
        affliation:["Johns Hopkins Hospital","University of Maryland"],
        scheduleTime:["9:00am","9:30am","10:00am","10:30am","11:00am","11:30am","12:00pm","12:30am","1:00pm","1:30pm","2:00pm"]
    },
    {
        id: 7,
        address: "127 Endicott st",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$100",
        title: "Primary care doctor",
        name:"William Sam M.D",
        rating:"4",
        bedrooms: 3,
        bathrooms: 1,
        long: -71.057352,
        lat: 42.365003,
        picture: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        thumbnail: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 6,
            name: "Miriam Aupont",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/miriam_aupont.jpg"
        },
        affliation:["Johns Hopkins Hospital","University of Maryland"],
        scheduleTime:["9:00am","9:30am","10:00am","10:30am","11:00am","11:30am","12:00pm","12:30am","1:00pm","1:30pm","2:00pm"]
    },
    {
        id: 8,
        address: "48 Brattle st",
        city: "Cambridge",
        state: "MA",
        zip: "02420",
        price: "$130",
        title: "Pediatrician",
        name:"Temitope Sam M.D",
        rating:"4",
        bedrooms: 5,
        bathrooms: 4,
        long: -71.121653,
        lat: 42.374117,
        picture: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        thumbnail: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        tags: "victorian",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 7,
            name: "Michelle Lambert",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michelle_lambert.jpg"
        },
        affliation:["Johns Hopkins Hospital","University of Maryland"],
        scheduleTime:["9:00am","9:30am","10:00am","10:30am","11:00am","11:30am","12:00pm","12:30am","1:00pm","1:30pm","2:00pm"]
    },
    {
        id: 9,
        address: "121 Harborwalk",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$90",
        title: "OB-GYN",
        name:"Temitope Sam M.D",
        rating:"4",
        bedrooms: 3,
        bathrooms: 3,
        long: -71.049327,
        lat: 42.35695,
        picture: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        thumbnail: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 2,
            name: "Michael Jones",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/michael_jones.jpg"
        },
        scheduleTime:["9:00am","9:30am","10:00am","10:30am","11:00am","11:30am","12:00pm","12:30am","1:00pm","1:30pm","2:00pm"]
    },
    {
        id: 10,
        address: "503 Park Drive",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$120",
        title: "psychiatrist",
        name:"Temitope Sam M.D",
        rating:"4",
        bedrooms: 2,
        bathrooms: 2,
        long: -71.105475,
        lat: 42.347400,
        picture: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        thumbnail: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 1,
            name: "Caroline Kingsley",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/caroline_kingsley.jpg"
        },
        affliation:["Johns Hopkins Hospital","University of Maryland"],
        scheduleTime:["9:00am","9:30am","10:00am","10:30am","11:00am","11:30am","12:00pm","12:30am","1:00pm","1:30pm","2:00pm"]
    },
    {
        id: 11,
        address: "95 Gloucester st",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$100",
        title: "Internal medicine",
        name:"Dr.Temitope Sam M.D",
        rating:"4",
        bedrooms: 3,
        bathrooms: 3,
        lat: 42.349693,
        long: -71.084407,
        picture: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        thumbnail: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        tags: "contemporary",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 4,
            name: "Jennifer Wu",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/jennifer_wu.jpg"
        },
        affliation:["Johns Hopkins Hospital","University of Maryland"],
        scheduleTime:["9:00am","9:30am","10:00am","10:30am","11:00am","11:30am","12:00pm","12:30am","1:00pm","1:30pm","2:00pm"]
    },
    {
        id: 12,
        address: "145 Commonwealth ave",
        city: "Boston",
        state: "MA",
        zip: "02420",
        price: "$100",
        title: "Primary care doctor",
        name:"Temitope Sam M.D",
        rating:"4",
        bedrooms: 4,
        bathrooms: 3,
        lat: 42.352466,
        long: -71.075311,
        picture: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        thumbnail: "http://comaneng.com/wp-content/uploads/2018/02/doctor-img-1.jpg",
        tags: "colonial",
        description: "Lorem ipsum dolor sit amet",
        broker: {
            id: 5,
            name: "Olivia Green",
            title: "Senior Broker",
            picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/olivia_green.jpg"
        },
        affliation:["Johns Hopkins Hospital","University of Maryland"],
        scheduleTime:["9:00am","9:30am","10:00am","10:30am","11:00am","11:30am","12:00pm","12:30am","1:00pm","1:30pm","2:00pm"]
    }
];

export default properties;
