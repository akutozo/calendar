$( document ).ready(function() {
    console.log( "Let's Get Ready to Java!" );
    console.log(localStorage);
    //Local Storage
    var savedNineAmEvent = localStorage.getItem('9am') || '';
    //Text Variables for Time
    var nineAMtext = $('#9am');
    console.log(nineAMtext.val())
    var tenAMtext = $('#10am');
    //Save Varaibles for Time
    var save9amBtn = $('#9am-save')

    nineAMtext.val(savedNineAmEvent);

    //Save functions
    function save9am() {
        var nineInput = nineAMtext.val().trim();
        console.log(nineInput)
        localStorage.setItem('9am', nineInput)
    }
    save9amBtn.click(save9am);

});

//Assign Date to <p id="currentDay">
const now = moment().format('MMMM Do YYYY');
let $today = $('#currentDay');
$today.text(now);

//Let's store some information
// let dailyAgenda = JSON.parse(localStorage.getItem("dailyAgenda"));

// const hour1 = document.getElementById("9am");
// const hour2 = document.getElementById("10am");
// const hour3 = document.getElementById("11am");
// const hour4 = document.getElementById("12pm");
// const hour5 = document.getElementById("1pm");
// const hour6 = document.getElementById("2pm");
// const hour7 = document.getElementById("3pm");
// const hour8 = document.getElementById("4pm");
// const hour9 = document.getElementById("5pm");
// const btnSave = document.getElementById("save");


// btnSave.onclick = function() {

// }