
var fs = require('fs');

function extractingCSV(filePath) {
    console.log(filePath);
    var f = fs.readFileSync(filePath, {
        encoding: 'utf-8'
    });

    f = f.split("\n");
    console.log(f);
    headers = f.shift().split(",");
    console.log(headers);
    var DATA = [];
    console.log(DATA);

   f.forEach(function (d) {
        tmp = {};
        
        row = d.split(",");
       // console.log(row);
        for (var i = 0; i < headers.length; i++) {
            tmp[headers[i]] = row[i];
        }
        DATA.push(tmp);
    });
    return DATA;
}
//Problem-1: the number of matches played per year of all the years in IPL.


function numberOfMatchPerYear(){
    let matches=extractingCSV('./matches.csv');
           console.log(matches);                       
  var newObj= matches.reduce((acc,obj)=>{                       
        
        if(!acc.hasOwnProperty(obj["season"])){       
            
          acc[obj["season"]]=1;  
          return acc;                     
         
        }
        else{
            
            acc[obj["season"]]=acc[obj["season"]]+1;     
            return acc;   
        }
    },{})
    delete newObj["undefined"];
    return newObj;                              
}
var t=numberOfMatchPerYear();
console.log(t);