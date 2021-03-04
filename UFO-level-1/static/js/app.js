// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
let tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

// define callback function for For Each
tableData.forEach(processRecord);

function processRecord(record){
    console.log(record);

    // Loop through the data and console.log each report data

    // Use d3 to append one table row `tr` for each ufo report object
    let row = tbody.append('tr');

    // Use `Object.entries` to console.log each ufo report value
    Object.values(record).forEach(
        // callback function that will be called for every value in record
        function(value)
        {    
            // Use d3 to append 1 cell per ufo report value
            // Use d3 to update each cell's text with ufp report values
            row.append('td').text(value);
        }
    );


}

// search by date/time column to find rows that match user input

// getting a reference to the button on the page with the id `filter-btn`
let button = d3.select("#filter-btn");
// select the form
let form = d3.select("#form");
// getting a reference to the date/time, city, state, country and shape input element with the class set to `form-control`
let inputDate = d3.select("#datetime");

let clickCount = 0;

// a callback-function which is triggered when the button filter table is clicked
function handleClick(){
    d3.event.preventDefault();
    let inputText = inputDate.property("value").toLowerCase();
    
    console.log(inputText);
    
        var filterValue = tableData.filter(record => record.datetime===inputText);
    
    console.log(filterValue);
    tbody.html("");
    filterValue.forEach(processRecord);
    

}

// using on function in d3 to attach an event handler function to button
button.on("click", handleClick);
form.on("submit",handleClick);
// button.on("click", function(){
//     clickCount ++;
//     console.log(`button click number ${clickCount}`);
//     console.log(event.target);
// });

// // input field that changes based on a click
// inputField.on('change', function (event){
//     console.log(event.target);
//     console.log(event.target.value);

// })

inputField.on("change", handleClick);



