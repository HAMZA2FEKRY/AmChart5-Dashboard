function fetchDataAndUpdateChart1() {
  fetch('/get_datachart')
      .then(response => response.json())
      .then(piedata => {
        console.log(piedata)
        updatedatachart(piedata);
      })
      .catch(error => console.error('Error:', error));
}
function fetchDataAndUpdateChart2() {
  fetch('/get_payment') 
      .then(response => response.json())
      .then(chdata => {
        console.log(chdata)
          updateChart(chdata);
      })
      .catch(error => console.error('Error:', error));
}
function fetchDataAndUpdateChart3() {
  fetch('/get_control')
  
  .then(response => response.json())
  .then(contdata => {
    console.log(contdata)
    updatedatachart3(contdata);
  })
  .catch(error => console.error('Error:', error));
}
function fetchDataAndUpdateChart5() {
  fetch('/get_partchart') 
  .then(response => response.json())
  .then(bardata => {
    console.log(bardata)
    updatedatachart5(bardata);
  })
  .catch(error => console.error('Error:', error));
}
function fetchDataAndUpdateChart6() {
  fetch('/get_data')
  .then(response => response.json())
  .then(chartdata => {
    console.log(chartdata)
    updatedatachart6(chartdata);
  })
  .catch(error => console.error('Error:', error));
}
/////////////////////////////////////////////////////////
function updatedatachart(piedata) {
  // Initialize amCharts
  am5.ready(function() {
    var root = am5.Root.new("chdatadiv");
    // Set themes
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    // Create chart
    var chart = root.container.children.push(am5percent.PieChart.new(root, {
      layout: root.verticalLayout,
    
    }));
    let label = chart.children.unshift(am5.Label.new(root, {
      text: "Persentage of the Branches",
      background: am5.Rectangle.new(root, {
        fill: am5.color(0x000000),
        fillOpacity: 0
      })
    }));
    
    label.events.on("click", function(ev) {
      console.log("Clicked!");
    });
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
  
    series.appear(1000, 100);
    }); 
  }  
  function updateChart(chdata) {
    // Initialize amCharts
    am5.ready(function() {
        var root = am5.Root.new("paychartdiv");
        
        root.setThemes([
          am5themes_Animated.new(root)
        ]);
        var chart = root.container.children.push(am5percent.SlicedChart.new(root, {
          layout: root.verticalLayout
        }));
        let label = chart.children.unshift(am5.Label.new(root, {
          text: "Type of Payment of Customer",
          background: am5.Rectangle.new(root, {
            fill: am5.color(0x000000),
            fillOpacity: 0
          })
        }));
        
        label.events.on("click", function(ev) {
          console.log("Clicked!");
        });
        // Create series
        // https://www.amcharts.com/docs/v5/charts/percent-charts/sliced-chart/#Series
        var series = chart.series.push(am5percent.PictorialStackedSeries.new(root, {
          alignLabels: true,
          orientation: "vertical",
          valueField: "value",
          categoryField: "class",
          svgPath: "M53.5,476c0,14,6.833,21,20.5,21s20.5-7,20.5-21V287h21v189c0,14,6.834,21,20.5,21 c13.667,0,20.5-7,20.5-21V154h10v116c0,7.334,2.5,12.667,7.5,16s10.167,3.333,15.5,0s8-8.667,8-16V145c0-13.334-4.5-23.667-13.5-31 s-21.5-11-37.5-11h-82c-15.333,0-27.833,3.333-37.5,10s-14.5,17-14.5,31v133c0,6,2.667,10.333,8,13s10.5,2.667,15.5,0s7.5-7,7.5-13 V154h10V476 M61.5,42.5c0,11.667,4.167,21.667,12.5,30S92.333,85,104,85s21.667-4.167,30-12.5S146.5,54,146.5,42 c0-11.335-4.167-21.168-12.5-29.5C125.667,4.167,115.667,0,104,0S82.333,4.167,74,12.5S61.5,30.833,61.5,42.5z"
        }));
        series.show().then(function(ev) {
          console.log("Series is now fully visible");
        })
        series.labelsContainer.set("width", 100);
        series.ticks.template.set("location", 0.6);
        // Set data
        // https://www.amcharts.com/docs/v5/charts/percent-charts/sliced-chart/#Setting_data
        series.data.setAll(chdata);
        // Play initial series animation
        // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
        chart.appear(1000, 100);
        }); // end am5.ready()
      }
   
      function updatedatachart3(contdata) {
        // Initialize amCharts
            am5.ready(function() {
            var root = am5.Root.new("controldiv");
            // Set themes
            // https://www.amcharts.com/docs/v5/concepts/themes/
            root.setThemes([
            am5themes_Animated.new(root)
            ]);
    
            root.dateFormatter.setAll({
            dateFormat: "yyyy",
            dateFields: ["valueX"]
            });
            // Create chart
            // https://www.amcharts.com/docs/v5/charts/xy-chart/
            var chart = root.container.children.push(am5xy.XYChart.new(root, {
                panX: true,
                panY: true,
                wheelX: "panX",
                wheelY: "zoomX",
                pinchZoomX: true,
                paddingLeft: 0
              }));
              let label = chart.children.unshift(am5.Label.new(root, {
                text: "The Profit of Q1",
              
                background: am5.Rectangle.new(root, {
                  fill: am5.color(0x000000),
                  fillOpacity: 0
                })
              }));
              
              label.events.on("click", function(ev) {
                console.log("Clicked!");
              });
              // Add cursor
              // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
              var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
                behavior: "none"
              }));
              cursor.lineY.set("visible", false);
              
              
              // Generate random data
              var date = new Date();
              date.setHours(0, 0, 0, 0);
              var value = 100;
              
              function generateData() {
                value = Math.round((Math.random() * 10 - 5) + value);
                am5.time.add(date, "day", 1);
                return {
                  date: date.getTime(),
                  value: value
                };
              }
              
              function generateDatas(count) {
                var data = [];
                for (var i = 0; i < count; ++i) {
                  data.push(generateData());
                }
                return data;
              }
              
              
              // Create axes
              // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
              var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
                maxDeviation: 0.5,
                baseInterval: {
                  timeUnit: "day",
                  count: 1
                },
                renderer: am5xy.AxisRendererX.new(root, {
                  minGridDistance: 80,
                  minorGridEnabled: true,
                  pan: "zoom"
                }),
                tooltip: am5.Tooltip.new(root, {})
              }));
              
              var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                maxDeviation: 1,
                renderer: am5xy.AxisRendererY.new(root, {
                  pan: "zoom"
                })
              }));
              
              
              // Add series
              // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
              var series = chart.series.push(am5xy.SmoothedXLineSeries.new(root, {
                name: "Series",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value",
                valueXField: "date",
                tooltip: am5.Tooltip.new(root, {
                  labelText: "{valueY}"
                })
              }));
              
              series.fills.template.setAll({
                visible: true,
                fillOpacity: 0.2
              });
              
              series.bullets.push(function () {
                return am5.Bullet.new(root, {
                  locationY: 0,
                  sprite: am5.Circle.new(root, {
                    radius: 4,
                    stroke: root.interfaceColors.get("background"),
                    strokeWidth: 2,
                    fill: series.get("fill")
                  })
                });
              });
              
              
              // Add scrollbar
              // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
              chart.set("scrollbarX", am5.Scrollbar.new(root, {
                orientation: "horizontal"
              }));
              
              
              var contdata = generateDatas(50);
              series.data.setAll(contdata);
              
              
              // Make stuff animate on load
              // https://www.amcharts.com/docs/v5/concepts/animations/
              series.appear(1000);
              chart.appear(1000, 100);
              
              }); // end am5.ready()
            
        }    
        function updatedatachart5(bardata) {
          am5.ready(function() {
              // Create root element
              // https://www.amcharts.com/docs/v5/getting-started/#Root_element
              var root = am5.Root.new("chartdiv");
              
              // Set themes
              // https://www.amcharts.com/docs/v5/concepts/themes/
              root.setThemes([
                am5themes_Animated.new(root)
              ]);
              
              // Create chart
              // https://www.amcharts.com/docs/v5/charts/xy-chart/
              var chart = root.container.children.push(am5xy.XYChart.new(root, {
                panX: true,
                panY: true,
                wheelX: "panX",
                wheelY: "zoomX",
                pinchZoomX: true,
                paddingLeft:0,
                paddingRight:1
              }));
              let label = chart.children.unshift(am5.Label.new(root, {
                text: "Productivity",
              
                background: am5.Rectangle.new(root, {
                  fill: am5.color(0x000000),
                  fillOpacity: 0
                })
              }));
              
              label.events.on("click", function(ev) {
                console.log("Clicked!");
              });
              // Add cursor
              // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
              var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
              cursor.lineY.set("visible", false);
              
              
              // Create axes
              // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
              var xRenderer = am5xy.AxisRendererX.new(root, { 
                minGridDistance: 30, 
                minorGridEnabled: true
              });
              
              xRenderer.labels.template.setAll({
                rotation: -90,
                centerY: am5.p50,
                centerX: am5.p100,
                paddingRight: 15
              });
              
              xRenderer.grid.template.setAll({
                location: 1
              })
              
              var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
                maxDeviation: 0.3,
                categoryField: "yclass",
                renderer: xRenderer,
                tooltip: am5.Tooltip.new(root, {})
              }));
              
              var yRenderer = am5xy.AxisRendererY.new(root, {
                strokeOpacity: 0.1
              })
              
              var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                maxDeviation: 0.3,
                renderer: yRenderer
              }));
              
              // Create series
              // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
              var series = chart.series.push(am5xy.ColumnSeries.new(root, {
                name: "Series 1",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "value",
                sequencedInterpolation: true,
                categoryXField: "yclass",
                tooltip: am5.Tooltip.new(root, {
                  labelText: "{valueY}"
                })
              }));
              
              series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
              series.columns.template.adapters.add("fill", function (fill, target) {
                return chart.get("colors").getIndex(series.columns.indexOf(target));
              });
              
              series.columns.template.adapters.add("stroke", function (stroke, target) {
                return chart.get("colors").getIndex(series.columns.indexOf(target));
              });
              
              
              // Set data
              xAxis.data.setAll(bardata);
              series.data.setAll(bardata);
              // Make stuff animate on load
              // https://www.amcharts.com/docs/v5/concepts/animations/
              series.appear(1000);
              chart.appear(1000, 100);
              
              }); // end am5.ready()
          }
   
          function updatedatachart6(chartdata) {
            am5.ready(function() {
          
              // Create root element
              // https://www.amcharts.com/docs/v5/getting-started/#Root_element
              var root = am5.Root.new("chartdiv5");
              
              // Set themes
              // https://www.amcharts.com/docs/v5/concepts/themes/
              root.setThemes([
                am5themes_Animated.new(root)
              ]);
              
              // Create chart
              // https://www.amcharts.com/docs/v5/charts/radar-chart/
              var chart = root.container.children.push(am5radar.RadarChart.new(root, {
                panX: false,
                panY: false,
                wheelX: "panX",
                wheelY: "zoomX",
                innerRadius: am5.percent(20),
                startAngle: -90,
                endAngle: 180
              }));
              
              
              let label = chart.children.unshift(am5.Label.new(root, {
                text: "City performance",
              
                background: am5.Rectangle.new(root, {
                  fill: am5.color(0x000000),
                  fillOpacity: 0
                })
              }));
              
              label.events.on("click", function(ev) {
                console.log("Clicked!");
              });
            
              
              // Add cursor
              // https://www.amcharts.com/docs/v5/charts/radar-chart/#Cursor
              var cursor = chart.set("cursor", am5radar.RadarCursor.new(root, {
                behavior: "zoomX"
              }));
              
              cursor.lineY.set("visible", false);
              
              // Create axes and their renderers
              // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
              var xRenderer = am5radar.AxisRendererCircular.new(root, {
                //minGridDistance: 50
              });
              
              xRenderer.labels.template.setAll({
                radius: 10
              });
              
              xRenderer.grid.template.setAll({
                forceHidden: true
              });
              
              var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
                renderer: xRenderer,
                min: 0,
                max: 100,
                strictMinMax: true,
                numberFormat: "#'%'",
                tooltip: am5.Tooltip.new(root, {})
              }));
              
              
              var yRenderer = am5radar.AxisRendererRadial.new(root, {
                minGridDistance: 20
              });
              
              yRenderer.labels.template.setAll({
                centerX: am5.p100,
                fontWeight: "500",
                fontSize: 18,
                templateField: "columnSettings"
              });
              
              yRenderer.grid.template.setAll({
                forceHidden: true
              });
              
              var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
                categoryField: "yclass",
                renderer: yRenderer
              }));
              
              yAxis.data.setAll(chartdata);
              
              
              // Create series
              // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
              var series1 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
                xAxis: xAxis,
                yAxis: yAxis,
                clustered: false,
                valueXField: "full",
                categoryYField: "yclass",
                fill: root.interfaceColors.get("alternativeBackground")
              }));
              
              series1.columns.template.setAll({
                width: am5.p100,
                fillOpacity: 0.08,
                strokeOpacity: 0,
                cornerRadius: 20
              });
              
              series1.data.setAll(chartdata);
              
              
              var series2 = chart.series.push(am5radar.RadarColumnSeries.new(root, {
                xAxis: xAxis,
                yAxis: yAxis,
                clustered: false,
                valueXField: "value",
                categoryYField: "yclass"
              }));
              
              series2.columns.template.setAll({
                width: am5.p100,
                strokeOpacity: 0,
                tooltipText: "{category}: {valueX}%",
                cornerRadius: 20,
                templateField: "columnSettings"
              });
              
              series2.data.setAll(chartdata);
              
              // Animate chart and series in
              // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
              series1.appear(1000);
              series2.appear(1000);
              chart.appear(1000, 100);
              
              }); // end am5.ready()
            }
  document.addEventListener('DOMContentLoaded', function() {
      fetchDataAndUpdateChart1();
      fetchDataAndUpdateChart2();
      fetchDataAndUpdateChart3();   
      fetchDataAndUpdateChart5();
      fetchDataAndUpdateChart6();
     
  });

