var API_KEY = 'AIzaSyBB_BzvdR2H536ftw2pc9IQpSHrNZ9MFGA';
var spreadsheetId = '14NNrsWdV5VK7PWcXyTIyrlKiXxOV92vo8YDWX_YeXmA';
var range = '!A1:S1134';

var API_URL = 'https://sheets.googleapis.com/v4/spreadsheets/'
+ spreadsheetId
+ '/values/List1'
+ range
+ '?key='
+ API_KEY
+ '&majorDimension=columns';



fetch(API_URL)

.then(function(response){
    return response.json();
})
.then(function(response){

    var lablesValue = [];
    for (var i = 3; i < response.values.length; i = i +4){
        lablesValue.push(response.values[i][0]);
    }

    
        var average = [];
        var averageTo = [];
        var averageQty = [];

        for ( var i = 3; i <= response.values.length - 3; i += 4){
            var forecastGapSaver = 0;
            var notEmptyCount = 0;
            var totalTo = 0;
            var gapMultiplyTo = 0;
            var totalQty = 0;
            var gapMultiplyQty = 0;
            for (var j = 2; j < response.values[i].length; j += 1){
                if (response.values[i + 1][j] == '' || response.values[i][j] == '' ){
                    continue;
                }
                var forecastGap = Math.abs((response.values[i + 1][j] - response.values[i][j])/response.values[i][j] * 100);
                if (forecastGap == Infinity){
                    continue;
                }
                forecastGapSaver += forecastGap;
                notEmptyCount += 1;

                totalTo += parseInt(response.values[i + 2][j]);
                gapMultiplyTo += parseInt(response.values[i + 2][j]) * forecastGap;

                totalQty += parseInt(response.values[i + 3][j]);
                gapMultiplyQty += parseInt(response.values[i + 3][j]) * forecastGap;
            }   
            average.push(100 - forecastGapSaver/notEmptyCount);
            averageTo.push(100 - gapMultiplyTo/totalTo);
            averageQty.push(100 - gapMultiplyQty/totalQty);
        };


        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: lablesValue,
                datasets: [{
                    label: "Average",
                    borderColor: 'red',
                    data: average,
                },
                {
                    label: "Weighted arithmetic(Turnover)",
                    borderColor: 'green',
                    data: averageTo,
            },
                {
                    label: "Weighted arithmetic(Quantity)",
                    borderColor: 'blue',
                    data: averageQty,
            }   
            ]
            },

            // Configuration options go here
            options: {}
            });
        });



var team = document.querySelector('.team');
var group548 = document.querySelector('.s548');
var group550 = document.querySelector('.s550');
var group555 = document.querySelector('.s555');
var group562 = document.querySelector('.s562');
var group569 = document.querySelector('.s569');
var group575 = document.querySelector('.s575');
var group579 = document.querySelector('.s579');
var group586 = document.querySelector('.s586');
var group858 = document.querySelector('.s858');
var group875 = document.querySelector('.s875');
var group877 = document.querySelector('.s877');

team.addEventListener('click', function(){
    


fetch(API_URL)

.then(function(response){
    return response.json();
})
.then(function(response){

    var lablesValue = [];
    for (var i = 3; i < response.values.length; i = i +4){
        lablesValue.push(response.values[i][0]);
    }

    
        var average = [];
        var averageTo = [];
        var averageQty = [];

        for ( var i = 3; i <= response.values.length - 3; i += 4){
            var forecastGapSaver = 0;
            var notEmptyCount = 0;
            var totalTo = 0;
            var gapMultiplyTo = 0;
            var totalQty = 0;
            var gapMultiplyQty = 0;
            for (var j = 2; j < response.values[i].length; j += 1){
                if (response.values[i + 1][j] == '' || response.values[i][j] == '' ){
                    continue;
                }
                var forecastGap = Math.abs((response.values[i + 1][j] - response.values[i][j])/response.values[i][j] * 100);
                if (forecastGap == Infinity){
                    continue;
                }
                forecastGapSaver += forecastGap;
                notEmptyCount += 1;

                totalTo += parseInt(response.values[i + 2][j]);
                gapMultiplyTo += parseInt(response.values[i + 2][j]) * forecastGap;

                totalQty += parseInt(response.values[i + 3][j]);
                gapMultiplyQty += parseInt(response.values[i + 3][j]) * forecastGap;
            }   
            average.push(100 - forecastGapSaver/notEmptyCount);
            averageTo.push(100 - gapMultiplyTo/totalTo);
            averageQty.push(100 - gapMultiplyQty/totalQty);
        };


        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: lablesValue,
                datasets: [{
                    label: "Average",
                    borderColor: 'red',
                    data: average,
                },
                {
                    label: "Weighted arithmetic(Turnover)",
                    borderColor: 'green',
                    data: averageTo,
            },
                {
                    label: "Weighted arithmetic(Quantity)",
                    borderColor: 'blue',
                    data: averageQty,
            }   
            ]
            },

            // Configuration options go here
            options: {}
            });
        });
    })



//////////////////////////////////////////////////////////////////////////
group548.addEventListener('click', function(){
    fetch(API_URL)

    .then(function(response){
        return response.json();
    })
    .then(function(response){

    var lablesValue = [];
    for (var i = 3; i < response.values.length; i = i +4){
        lablesValue.push(response.values[i][0]);
    }

    
        var average = [];
        var averageTo = [];
        var averageQty = [];

        for ( var i = 3; i <= response.values.length - 3; i += 4){
            var forecastGapSaver = 0;
            var notEmptyCount = 0;
            var totalTo = 0;
            var gapMultiplyTo = 0;
            var totalQty = 0;
            var gapMultiplyQty = 0;
            for (var j = 2; j < response.values[i].length; j += 1){
                if (parseInt(response.values[0][j]) != 548){
                    continue;
                }
                if (response.values[i + 1][j] == '' || response.values[i][j] == '' ){
                    continue;
                }
                var forecastGap = Math.abs((response.values[i + 1][j] - response.values[i][j])/response.values[i][j] * 100);
                if (forecastGap == Infinity){
                    continue;
                }
                forecastGapSaver += forecastGap;
                notEmptyCount += 1;

                totalTo += parseInt(response.values[i + 2][j]);
                gapMultiplyTo += parseInt(response.values[i + 2][j]) * forecastGap;

                totalQty += parseInt(response.values[i + 3][j]);
                gapMultiplyQty += parseInt(response.values[i + 3][j]) * forecastGap;
            }   
            average.push(100 - forecastGapSaver/notEmptyCount);
            averageTo.push(100 - gapMultiplyTo/totalTo);
            averageQty.push(100 - gapMultiplyQty/totalQty);
        };


        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: lablesValue,
                datasets: [{
                    label: "Average",
                    borderColor: 'red',
                    data: average,
                },
                {
                    label: "Weighted arithmetic(Turnover)",
                    borderColor: 'green',
                    data: averageTo,
            },
                {
                    label: "Weighted arithmetic(Quantity)",
                    borderColor: 'blue',
                    data: averageQty,
            }   
            ]
            },

            // Configuration options go here
            options: {}
            });
        });
});

//////////////////////////////////////////////////////////////////////////////////////

group550.addEventListener('click', function(){
    fetch(API_URL)

    .then(function(response){
        return response.json();
    })
    .then(function(response){

    var lablesValue = [];
    for (var i = 3; i < response.values.length; i = i +4){
        lablesValue.push(response.values[i][0]);
    }

    
        var average = [];
        var averageTo = [];
        var averageQty = [];

        for ( var i = 3; i <= response.values.length - 3; i += 4){
            var forecastGapSaver = 0;
            var notEmptyCount = 0;
            var totalTo = 0;
            var gapMultiplyTo = 0;
            var totalQty = 0;
            var gapMultiplyQty = 0;
            for (var j = 2; j < response.values[i].length; j += 1){
                if (parseInt(response.values[0][j]) != 550){
                    continue;
                }
                if (response.values[i + 1][j] == '' || response.values[i][j] == '' ){
                    continue;
                }
                var forecastGap = Math.abs((response.values[i + 1][j] - response.values[i][j])/response.values[i][j] * 100);
                if (forecastGap == Infinity){
                    continue;
                }
                forecastGapSaver += forecastGap;
                notEmptyCount += 1;

                totalTo += parseInt(response.values[i + 2][j]);
                gapMultiplyTo += parseInt(response.values[i + 2][j]) * forecastGap;

                totalQty += parseInt(response.values[i + 3][j]);
                gapMultiplyQty += parseInt(response.values[i + 3][j]) * forecastGap;
            }   
            average.push(100 - forecastGapSaver/notEmptyCount);
            averageTo.push(100 - gapMultiplyTo/totalTo);
            averageQty.push(100 - gapMultiplyQty/totalQty);
        };


        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: lablesValue,
                datasets: [{
                    label: "Average",
                    borderColor: 'red',
                    data: average,
                },
                {
                    label: "Weighted arithmetic(Turnover)",
                    borderColor: 'green',
                    data: averageTo,
            },
                {
                    label: "Weighted arithmetic(Quantity)",
                    borderColor: 'blue',
                    data: averageQty,
            }   
            ]
            },

            // Configuration options go here
            options: {}
            });
        });
});

//////////////////////////////////////////////////////////////////////////////////////

group555.addEventListener('click', function(){
    fetch(API_URL)

    .then(function(response){
        return response.json();
    })
    .then(function(response){

    var lablesValue = [];
    for (var i = 3; i < response.values.length; i = i +4){
        lablesValue.push(response.values[i][0]);
    }

    
        var average = [];
        var averageTo = [];
        var averageQty = [];

        for ( var i = 3; i <= response.values.length - 3; i += 4){
            var forecastGapSaver = 0;
            var notEmptyCount = 0;
            var totalTo = 0;
            var gapMultiplyTo = 0;
            var totalQty = 0;
            var gapMultiplyQty = 0;
            for (var j = 2; j < response.values[i].length; j += 1){
                if (parseInt(response.values[0][j]) != 555){
                    continue;
                }
                if (response.values[i + 1][j] == '' || response.values[i][j] == '' ){
                    continue;
                }
                var forecastGap = Math.abs((response.values[i + 1][j] - response.values[i][j])/response.values[i][j] * 100);
                if (forecastGap == Infinity){
                    continue;
                }
                forecastGapSaver += forecastGap;
                notEmptyCount += 1;

                totalTo += parseInt(response.values[i + 2][j]);
                gapMultiplyTo += parseInt(response.values[i + 2][j]) * forecastGap;

                totalQty += parseInt(response.values[i + 3][j]);
                gapMultiplyQty += parseInt(response.values[i + 3][j]) * forecastGap;
            }   
            average.push(100 - forecastGapSaver/notEmptyCount);
            averageTo.push(100 - gapMultiplyTo/totalTo);
            averageQty.push(100 - gapMultiplyQty/totalQty);
        };


        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: lablesValue,
                datasets: [{
                    label: "Average",
                    borderColor: 'red',
                    data: average,
                },
                {
                    label: "Weighted arithmetic(Turnover)",
                    borderColor: 'green',
                    data: averageTo,
            },
                {
                    label: "Weighted arithmetic(Quantity)",
                    borderColor: 'blue',
                    data: averageQty,
            }   
            ]
            },

            // Configuration options go here
            options: {}
            });
        });
});

//////////////////////////////////////////////////////////////////////////////////////

group562.addEventListener('click', function(){
    fetch(API_URL)

    .then(function(response){
        return response.json();
    })
    .then(function(response){

    var lablesValue = [];
    for (var i = 3; i < response.values.length; i = i +4){
        lablesValue.push(response.values[i][0]);
    }

    
        var average = [];
        var averageTo = [];
        var averageQty = [];

        for ( var i = 3; i <= response.values.length - 3; i += 4){
            var forecastGapSaver = 0;
            var notEmptyCount = 0;
            var totalTo = 0;
            var gapMultiplyTo = 0;
            var totalQty = 0;
            var gapMultiplyQty = 0;
            for (var j = 2; j < response.values[i].length; j += 1){
                if (parseInt(response.values[0][j]) != 562){
                    continue;
                }
                if (response.values[i + 1][j] == '' || response.values[i][j] == '' ){
                    continue;
                }
                var forecastGap = Math.abs((response.values[i + 1][j] - response.values[i][j])/response.values[i][j] * 100);
                if (forecastGap == Infinity){
                    continue;
                }
                forecastGapSaver += forecastGap;
                notEmptyCount += 1;

                totalTo += parseInt(response.values[i + 2][j]);
                gapMultiplyTo += parseInt(response.values[i + 2][j]) * forecastGap;

                totalQty += parseInt(response.values[i + 3][j]);
                gapMultiplyQty += parseInt(response.values[i + 3][j]) * forecastGap;
            }   
            average.push(100 - forecastGapSaver/notEmptyCount);
            averageTo.push(100 - gapMultiplyTo/totalTo);
            averageQty.push(100 - gapMultiplyQty/totalQty);
        };


        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: lablesValue,
                datasets: [{
                    label: "Average",
                    borderColor: 'red',
                    data: average,
                },
                {
                    label: "Weighted arithmetic(Turnover)",
                    borderColor: 'green',
                    data: averageTo,
            },
                {
                    label: "Weighted arithmetic(Quantity)",
                    borderColor: 'blue',
                    data: averageQty,
            }   
            ]
            },

            // Configuration options go here
            options: {}
            });
        });
});

//////////////////////////////////////////////////////////////////////////////////////

group569.addEventListener('click', function(){
    fetch(API_URL)

    .then(function(response){
        return response.json();
    })
    .then(function(response){

    var lablesValue = [];
    for (var i = 3; i < response.values.length; i = i +4){
        lablesValue.push(response.values[i][0]);
    }

    
        var average = [];
        var averageTo = [];
        var averageQty = [];

        for ( var i = 3; i <= response.values.length - 3; i += 4){
            var forecastGapSaver = 0;
            var notEmptyCount = 0;
            var totalTo = 0;
            var gapMultiplyTo = 0;
            var totalQty = 0;
            var gapMultiplyQty = 0;
            for (var j = 2; j < response.values[i].length; j += 1){
                if (parseInt(response.values[0][j]) != 569){
                    continue;
                }
                if (response.values[i + 1][j] == '' || response.values[i][j] == '' ){
                    continue;
                }
                var forecastGap = Math.abs((response.values[i + 1][j] - response.values[i][j])/response.values[i][j] * 100);
                if (forecastGap == Infinity){
                    continue;
                }
                forecastGapSaver += forecastGap;
                notEmptyCount += 1;

                totalTo += parseInt(response.values[i + 2][j]);
                gapMultiplyTo += parseInt(response.values[i + 2][j]) * forecastGap;

                totalQty += parseInt(response.values[i + 3][j]);
                gapMultiplyQty += parseInt(response.values[i + 3][j]) * forecastGap;
            }   
            average.push(100 - forecastGapSaver/notEmptyCount);
            averageTo.push(100 - gapMultiplyTo/totalTo);
            averageQty.push(100 - gapMultiplyQty/totalQty);
        };


        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: lablesValue,
                datasets: [{
                    label: "Average",
                    borderColor: 'red',
                    data: average,
                },
                {
                    label: "Weighted arithmetic(Turnover)",
                    borderColor: 'green',
                    data: averageTo,
            },
                {
                    label: "Weighted arithmetic(Quantity)",
                    borderColor: 'blue',
                    data: averageQty,
            }   
            ]
            },

            // Configuration options go here
            options: {}
            });
        });
});

//////////////////////////////////////////////////////////////////////////////////////

group575.addEventListener('click', function(){
    fetch(API_URL)

    .then(function(response){
        return response.json();
    })
    .then(function(response){

    var lablesValue = [];
    for (var i = 3; i < response.values.length; i = i +4){
        lablesValue.push(response.values[i][0]);
    }

    
        var average = [];
        var averageTo = [];
        var averageQty = [];

        for ( var i = 3; i <= response.values.length - 3; i += 4){
            var forecastGapSaver = 0;
            var notEmptyCount = 0;
            var totalTo = 0;
            var gapMultiplyTo = 0;
            var totalQty = 0;
            var gapMultiplyQty = 0;
            for (var j = 2; j < response.values[i].length; j += 1){
                if (parseInt(response.values[0][j]) != 575){
                    continue;
                }
                if (response.values[i + 1][j] == '' || response.values[i][j] == '' ){
                    continue;
                }
                var forecastGap = Math.abs((response.values[i + 1][j] - response.values[i][j])/response.values[i][j] * 100);
                if (forecastGap == Infinity){
                    continue;
                }
                forecastGapSaver += forecastGap;
                notEmptyCount += 1;

                totalTo += parseInt(response.values[i + 2][j]);
                gapMultiplyTo += parseInt(response.values[i + 2][j]) * forecastGap;

                totalQty += parseInt(response.values[i + 3][j]);
                gapMultiplyQty += parseInt(response.values[i + 3][j]) * forecastGap;
            }   
            average.push(100 - forecastGapSaver/notEmptyCount);
            averageTo.push(100 - gapMultiplyTo/totalTo);
            averageQty.push(100 - gapMultiplyQty/totalQty);
        };


        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: lablesValue,
                datasets: [{
                    label: "Average",
                    borderColor: 'red',
                    data: average,
                },
                {
                    label: "Weighted arithmetic(Turnover)",
                    borderColor: 'green',
                    data: averageTo,
            },
                {
                    label: "Weighted arithmetic(Quantity)",
                    borderColor: 'blue',
                    data: averageQty,
            }   
            ]
            },

            // Configuration options go here
            options: {}
            });
        });
});

//////////////////////////////////////////////////////////////////////////////////////

group579.addEventListener('click', function(){
    fetch(API_URL)

    .then(function(response){
        return response.json();
    })
    .then(function(response){

    var lablesValue = [];
    for (var i = 3; i < response.values.length; i = i +4){
        lablesValue.push(response.values[i][0]);
    }

    
        var average = [];
        var averageTo = [];
        var averageQty = [];

        for ( var i = 3; i <= response.values.length - 3; i += 4){
            var forecastGapSaver = 0;
            var notEmptyCount = 0;
            var totalTo = 0;
            var gapMultiplyTo = 0;
            var totalQty = 0;
            var gapMultiplyQty = 0;
            for (var j = 2; j < response.values[i].length; j += 1){
                if (parseInt(response.values[0][j]) != 579){
                    continue;
                }
                if (response.values[i + 1][j] == '' || response.values[i][j] == '' ){
                    continue;
                }
                var forecastGap = Math.abs((response.values[i + 1][j] - response.values[i][j])/response.values[i][j] * 100);
                if (forecastGap == Infinity){
                    continue;
                }
                forecastGapSaver += forecastGap;
                notEmptyCount += 1;

                totalTo += parseInt(response.values[i + 2][j]);
                gapMultiplyTo += parseInt(response.values[i + 2][j]) * forecastGap;

                totalQty += parseInt(response.values[i + 3][j]);
                gapMultiplyQty += parseInt(response.values[i + 3][j]) * forecastGap;
            }   
            average.push(100 - forecastGapSaver/notEmptyCount);
            averageTo.push(100 - gapMultiplyTo/totalTo);
            averageQty.push(100 - gapMultiplyQty/totalQty);
        };


        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: lablesValue,
                datasets: [{
                    label: "Average",
                    borderColor: 'red',
                    data: average,
                },
                {
                    label: "Weighted arithmetic(Turnover)",
                    borderColor: 'green',
                    data: averageTo,
            },
                {
                    label: "Weighted arithmetic(Quantity)",
                    borderColor: 'blue',
                    data: averageQty,
            }   
            ]
            },

            // Configuration options go here
            options: {}
            });
        });
});

//////////////////////////////////////////////////////////////////////////////////////

group586.addEventListener('click', function(){
    fetch(API_URL)

    .then(function(response){
        return response.json();
    })
    .then(function(response){

    var lablesValue = [];
    for (var i = 3; i < response.values.length; i = i +4){
        lablesValue.push(response.values[i][0]);
    }

    
        var average = [];
        var averageTo = [];
        var averageQty = [];

        for ( var i = 3; i <= response.values.length - 3; i += 4){
            var forecastGapSaver = 0;
            var notEmptyCount = 0;
            var totalTo = 0;
            var gapMultiplyTo = 0;
            var totalQty = 0;
            var gapMultiplyQty = 0;
            for (var j = 2; j < response.values[i].length; j += 1){
                if (parseInt(response.values[0][j]) != 586){
                    continue;
                }
                if (response.values[i + 1][j] == '' || response.values[i][j] == '' ){
                    continue;
                }
                var forecastGap = Math.abs((response.values[i + 1][j] - response.values[i][j])/response.values[i][j] * 100);
                if (forecastGap == Infinity){
                    continue;
                }
                forecastGapSaver += forecastGap;
                notEmptyCount += 1;

                totalTo += parseInt(response.values[i + 2][j]);
                gapMultiplyTo += parseInt(response.values[i + 2][j]) * forecastGap;

                totalQty += parseInt(response.values[i + 3][j]);
                gapMultiplyQty += parseInt(response.values[i + 3][j]) * forecastGap;
            }   
            average.push(100 - forecastGapSaver/notEmptyCount);
            averageTo.push(100 - gapMultiplyTo/totalTo);
            averageQty.push(100 - gapMultiplyQty/totalQty);
        };


        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: lablesValue,
                datasets: [{
                    label: "Average",
                    borderColor: 'red',
                    data: average,
                },
                {
                    label: "Weighted arithmetic(Turnover)",
                    borderColor: 'green',
                    data: averageTo,
            },
                {
                    label: "Weighted arithmetic(Quantity)",
                    borderColor: 'blue',
                    data: averageQty,
            }   
            ]
            },

            // Configuration options go here
            options: {}
            });
        });
});

//////////////////////////////////////////////////////////////////////////////////////

group858.addEventListener('click', function(){
    fetch(API_URL)

    .then(function(response){
        return response.json();
    })
    .then(function(response){

    var lablesValue = [];
    for (var i = 3; i < response.values.length; i = i +4){
        lablesValue.push(response.values[i][0]);
    }

    
        var average = [];
        var averageTo = [];
        var averageQty = [];

        for ( var i = 3; i <= response.values.length - 3; i += 4){
            var forecastGapSaver = 0;
            var notEmptyCount = 0;
            var totalTo = 0;
            var gapMultiplyTo = 0;
            var totalQty = 0;
            var gapMultiplyQty = 0;
            for (var j = 2; j < response.values[i].length; j += 1){
                if (parseInt(response.values[0][j]) != 858){
                    continue;
                }
                if (response.values[i + 1][j] == '' || response.values[i][j] == '' ){
                    continue;
                }
                var forecastGap = Math.abs((response.values[i + 1][j] - response.values[i][j])/response.values[i][j] * 100);
                if (forecastGap == Infinity){
                    continue;
                }
                forecastGapSaver += forecastGap;
                notEmptyCount += 1;

                totalTo += parseInt(response.values[i + 2][j]);
                gapMultiplyTo += parseInt(response.values[i + 2][j]) * forecastGap;

                totalQty += parseInt(response.values[i + 3][j]);
                gapMultiplyQty += parseInt(response.values[i + 3][j]) * forecastGap;
            }   
            average.push(100 - forecastGapSaver/notEmptyCount);
            averageTo.push(100 - gapMultiplyTo/totalTo);
            averageQty.push(100 - gapMultiplyQty/totalQty);
        };


        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: lablesValue,
                datasets: [{
                    label: "Average",
                    borderColor: 'red',
                    data: average,
                },
                {
                    label: "Weighted arithmetic(Turnover)",
                    borderColor: 'green',
                    data: averageTo,
            },
                {
                    label: "Weighted arithmetic(Quantity)",
                    borderColor: 'blue',
                    data: averageQty,
            }   
            ]
            },

            // Configuration options go here
            options: {}
            });
        });
});

//////////////////////////////////////////////////////////////////////////////////////

group875.addEventListener('click', function(){
    fetch(API_URL)

    .then(function(response){
        return response.json();
    })
    .then(function(response){

    var lablesValue = [];
    for (var i = 3; i < response.values.length; i = i +4){
        lablesValue.push(response.values[i][0]);
    }

    
        var average = [];
        var averageTo = [];
        var averageQty = [];

        for ( var i = 3; i <= response.values.length - 3; i += 4){
            var forecastGapSaver = 0;
            var notEmptyCount = 0;
            var totalTo = 0;
            var gapMultiplyTo = 0;
            var totalQty = 0;
            var gapMultiplyQty = 0;
            for (var j = 2; j < response.values[i].length; j += 1){
                if (parseInt(response.values[0][j]) != 875){
                    continue;
                }
                if (response.values[i + 1][j] == '' || response.values[i][j] == '' ){
                    continue;
                }
                var forecastGap = Math.abs((response.values[i + 1][j] - response.values[i][j])/response.values[i][j] * 100);
                if (forecastGap == Infinity){
                    continue;
                }
                forecastGapSaver += forecastGap;
                notEmptyCount += 1;

                totalTo += parseInt(response.values[i + 2][j]);
                gapMultiplyTo += parseInt(response.values[i + 2][j]) * forecastGap;

                totalQty += parseInt(response.values[i + 3][j]);
                gapMultiplyQty += parseInt(response.values[i + 3][j]) * forecastGap;
            }   
            average.push(100 - forecastGapSaver/notEmptyCount);
            averageTo.push(100 - gapMultiplyTo/totalTo);
            averageQty.push(100 - gapMultiplyQty/totalQty);
        };


        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: lablesValue,
                datasets: [{
                    label: "Average",
                    borderColor: 'red',
                    data: average,
                },
                {
                    label: "Weighted arithmetic(Turnover)",
                    borderColor: 'green',
                    data: averageTo,
            },
                {
                    label: "Weighted arithmetic(Quantity)",
                    borderColor: 'blue',
                    data: averageQty,
            }   
            ]
            },

            // Configuration options go here
            options: {}
            });
        });
});

//////////////////////////////////////////////////////////////////////////////////////

group877.addEventListener('click', function(){
    fetch(API_URL)

    .then(function(response){
        return response.json();
    })
    .then(function(response){

    var lablesValue = [];
    for (var i = 3; i < response.values.length; i = i +4){
        lablesValue.push(response.values[i][0]);
    }

    
        var average = [];
        var averageTo = [];
        var averageQty = [];

        for ( var i = 3; i <= response.values.length - 3; i += 4){
            var forecastGapSaver = 0;
            var notEmptyCount = 0;
            var totalTo = 0;
            var gapMultiplyTo = 0;
            var totalQty = 0;
            var gapMultiplyQty = 0;
            for (var j = 2; j < response.values[i].length; j += 1){
                if (parseInt(response.values[0][j]) != 877){
                    continue;
                }
                if (response.values[i + 1][j] == '' || response.values[i][j] == '' ){
                    continue;
                }
                var forecastGap = Math.abs((response.values[i + 1][j] - response.values[i][j])/response.values[i][j] * 100);
                if (forecastGap == Infinity){
                    continue;
                }
                forecastGapSaver += forecastGap;
                notEmptyCount += 1;

                totalTo += parseInt(response.values[i + 2][j]);
                gapMultiplyTo += parseInt(response.values[i + 2][j]) * forecastGap;

                totalQty += parseInt(response.values[i + 3][j]);
                gapMultiplyQty += parseInt(response.values[i + 3][j]) * forecastGap;
            }   
            average.push(100 - forecastGapSaver/notEmptyCount);
            averageTo.push(100 - gapMultiplyTo/totalTo);
            averageQty.push(100 - gapMultiplyQty/totalQty);
        };


        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: lablesValue,
                datasets: [{
                    label: "Average",
                    borderColor: 'red',
                    data: average,
                },
                {
                    label: "Weighted arithmetic(Turnover)",
                    borderColor: 'green',
                    data: averageTo,
            },
                {
                    label: "Weighted arithmetic(Quantity)",
                    borderColor: 'blue',
                    data: averageQty,
            }   
            ]
            },

            // Configuration options go here
            options: {}
            });
        });
});

//////////////////////////////////////////////////////////////////////////////////////