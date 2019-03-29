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

function extraRunConcededPerTeam(year){
    let matches=extractingCSV('./matches.csv');
    let deliveries=extractingCSV('./deliveries.csv');
    var newArr={};
    var theNew=[];
   // console.log(theNew);
      matches.map((match)=>{
        if(year==match["season"]){
            theNew.push(match["id"]);
        }
    })
   // return theNew;

        deliveries.map((delivery)=>{

            if(theNew.includes(delivery["match_id"])){

                if(!newArr.hasOwnProperty(delivery["bowling_team"])){

                    newArr[delivery["bowling_team"]]=Number(delivery["extra_runs"]);
                    
                }
                else{

                    newArr[delivery["bowling_team"]]=newArr[delivery["bowling_team"]]+Number(delivery["extra_runs"]);
                }
            }
        })
    
    return newArr;
}
var t=extraRunConcededPerTeam(2010);
console.log(t);