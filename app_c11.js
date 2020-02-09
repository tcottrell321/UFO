// Create duplicate copy of data by importing the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");
//====================================================================
//Build the original table with column headers and all rows of data
function buildTable(data) {  
  // First, clear out any existing data
  tbody.html("");  
    
  // Next, loop through each object in the data  
  // and append a row and cells for each value in the row  
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");       
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)    
    Object.values(dataRow).forEach((val) => {     
      let cell = row.append("td");      
      cell.text(val);    
    });  
  });
}
// declare filters dictionary to store all filter input data
var filters = {};
//=======================================================================
//Build updateFilters function
function updateFilters() {
//function updateFilters()  
// Save the element, value, and id of the filter that was changed  
let changesElement = d3.select(this);
let elementValue = changesElement.property("value");
let filterId = changesElement.attr("id");

// If a filter value was entered then add that filterId and value  
// to the filters list. Otherwise, clear that filter from the filters object
if (elementValue) {
  filters[filterId] = elementValue;
  }
else {
delete filters[filterId];  
};
filterTable();
}
//=========================================================================
//Define filterTable function
function filterTable() {

//Set the filtereData to the tableData
let filteredData = tableData;

// Loop through the filters object and check each key/value pair (5) to keep that row if 
// all 5 key:value pairs match original. The key:value pairs use "Boolean AND logic"
Object.entries(filters).forEach(([key,value]) =>{
  filteredData = filteredData.filter(row => row[key] === value);
});

// Rebuild the table using the filtered data
// @NOTE: If none of the 5 seach filters changed, then filteredData will
// just be the original tableData.
buildTable(filteredData);
}

//===============================================================================
// Attach an event to listen for changes to and single or multiple filters
// Listen function monitors any change in 5 search boxes thus eliminating need for Filter Button
d3.selectAll("input").on("change", updateFilters);
//End New Listener Function ------------------------------------------------------------------------

//================================================================================
// When calling main web page for first time, build out full unfiltered table. 
buildTable(tableData);





