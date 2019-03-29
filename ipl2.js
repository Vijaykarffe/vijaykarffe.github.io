var fs = require('fs');


function extractingCSV(filePath) {
    console.log(filePath);
    var f = fs.readFileSync(filePath, {
        encoding: 'utf-8'
    });

    f = f.split("\n");
    headers = f.shift().split(",");
    headers.splice(headers.length - 1, 1);
    headers.push('fielder');
    var DATA = [];

    f.forEach(function (d) {
        tmp = {};
        row = d.split(",");
        for (var i = 0; i < headers.length; i++) {
            tmp[headers[i]] = row[i];
        }
        DATA.push(tmp);
    });
    return DATA;
}
function numberOfMatchesWon(){
    let matches=extractingCSV('./matches.csv');                                
  var perSeason=matches.reduce((acc,obj)=>{   //using map() iterating each objects from the array
    if(!acc.hasOwnProperty(obj["season"])){
        acc[obj["season"]]={};
    }
    if(!acc[obj["season"]].hasOwnProperty(obj["winner"])){
        acc[obj["season"]][obj["winner"]]=1;
        return acc;
    }else{
        acc[obj["season"]][obj["winner"]]+=1;
        return acc;
    }
},{})
    delete perSeason["undefined"]
    return perSeason;
}
var t=numberOfMatchesWon();
console.log(t);