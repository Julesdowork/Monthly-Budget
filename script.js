$(document).ready(function() {
    let $month = $("#month");
    $month.val(getInitialMonth());

    $month.change(() => {
        console.log($month.val());
    });

    let moneyInputs = getMoneyInputsArray();

    let checkingProjectedTotal = 0;
    let checkingActualTotal = 0;
    let $checkingProjectedTotalInput = $("#checking-projected-total");
    let $checkingActualTotalInput = $("#checking-actual-total");
    let $projectedMoneyInputs = $(".projected");
    let $actualMoneyInputs = $(".actual");

    $projectedMoneyInputs.change(function(e) {
        if (!$(this).hasClass("invalid-input")) {
            checkingProjectedTotal = sumAllInChecking("projected", $projectedMoneyInputs);
            displayCheckingTotals();
        }
    });

    $actualMoneyInputs.change(function(e) {
        if (!$(this).hasClass("invalid-input")) {
            checkingActualTotal = sumAllInChecking("actual", $actualMoneyInputs);
            displayCheckingTotals();
        }
    })

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
                if (inputVal && !patt.test(inputVal)) {
                    // console.log("Invalid input. Please only use numbers and '.'");
                    $(this).addClass("invalid-input");
                } else {
                    $(this).removeClass("invalid-input");
                }
            });
        });

        return moneyInputs
    }

    function sumAllInChecking(label, inputs) {
        inputArr = [].slice.call(inputs);
        let inputVals = inputArr.map(input => {
            return +input.value;    // convert to Number
        });
        let sum = inputVals.reduce((acc, next) => {
            return acc + next; 
        }, 0);
        return sum;
    }

    function displayCheckingTotals() {
        $checkingProjectedTotalInput.val(checkingProjectedTotal.toFixed(2) || 0);
        $checkingActualTotalInput.val(checkingActualTotal.toFixed(2) || 0);
    }
});



