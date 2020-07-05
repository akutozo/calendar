//Assign Date to <p id="currentDay">
const now = moment().format('MMMM Do YYYY');
let $today = $('#currentDay');
$today.text(now);

//Let's store some information
// let dailyAgenda = JSON.parse(localStorage.getItem("dailyAgenda"));


$('input').on('input', function () {
    console.log($(this).val());
    if ($(this).val() === "") {
        localStorage.setItem($(this).attr("id"), "");
    }
}) 