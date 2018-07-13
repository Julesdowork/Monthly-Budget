$(document).ready(function() {
    let $month = $("#month");
    $month.val(getInitialMonth());

    $month.change(() => {
        console.log($month.val());
    });

    let $checkingStart = $("#checking-starting");
    let $checkingEnd = $("#checking-ending");

    $checkingStart.change((e) => {
        let inputVal = e.target.value;
        let patt = /^(([1-9]\d*)?\d)(\.\d{0,2})?$/  // finds dollar amounts
        if (!patt.test(inputVal)) {
            console.log("Invalid input. Please only use numbers and '.'");
        }
    })
});

function getInitialMonth() {
    let currentDate = new Date();
    let monthStr = currentDate.getFullYear() + "-";
    let currentMonth = currentDate.getMonth() + 1;
    currentMonth = currentMonth < 10 ? "0" + currentMonth : currentMonth;
    monthStr += currentMonth;
    return monthStr;
}