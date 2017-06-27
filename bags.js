
const _ = require('lodash');
let fs = require('fs');

let he=require('he');
let express = require('express');
let bodyParser = require('body-parser');
let filter = require('content-filter') ;
let request = require('request');
let rp = require('request-promise');

let {Bag} = require('./models/bag');
let {FacilityList} = require("./models/facilitylist");

let {mongoose} = require('./server/mongoose');
let app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(filter());

app.post('/bag', (req,res)=>{
    console.log(req)
   let body = _.pick(req.body, ['originFacility', 'destinationCountry','mailCategory', 'postalRoute','postalFormat', 'receptacleType', 'receptacleTaraWeight', 'numberOfItems' , 'transportInformation'  ]);
   let encodedBody= he.encode(body);
  
  let bag = new Bag(
      { 
     originFacility: encodedBody.originFacility,
     destinationCountry: encodedBody.destinationCountry,
     mailCategory:encodedBody.mailCategory,
     postalRoute:encodedBody.postalRoute,
     postalFormat:encodedBody.postalFormat,
     receptacleType:encodedBody.receptacleType,
     receptacleTaraWeight:encodedBody.receptacleTaraWeight,
     receptacleNetWeight:encodedBody.receptacleNetWeight,
     numberOfItems:encodedBody.numberOfItems,
     transportInformation:encodedBody.transportInformation
     });
  bag.save().then((doc) =>{
   
    res.send(doc);
   }, (e)=>{
     res.status(400).send(e);

   } );
});


// app.get('/bag', (req,res)=>{
//      let bag = new Bag(
//       { 
//      originFacility: req.query.originFacility,
//      destinationCountry: req.query.destinationCountry,
//      mailCategory:req.query.mailCategory,
//      postalRoute:req.query.postalRoute,
//      postalFormat:req.query.postalFormat,
//      receptacleType:req.query.receptacleType,
//      receptacleTaraWeight:req.query.receptacleTaraWeight,
//      receptacleNetWeight:req.query.receptacleNetWeight,
//      numberOfItems:req.query.numberOfItems,
//      transportInformation:req.query.transportInformation
//         });
//   bag.save().then((doc) =>{
//      res.send(doc);
//   }, (e)=>{
//      res.status(400).send(e);

//   } );
// });


app.get('/bag', (req,res)=>{
     
     let encodedBody= { originFacility: req.query.originFacility,
     destinationCountry: req.query.destinationCountry.toUpperCase(),
     mailCategory:req.query.mailCategory,
     postalRoute:req.query.postalRoute,
     postalFormat:req.query.postalFormat,
     receptacleType:req.query.receptacleType,
     receptacleTaraWeight:req.query.receptacleTaraWeight,
     receptacleNetWeight:req.query.receptacleNetWeight,
     numberOfItems:req.query.numberOfItems,
     transportInformation:req.query.transportInformation,
  
     }
          encodedBody.zpl= `^xa^cfa,50^fo100,100^fd${encodedBody.originFacility}^fs^xz`;
                   FacilityList.findOne({"impccode":{$regex: "^" +encodedBody.destinationCountry}}).then((doc) =>{
                       
                       
                  encodedBody.destinationFacility=doc._doc.impccode  

        //  if(req.query.originFacility){
        //           encodedBody={  originFacility: he.encode(req.query.originFacility)};
 
        //  }
         
        //  if(req.query.destinationCountry){
        //           encodedBody={  destinationCountry: he.encode(req.query.destinationCountry)};

        //  }
        
    //  destinationCountry: he.encode(req.query.destinationCountry)
      //,
    //  mailCategory:he.encode(req.query.mailCategory),
    //  postalRoute:he.encode(req.query.postalRoute),
    //  postalFormat:he.encode(req.query.postalFormat),
    //  receptacleType:he.encode(req.query.receptacleType),
    //  receptacleTaraWeight:he.encode(req.query.receptacleTaraWeight),
    //  receptacleNetWeight:he.encode(req.query.receptacleNetWeight),
    //  numberOfItems:he.encode(req.query.encodedBody.numberOfItems),
    //  transportInformation:he.encode(req.query.encodedBody.transportInformation)
     //};
     
     let bag = new Bag(
      { 
    originFacility: encodedBody.originFacility,
     destinationCountry: encodedBody.destinationCountry,
     destinationFacility: encodedBody.destinationFacility,
      mailCategory:encodedBody.mailCategory,
    postalRoute:encodedBody.postalRoute,
     postalFormat:encodedBody.postalFormat,
    receptacleType:encodedBody.receptacleType,
    receptacleTaraWeight:encodedBody.receptacleTaraWeight,
    receptacleNetWeight:encodedBody.receptacleNetWeight,
     numberOfItems:encodedBody.numberOfItems,
      transportInformation:encodedBody.transportInformation,
     zpl:  encodedBody.zpl,
      pdf_url :`http://api.labelary.com/v1/printers/8dpmm/labels/4x6/0/${encodedBody.zpl}`
        });
                            
  bag.save().then((doc) =>{
    
      
    res.send(doc);
   }, (e)=>{
     res.status(400).send(e);

   } );
                   });
});


// app.get('/bag', (req, res) => {
    
    

//     Bag.find().then((bags) => {
//         res.send({
//             bags
//         });
//     }, (e) => {
//         res.status(400).send(e);
//     });
// });

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");
console.log('started');
module.exports = {app};