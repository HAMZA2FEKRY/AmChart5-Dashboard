function fetchDataAndUpdateChart1() {
    fetch('/get_datachart')
    
        .then(response => response.json())
        .then(piedata => {
          console.log(piedata)
          updatedatachart(piedata);
        })
        .catch(error => console.error('Error:', error));
}

function updatedatachart(piedata) {
    // Initialize amCharts
    am5.ready(function() {
      var root = am5.Root.new("chdatadiv");
      // Set themes
      root.setThemes([
        am5themes_Animated.new(root)
      ]);
      
      let title = chart.titles.create();
      title.text = "Speed";
    
      // Create chart
      var chart = root.container.children.push(am5percent.PieChart.new(root, {
        layout: root.verticalLayout 
      }));
      
      
      // Create series
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
      var series = chart.series.push(am5percent.PieSeries.new(root, {
        valueField: "values",
        categoryField: "classes"
      }));
      // Set data
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
      series.data.setAll(piedata);
      // Create legend
      // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
     // var legend = chart.children.push(am5.Legend.new(root, {
       // centerX: am5.percent(50),
        //x: am5.percent(50),
        //marginTop: 15,
        //marginBottom: 15
      //}));
      
      legend.data.setAll(series.dataItems);
      // Play initial series animation
      // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
      series.appear(1000, 100);
      }); 
    }  
        document.addEventListener('DOMContentLoaded', function() {
            fetchDataAndUpdateChart1();
        });
        