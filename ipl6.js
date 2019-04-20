
var fs = require('fs');

function extractingCSV(filePath) {
    console.log(filePath);
    var f = fs.readFileSync(filePath, {
        encoding: 'utf-8'
    });

    f = f.split("\n");
   // console.log(f);
    headers = f.shift().split(",");
  //  console.log(headers);
    var DATA = [];
    //console.log(DATA);

   f.forEach(function (d) {
        tmp = {};
        
        row = d.split(",");
      //console.log(row);
        for (var i = 0; i < headers.length; i++) {
            tmp[headers[i]] = row[i];
        }
        DATA.push(tmp);
    });
    return DATA;
}

function TotalMatch(){
    var matches=extractingCSV('./matches.csv');
   // console.log(matches);
//    var total = 0;
// matches.forEach( function(record) {
//     total +=Number(record.id);
// });

    // var total = matches.reduce( function(tot, record) {
    //     if (!tot.hasOwnProperty(record['id'])){
    //         tot[record["id"]]=1;  
    //       return tot;
    //     }else{
    //         tot[record["id"]]=tot[record["id"]]+1;     
    //         return tot;   
    //     }
       
    // },0);
    //  console.log(total);
    // // var count = 0;
    // for (var k in matches) if (matches.hasOwnProperty(k['id'])) ++count;
    console.log(matches);
}

TotalMatch();