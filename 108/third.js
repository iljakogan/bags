let easyjson = require('easyjson');

let {FacilityList} = require('./../models/facilitylist');

let {mongoose} = require('./../server/mongoose');

let file = '/home/ubuntu/workspace/108/data2.json';


console.log(easyjson.path(file).get('12_char_organisation_name'));

//   let facilityList = new FacilityList(
//       { 
//      impccode : easyjson.path('test').get('author'),
//      impcName:
//      country: 
//      organisationName:
//      IMPCoperatorCode :
//      operatorCode:
//      IMPCFunction :
//      validFrom :
//      mailFlow: 
//      categoryA: 
//      CategoryB: 
//      CategoryC: 
//      ClassU: 
//      ClassE: 
//      ClassT:
//      });
//   facilityList.save().then((doc) =>{
   
//   console.log(doc);
//   }, (e)=>{
//      console.log(e);

//   } );