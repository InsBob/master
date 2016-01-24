var app = require('../server');

var dataSource = app.dataSources.pg;

//Uncomment this to drop and recreate all db tables. use with caution
//Pass app.modles.<ModelName> as first argument to only delete and add Modelname related tables. Without this argument, it will affect all tables.
//dataSource.automigrate(function (err) {
//    if (err) {
//        console.log(err);
//    }
//});

