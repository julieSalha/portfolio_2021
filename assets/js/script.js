// ==============================================
// DISPLAY DATA
// ==============================================

//
//  Declarations
//  _____________________________________________

let allData
const req = new XMLHttpRequest();

//
//  Functions
//  _____________________________________________

req.open('GET', '../../data/data.json');
req.onreadystatechange = () => {
    if(req.readyState === 4 && req.status === 200) {
        allData = JSON.parse(req.responseText);


    };
};

//
//  Launching
//  _____________________________________________

req.send();

// ==============================================
// OTHERS
// ==============================================

//
//  Declarations
//  _____________________________________________


//
//  Functions
//  _____________________________________________


//
//  Launching
//  _____________________________________________


window.addEventListener("DOMContentLoaded", (event) => {

});