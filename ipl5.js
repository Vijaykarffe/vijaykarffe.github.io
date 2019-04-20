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

 function totalRnunsOfPeryear(){
   let matches=extractingCSV('./matches.csv');
    let deliveries=extractingCSV('./deliveries.csv');
   //console.log(deliveries);
//     let result={}

    res={};
    deliveries.map(ele=>{
    if(res.hasOwnProperty(ele["batsman"]))
    { res[ele["batsman"]]+=parseInt(ele['batsman_runs']);
    }
    else
    { res[ele["batsman"]]=parseInt(ele['batsman_runs']);
    }
    
    })
   //return res;
   
    var sortable = Object.entries(res)
   console.log(sortable);
    sortable.sort(function(a, b) {
    return b[1]-a[1];
    });
    console.log(sortable);
    // var orderedList = {};
    // for (var i = 0; i < 11; i++) {
    // orderedList[sortable[i][0]] = sortable[i][1];
    // }
    // result=orderedList;
    // console.log(result)
    
    }
var t= totalRnunsOfPeryear();
 console.log(t);