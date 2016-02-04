var app = require('../server');

var BizUserObj = app.models.BizUser;



//Read from CSV file

// Use those entries and create Objects for Address, PhoneNumber and IBUser,Rating, TaskCategory,WebsiteURLLink

//User Categories

var bizUserJson =
{
    "bizSize": "Vineel Plumbing",
    "employeeCount": 3,
    "licenseId": "733DS3SD",
    "hasLicense": true,
    "verificationComplete": false,
    "taskTypesSupported": [
        "plumbing", "roofing"
    ],
    "rating": 4,
    "primaryWorkZipCodes": [
        95043
    ],
    "tempWorkZipCodes": [
        91121
    ],
    "gender": "male",
    "createdTime": "2016-01-18",
    "modifiedTime": "2016-01-18",
    "race": "Asian",
    "dateOfBirth": "12-04-1976",
    "motherName": "Kim John Yun",
    "phoneNumbers": [
        "408-323-2323"
    ],
    "addresses": [
        {
            "addressLine1": "2323, agnew road",
            "addressLine2": "",
            "city": "santa clara",
            "state": "CA",
            "zipCode": 95054,
            "isBilling": true,
            "addressType": [
                "Work"
            ],
            "isRented": false,
            "isPrimary": true,
            "phoneNumbers": [
                "408-323-2323"
            ]
        },
        {
            "addressLine1": "344, Fremont Rd",
            "addressLine2": "",
            "city": "Fremont",
            "state": "CA",
            "zipCode": 93234,
            "isBilling": true,
            "addressType": [
                "Home"
            ],
            "isRented": true,
            "isPrimary": false,
            "phoneNumbers": [
                "408-322-2290"
            ]
        }
    ],
    "yearlyEarning": 43434,
    "websites": [
        "wwww.homeadvisor.com/YuZu"
    ],
    "Roles": [
        {
            "name": "ServiceProvider",
            "description": "Role represents group of all service providers"
        }
    ],
    "realm": "",
    "username": "YuZu",
    "password": "YuZu",
    "credentials": {},
    "challenges": {},
    "email": "yuzujohn@gmail.com",
    "emailVerified": false,
    "verificationToken": "",
    "status": "Active"
};

//Uncomment this code to persist json obj to postgres db
//BizUserObj.create(bizUserJson,
//    function (errCreate, bizUserObjCreated) {
//        if (errCreate) {
//            console.log(errCreate);
//            return;
//        }
//        BizUserObj.findById(bizUserObjCreated.id,
//            function (errFind, bizUserObjFoundObj) {
//                if (errFind) {
//                    console.log(errFind);
//                    return;
//                }
//                console.log("Obj found in db", bizUserObjFoundObj);
//            });
//    });