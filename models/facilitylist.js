let {mongoose} = require('./../server/mongoose');
const _ = require('lodash');


let Schema = mongoose.Schema;
let FacilityList = mongoose.model("FacilityList", new Schema({}), "facilitylists");
//   FacilityList.findOne({"impccode":{$regex: "^AE"}}, function(err, doc){console.log(doc._doc.impccode) ; })

// mongoose.model('Question', 
//               new Schema({ url: String, text: String, id: Number}), 
//               'question');

// var FacilityList = mongoose.model('Facilitylist',{

//   impccode : {
//               type: String,

//     },
//     impcName:
//     {
//               type: String,

//     },
//     country: {
//       type:String
//     },
//     organisationName:
//     {
//               type: String,

//     },
//     IMPCoperatorCode :{
//               type: String,

//     },
//     operatorCode:
//     {
//               type: String,

//     },
//     IMPCFunction :{
//               type: String,

//     },
//     validFrom :{
//               type: Number,

//     },
//     mailFlow: {
//                       type: String,

//     },
//     categoryA: {
//                       type: String,

//     },
//     CategoryB: {
//                       type: String,

//     },
//     CategoryC: {
//                       type: String,

//     },
//     ClassU: {
//                       type: String,

//     },
//     ClassE: {
//                       type: String,

//     },
//     ClassT: {
//                       type: String,

//     }
    
    
// });

 module.exports={FacilityList};