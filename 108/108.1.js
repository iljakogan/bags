
let mongoxlsx = require("mongo-xlsx");
let model = null;
let xlsx  = './108b.xlsx';

 
mongoxlsx.xlsx2MongoData(xlsx, model, function(err, data) {
  console.log(data);
  /*
  [{ Name: 'Eddie', Email: 'edward@mail' }, { Name: 'Nico', Email: 'nicolas@mail' }]  
  */
});
 

 

