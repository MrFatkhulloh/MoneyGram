var DOLLAR_TO_UZS = 10678.56;
var EURO_TO_UZS = 12526.67;
var RUBLE_TO_UZS = 150.39;


var elForm = document.getElementById("currencyForm");

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    var elCurrencyInput = document.getElementById("inputState");
    var elCurrencyAmount = document.getElementById("inputCity").value;
    var result = document.getElementById("result");
    
    var checkNo1 = (elCurrencyInput.value == "usd");
    var checkNo2 = (elCurrencyInput.value == "eur");
    var checkNo3 = (elCurrencyInput.value == "ru");
    if (checkNo1) {
        result.value = `${DOLLAR_TO_UZS*elCurrencyAmount} SUM`
        console.log(DOLLAR_TO_UZS*elCurrencyAmount);
    }else if (checkNo2) {
        result.value = `${EURO_TO_UZS*elCurrencyAmount} SUM`
        console.log(EURO_TO_UZS*elCurrencyAmount);
    }else if (checkNo3) {
        result.value = `${RUBLE_TO_UZS*elCurrencyAmount} SUM`
        console.log(RUBLE_TO_UZS*elCurrencyAmount)
    }else
    result.value = `Please, choose currency type!` 
    console.log("please choose currency type!");
    // console.log(DOLLAR_TO_UZS*elCurrencyAmount);
})