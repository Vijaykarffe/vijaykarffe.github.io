

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
// Problem-4: For the year top economical bowlers.
 function topEconomicalBowler(year){
    let matches=extractingCSV('./matches.csv');
    let deliveries=extractingCSV('./deliveries.csv');
    var newArr={};
    var theNew=[];
    console.log(theNew);
    matches.map((match)=>{
        if(match["season"]==year){
            theNew.push(match["id"])
        }
    })

        deliveries.map((delivery)=>{

            if(theNew.includes(delivery["match_id"])){

                if(!newArr.hasOwnProperty(delivery["bowler"])){

                    newArr[delivery["bowler"]]={"runs":Number(delivery["total_runs"]),"balls":1}
                    
                }
                else{
                    newArr[delivery["bowler"]].runs+=Number(delivery["total_runs"]);
                    newArr[delivery["bowler"]].balls+=1;
                }
            }
        })
    
     
      /*var ecoArray=[];
      for(var obj in newArr){
         var name=obj;
          var economy=newArr[obj].runs/(newArr[obj].balls/6);
          ecoArray.push([name,economy])
      }*/
    var ecoArray = Object.keys(newArr).reduce((acc,ele)=>{
            
           acc.push([ele,newArr[ele].runs/(newArr[ele].balls/6)])
           return acc;
      },[])
      
       // return ecoArray;
      ecoArray.sort((a,b)=>{
        a = a[1];
        b = b[1];
        return a-b;       
        });
      //  console.log(ecoArray);
        var sortedBowler={};
    for(var i=0;i<10;i++){
        var tr=ecoArray[i][0];
       sortedBowler[tr]=ecoArray[i][1];
    }
      return sortedBowler;
  }
var t= topEconomicalBowler(2015);
 console.log(t);