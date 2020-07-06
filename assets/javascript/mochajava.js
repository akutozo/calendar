$( document ).ready(function() {
    console.log( "Let's Get Ready to Java!" );
    console.log(localStorage);

    //Local Storage
    var saved9AmEvent = localStorage.getItem('9am') || '';
    var saved10AmEvent = localStorage.getItem('10am') || '';
    var saved11AmEvent = localStorage.getItem('11am') || '';
    var saved12PmEvent = localStorage.getItem('12pm') || '';
    var saved1PmEvent = localStorage.getItem('1pm') || '';
    var saved2PmEvent = localStorage.getItem('2pm') || '';
    var saved3PmEvent = localStorage.getItem('3pm') || '';
    var saved4PmEvent = localStorage.getItem('4pm') || '';
    var saved5PmEvent = localStorage.getItem('5pm') || '';

    //Text Variables for Time
    var nineAMtext = $('#9am');
    var tenAMtext = $('#10am');
    var elevenAMtext = $('#11am');
    var twelvePMtext = $('#12pm');
    var onePMtext = $('#1pm');
    var twoPMtext = $('#2pm');
    var threePMtext = $('#3pm');
    var fourPMtext = $('#4pm');
    var fivePMtext = $('#5pm');

    //Review Data
    console.log(nineAMtext.val())
    console.log(tenAMtext.val())
    console.log(elevenAMtext.val())
    console.log(twelvePMtext.val())
    console.log(onePMtext.val())
    console.log(twoPMtext.val())
    console.log(threePMtext.val())
    console.log(fourPMtext.val())
    console.log(nineAMtext.val())
    console.log(fivePMtext.val())

    //Save Varaibles for Time
    var save9amBtn = $('#9am-save')
    var save10amBtn = $('#10am-save')
    var save11amBtn = $('#11am-save')
    var save12pmBtn = $('#12pm-save')
    var save1pmBtn = $('#1pm-save')
    var save2pmBtn = $('#2pm-save')
    var save3pmBtn = $('#3pm-save')
    var save4pmBtn = $('#4pm-save')
    var save5pmBtn = $('#5pm-save')

    //Plan and Achieve It
    nineAMtext.val(saved9AmEvent);
    tenAMtext.val(saved10AmEvent);
    elevenAMtext.val(saved11AmEvent);
    twelvePMtext.val(saved12PmEvent);
    onePMtext.val(saved1PmEvent);
    twoPMtext.val(saved2PmEvent);
    threePMtext.val(saved3PmEvent);
    fourPMtext.val(saved4PmEvent);
    fivePMtext.val(saved5PmEvent);

    //Save 9 AM
    function save9am() {
        var nineInput = nineAMtext.val().trim();
        console.log(nineInput)
        localStorage.setItem('9am', nineInput)
    }
    save9amBtn.click(save9am);
    //Save 10 AM
    function save10am() {
        var tenInput = tenAMtext.val().trim();
        console.log(tenInput)
        localStorage.setItem('10am', tenInput)
    }
    save10amBtn.click(save10am);
    //Save 11 AM
    function save11am() {
        var elevenInput = elevenAMtext.val().trim();
        console.log(elevenInput)
        localStorage.setItem('11am', elevenInput)
    }
    save11amBtn.click(save11am);
    //Save 12 PM
    function save12pm() {
        var twelveInput = twelvePMtext.val().trim();
        console.log(twelveInput)
        localStorage.setItem('12pm', twelveInput)
    }
    save12pmBtn.click(save12pm);
    //Save 1 PM
    function save1pm() {
        var oneInput = onePMtext.val().trim();
        console.log(oneInput)
        localStorage.setItem('1pm', oneInput)
    }
    save1pmBtn.click(save1pm);
    //Save 2 PM
    function save2pm() {
        var twoInput = twoPMtext.val().trim();
        console.log(twoInput)
        localStorage.setItem('2pm', twoInput)
    }
    save2pmBtn.click(save2pm);
    //Save 3 PM
    function save3pm() {
        var threeInput = threePMtext.val().trim();
        console.log(threeInput)
        localStorage.setItem('3pm', threeInput)
    }
    save3pmBtn.click(save3pm);
    //Save 4 PM
    function save4pm() {
        var fourInput = fourPMtext.val().trim();
        console.log(fourInput)
        localStorage.setItem('4pm', fourInput)
    }
    save4pmBtn.click(save4pm);
    //Save 5 PM
    function save5pm() {
        var fiveInput = fivePMtext.val().trim();
        console.log(fiveInput)
        localStorage.setItem('5pm', fiveInput)
    }
    save5pmBtn.click(save5pm);  
    //End of Save Functions
});

//Assign Date to <p id="currentDay">
const now = moment().format('MMMM Do YYYY');
let $today = $('#currentDay');
$today.text(now);