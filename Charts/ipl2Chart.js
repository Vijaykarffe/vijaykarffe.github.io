function loadDoc(path){
    var fileItems = []
    var http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            fileItems = JSON.parse(this.responseText);
        }
    }
    http.open("GET", path, false);
    http.send();
    return fileItems;
}
function plotChart(){
    var matchesData = loadDoc('Jsonfiles/NumberOfMatchWonIn2017.json');
  var jsondata=0;
   //  fetch('Jsonfiles/WonAllMatch.json').then((response) => response.json()).then(data => {
   //       jsondatafetch=data;
   //       console.log(jsondata)        
   //  })

Highcharts.chart('container', {
    
    chart: {
        type: 'column'
    },
    title: {
        text: 'Number of Match Won In 2017.'
    },
    subtitle: {
        text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total percent ipl Year Rating'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.0f}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    "series": [
        {
            "name": "Browsers",
            "colorByPoint": true,
            "data": matchesData
        }
    ]
});
}
plotChart();