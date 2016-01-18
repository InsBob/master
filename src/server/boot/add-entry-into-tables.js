var app = require('../server');

var BizUserObj = app.models.BizUser;

//Covert json entry into a db row. This example demostrates how to create a BizUser entry in postgres db.
//Write generator code in JS that converts csv to json & then call <Model>.create method,
// so that when schema changes  (it will happen 100% for sure),
// 1. we change this generator code
// 2. We run the drop-and-recreate-table(s).js
// 3. Run the changed code from bullet 1. This should ensure schema changes and data population can go in parellel.

//Initial Json copied from http://0.0.0.0:3000/explorer/#!/BizUser/BizUser_create

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