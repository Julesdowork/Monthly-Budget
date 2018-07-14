$(document).ready(function() {
    let $month = $("#month");
    $month.val(getInitialMonth());

    $month.change(() => {
        console.log($month.val());
    });

    let moneyInputs = getMoneyInputsArray();
    // console.log(moneyInputs);
});

function getInitialMonth() {
    let currentDate = new Date();
    let monthStr = currentDate.getFullYear() + "-";
    let currentMonth = currentDate.getMonth() + 1;
    currentMonth = currentMonth < 10 ? "0" + currentMonth : currentMonth;
    monthStr += currentMonth;
    return monthStr;
}

function getMoneyInputsArray() {
    let moneyInputs = document.querySelectorAll(".money-input input");
    moneyInputs = [].slice.call(moneyInputs);   // convert from NodeList to array
    moneyInputs.forEach(i => {
        i.addEventListener("change", function(e) {
            let inputVal = e.target.value;
            let patt = /^(([1-9]\d*)?\d)(\.\d{0,2})?$/  // finds dollar amounts
            if (!patt.test(inputVal)) {
                // console.log("Invalid input. Please only use numbers and '.'");
                $(this).addClass("invalid-input");
            } else {
                $(this).removeClass("invalid-input");
            }
        });
    });

    return moneyInputs
}