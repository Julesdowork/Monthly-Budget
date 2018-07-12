$(document).ready(function() {
    let $month = $("#month");
    $month.val(getInitialMonth());

    $month.change(() => {
        console.log($month.val());
    });
});

function getInitialMonth() {
    let currentDate = new Date();
    let monthStr = currentDate.getFullYear() + "-";
    let currentMonth = currentDate.getMonth() + 1;
    currentMonth = currentMonth < 10 ? "0" + currentMonth : currentMonth;
    monthStr += currentMonth;
    return monthStr;
}
