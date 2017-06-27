let mongoxlsx = require('mongo-xlsx');
let jsonfile = require('jsonfile');
let file = '/home/ubuntu/workspace/108/data.json';


let model = null;
let xlsx  = './108b.xlsx';


let list = mongoxlsx.xlsx2MongoData(xlsx, model, function(err, data) {
  let obj=data;
  jsonfile.writeFile(file, obj, {spaces: 2}, function(err) {
  console.error(err);
}),(err)=>{
  console.log(err);
};
});

 
console.log(list);
 
