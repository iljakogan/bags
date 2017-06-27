let mongoxlsx = require("mongo-xlsx");

let jsonfile = require('jsonfile');



let model = null;
let xlsx  = './108b.xlsx';
let jsonfile = require('jsonfile');
let file = '/home/ubuntu/workspace/108/data2.json';

// mongoxlsx.xlsx2MongoData(xlsx, model, function(err, data) {
//   console.log(data);
//   let obj=data;
//   jsonfile.writeFile(file, obj, {spaces: 2}, function(err) {
//   console.error(err);
// }
//   /*
//   [{ Name: 'Eddie', Email: 'edward@mail' }, { Name: 'Nico', Email: 'nicolas@mail' }]  
//   */
// });


 mongoxlsx.xlsx2MongoData(xlsx, model, function(err, data) {
  let obj=data;
  console.log(obj);
  jsonfile.writeFile(file, obj, {spaces: 2}, function(err) {
  console.error(err);
}

),(err)=>{
  console.log(err);
};
});
 
 

// 


 

// let jsonfile = require('jsonfile');
// let file = '/home/ubuntu/workspace/108/upu-2.json';
 
// let upulist = jsonfile.readFileSync(file);

// console.log(upulist);

  // let facilityList = new FacilityList(
  //     { 
  //   impccode : 
  //   impcName:
  //   country: 
  //   organisationName:
  //   IMPCoperatorCode :
  //   operatorCode:
  //   IMPCFunction :
  //   validFrom :
  //   mailFlow: 
  //   categoryA: 
  //   CategoryB: 
  //   CategoryC: 
  //   ClassU: 
  //   ClassE: 
  //   ClassT:
  //   });
  // facilityList.save().then((doc) =>{
   
  // console.log(doc);
  // }, (e)=>{
  //   console.log(e);

  // } );