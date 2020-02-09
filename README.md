# UFO

# Description of Project
In this module we built a website for presenting UFO Sighting data from a data file. The site is dynamic and data can be filtered by date of sighting by the user. 

# Lesson Module Files 
1) Index.html
2) app.js

# Challenge 11 Files
1) index_c11.html
2) app_c11.js

The style.css and datafiles are common to both lessons. 

# Resources
* The application was written in JavaScript.
* The website was structured using the Bootstrap style grid system.
* An Index.html file formats the majority of the content with minor changes made using a CSS Style Sheet. 
* One image downloaded from Nasa was used for the background. 

# Organization of files
The files were organized under a single master folder entitled UFO. The Index.html file is stored in the root directory. 

* Subfolder Static
* - CSS Subfolder holding the CSS style sheet
* - Images Subfolder holding the nasa image file
* - JS Subfolder holding the app.js and data.js file

# Challenge 11 
The Challenge 11 objectives were:

1) Modify the app to go from 1 Search Field on Date to 5 serach fields for: 
- Date
- City
- State
- Country
- Shape

2) Ensure that filters worked in a logical "AND" function so that only rows of data satisfying ALL search criteria entered by user would be displayed.

3) Erasing the search data would then return search results back to original.

4) Also ensure that the link at top of page "UFO Sightings" resets all filters to null and All Results are displayed. 

# Snippet of Output Showing All 5 Filters
App_c11_output5filters.png is included in this repository showing an exmple where 3 of the 5 filters are used filtering for:
1) Date: 1/1/2010
2) State: ca
3) Shape: light

# Areas of Changes in Code

- Index_c11.html file - starting with the Index,html file, the search field <li> code was duplicated for the initial DATE search field - adding 4 more search fields. The code on 3 parameters: 1) Name of Search, 2) ID, 3) placeholder value. In addition, the Filter Button was no longer needed and that code was commented out. In addition, the last line was changed to call the app_c11.js file instead of the lesson file, app.js. Particular attention was paid to the alignment of the 5 search boxes for aesthetics. 
  
- App_c11.js file - the javaScript code was modified to add or change 3 functions:

1) The Listener function was modified to d3.selectALL and changed to be responsive, not to a CLICK as in the original file -- but instead to any "Change" in any of the search boxes. Entering a new Date, City, State, Country, or Shape in the corresponding field - then hitting the return key - initiates the function. The listener function - upon activation - calls the new function Update filters
d3.selectAll("input").on("change", updateFilters);

2) The updateFilters function defines a new object and multiple new arrays such as:
- filters (object)
- changesElement
- elementValue
- filterId
then uses an IF ELSE statement and stores key:Value pairs for each User Input Search Bar in filters Object. 

3) The new FilterTable function incorporates a ForEach loop and the new filter object using the Object.entries(filters) method. 
Object.entries(filters).forEach(([key,value]) =>{
  filteredData = filteredData.filter(row => row[key] === value);
This code starts off with a full table then drops the row if it does not find a match for the key:value pairs in the filters object. 
It then builds the table using the buildTable(filteredData) function. 

The original buildTable function was used along with the code to read in the data file. 

# Possible Future Improvements
1) Using search boxes where the input is not obvious, such as the "Shape" search box, are better suited for possible drop-boxes where the user selects from a predetermined list. This box currently responds to terms like "light, formation, circle, triangle, etc." As you can see, the terms are not all alike, and are certainly not obvious unless you first scan down the original full list. 

2) Search box alignment on the grid is another area that could improve the responsiveness on different devices. Because the search boxes were aligned using the "&nbsp;" symbol, and display uses proportional fonts, changing the display size does not always result in a clean aligned set of boxes. Using one grid for the label and another for the search box might be a good bootstrap solution. 



