//Assign Date to <p id="currentDay">
const now = moment().format('MMMM Do YYYY');
let $today = $('#currentDay');
$today.text(now);

//Let's store some information
let dailyAgenda = JSON.parse(localStorage.getItem("dailyAgenda"));