<<<<<<< HEAD

/*----------------------------------------Charts in JavaScript--------------------------------------------

    *Scatter Plot
    *Line Chart
    *Pie Chart
    *Bar Graph/Column Chart

----------------------------------------------------------------------------------------------------------*/

//---------------------------------------------Scatter Plot---------------------------------------------------

var chart = new CanvasJS.Chart("chartContainer1",
    {
        title: {
            text: "Scatter Chart"
        },
        axisX: {
            interval: 10,
        },
        data: [
            {
                type: "scatter",
                color: "#f00",
                dataPoints: [
                    { x: 50, y: 7 },
                    { x: 60, y: 8 },
                    { x: 70, y: 8 },
                    { x: 80, y: 9 },
                    { x: 90, y: 9 },
                    { x: 100, y: 9 },
                    { x: 110, y: 10 },
                    { x: 120, y: 11 },
                    { x: 130, y: 14 },
                    { x: 140, y: 14 },
                    { x: 150, y: 15 }
                ]
            },
        ]
    });
chart.render();


//---------------------------------------------Pie Chart---------------------------------------------------

var chart = new CanvasJS.Chart("chartContainer2",
    {
        title: {
            text: "Pie Chart",
        },
        data: [
            {
                type: "pie",
                showInLegend: true,
                dataPoints: [
                    { y: 4181563, legendText: "History", indexLabel: "History" },
                    { y: 2175498, legendText: "Geography", indexLabel: "Geography" },
                    { y: 3125844, legendText: "Chemistry", indexLabel: "Chemistry" },
                    { y: 1176121, legendText: "Comp. Science", indexLabel: "Comp. Science" },
                    { y: 1727161, legendText: "English", indexLabel: "English" },
                    { y: 4303364, legendText: "Hindi", indexLabel: "Hindi" },
                    { y: 1717786, legendText: "Maths", indexLabel: "Maths" }
                ]
            },
        ]
    });
chart.render();


//---------------------------------------------Line Chart---------------------------------------------------

var chart = new CanvasJS.Chart("chartContainer3",
    {
        title: {
            text: "Line Chart"
        },
        axisX: {
            valueFormatString: "MMM",
            interval: 1,
            intervalType: "month"
        },
        axisY: {
            includeZero: false
        },
        data: [
            {
                type: "line",
                dataPoints: [
                    { x: new Date(2012, 00, 1), y: 450 },
                    { x: new Date(2012, 01, 1), y: 414 },
                    { x: new Date(2012, 02, 1), y: 520,},
                    { x: new Date(2012, 03, 1), y: 460 },
                    { x: new Date(2012, 04, 1), y: 450 },
                    { x: new Date(2012, 05, 1), y: 500 },
                    { x: new Date(2012, 06, 1), y: 480 },
                    { x: new Date(2012, 07, 1), y: 480 },
                    { x: new Date(2012, 08, 1), y: 410,},
                    { x: new Date(2012, 09, 1), y: 500 },
                    { x: new Date(2012, 10, 1), y: 480 },
                    { x: new Date(2012, 11, 1), y: 510 }
                ]
            }
        ]
    });
chart.render();


//---------------------------------------------Column Chart---------------------------------------------------

var chart = new CanvasJS.Chart("chartContainer4",
    {
        title: {
            text: "Column Chart"
        },
        axisX: {
            interval: 10,
        },
        data: [
            {
                type: "column",
                legendMarkerType: "triangle",
                legendMarkerColor: "green",
                color: "rgba(255,12,32,.3)",
                showInLegend: true,
                legendText: "Country wise population",
                dataPoints: [
                    { x: 10, y: 297571, label: "India" },
                    { x: 20, y: 267017, label: "Saudi" },
                    { x: 30, y: 175200, label: "Canada" },
                    { x: 40, y: 154580, label: "Iran" },
                    { x: 50, y: 116000, label: "Russia" },
                    { x: 60, y: 97800, label: "UAE" },
                    { x: 70, y: 20682, label: "US" },
                    { x: 80, y: 20350, label: "China" }
                ]
            },
        ]
    });


/*----------------------------------------Charts in JavaScript--------------------------------------------

    *Scatter Plot
    *Line Chart
    *Pie Chart
    *Bar Graph/Column Chart

----------------------------------------------------------------------------------------------------------*/

//---------------------------------------------Scatter Plot---------------------------------------------------

var chart = new CanvasJS.Chart("chartContainer1",
    {
        title: {
            text: "Scatter Chart"
        },
        axisX: {
            interval: 10,
        },
        data: [
            {
                type: "scatter",
                color: "#f00",
                dataPoints: [
                    { x: 50, y: 7 },
                    { x: 60, y: 8 },
                    { x: 70, y: 8 },
                    { x: 80, y: 9 },
                    { x: 90, y: 9 },
                    { x: 100, y: 9 },
                    { x: 110, y: 10 },
                    { x: 120, y: 11 },
                    { x: 130, y: 14 },
                    { x: 140, y: 14 },
                    { x: 150, y: 15 }
                ]
            },
        ]
    });
chart.render();


//---------------------------------------------Pie Chart---------------------------------------------------

var chart = new CanvasJS.Chart("chartContainer2",
    {
        title: {
            text: "Pie Chart",
        },
        data: [
            {
                type: "pie",
                showInLegend: true,
                dataPoints: [
                    { y: 4181563, legendText: "History", indexLabel: "History" },
                    { y: 2175498, legendText: "Geography", indexLabel: "Geography" },
                    { y: 3125844, legendText: "Chemistry", indexLabel: "Chemistry" },
                    { y: 1176121, legendText: "Comp. Science", indexLabel: "Comp. Science" },
                    { y: 1727161, legendText: "English", indexLabel: "English" },
                    { y: 4303364, legendText: "Hindi", indexLabel: "Hindi" },
                    { y: 1717786, legendText: "Maths", indexLabel: "Maths" }
                ]
            },
        ]
    });
chart.render();


//---------------------------------------------Line Chart---------------------------------------------------

var chart = new CanvasJS.Chart("chartContainer3",
    {
        title: {
            text: "Line Chart"
        },
        axisX: {
            valueFormatString: "MMM",
            interval: 1,
            intervalType: "month"
        },
        axisY: {
            includeZero: false
        },
        data: [
            {
                type: "line",
                dataPoints: [
                    { x: new Date(2012, 00, 1), y: 450 },
                    { x: new Date(2012, 01, 1), y: 414 },
                    { x: new Date(2012, 02, 1), y: 520,},
                    { x: new Date(2012, 03, 1), y: 460 },
                    { x: new Date(2012, 04, 1), y: 450 },
                    { x: new Date(2012, 05, 1), y: 500 },
                    { x: new Date(2012, 06, 1), y: 480 },
                    { x: new Date(2012, 07, 1), y: 480 },
                    { x: new Date(2012, 08, 1), y: 410,},
                    { x: new Date(2012, 09, 1), y: 500 },
                    { x: new Date(2012, 10, 1), y: 480 },
                    { x: new Date(2012, 11, 1), y: 510 }
                ]
            }
        ]
    });
chart.render();


//---------------------------------------------Column Chart---------------------------------------------------

var chart = new CanvasJS.Chart("chartContainer4",
    {
        title: {
            text: "Column Chart"
        },
        axisX: {
            interval: 10,
        },
        data: [
            {
                type: "column",
                legendMarkerType: "triangle",
                legendMarkerColor: "green",
                color: "rgba(255,12,32,.3)",
                showInLegend: true,
                legendText: "Country wise population",
                dataPoints: [
                    { x: 10, y: 297571, label: "India" },
                    { x: 20, y: 267017, label: "Saudi" },
                    { x: 30, y: 175200, label: "Canada" },
                    { x: 40, y: 154580, label: "Iran" },
                    { x: 50, y: 116000, label: "Russia" },
                    { x: 60, y: 97800, label: "UAE" },
                    { x: 70, y: 20682, label: "US" },
                    { x: 80, y: 20350, label: "China" }
                ]
            },
        ]
    });
>>>>>>> cbfd0a1b0c0c555bd3620b6cb346c3cc453373e6
chart.render();