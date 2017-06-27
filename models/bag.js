var mongoose = require('mongoose');

var Bag = mongoose.model('Bag',{
   originFacility:{
       type: String,
       required: false,
       minlength: 1,
       trim: true
   },
   destinationCountry: {
       type: String,
              required: false,

},
destinationFacility:{
           type: String,
              required: false,

},
  zpl: {
       type: String,
              required: false,

},
  
 pdf_url: {
       type: String,
              required: false,

}
  ,
  mailCategory:{
      
  },
  postalRoute:
  {
       
  },
        postalFormat:
  {
       
  },receptacleType:
  {
       
  },
  receptacleTaraWeight:
  {
       
  },
  receptacleNetWeight:
  {
       
  },
  numberOfItems:{
       
  },
  transportInformation: {
       
  }
   
   
} );

module.exports={Bag};

//db.getCollection('facilitylist_copy_copy').find({"impccode":{$regex: "^AE"}})