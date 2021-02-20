// add click handler & eventListener for phone + button
document.getElementById('phone-increase').addEventListener('click', function(){
    // console.log('plus clicked')
    const phoneInput = document.getElementById('phone-count');
    // console.log(phoneInput.value)
    const phoneCount = parseInt(phoneInput.value)
    // console.log(phoneCount);
    const phoneNewCount = phoneCount + 1;
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById('phone-total').innerText = '$' + phoneTotal;
})

// add click handler & eventListener for phone - button
document.getElementById('phone-decrease').addEventListener('click', function(){
    // console.log('minus clicked');
    const phoneInput = document.getElementById('phone-count');
    // console.log(phoneInput.value);
    const phoneCount = parseInt(phoneInput.value);
    // console.log(phoneCount);
    const phoneNewCount = phoneCount - 1;
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById('phone-total').innerText = '$' + phoneTotal;
})

/*
//case + button worked also update price
document.getElementById("case-increase").addEventListener("click", function () {
    const caseInput = document.getElementById("case-count");
    // console.log(caseInput.value);
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount + 1;
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById("case-total").innerText = '$' + caseTotal;
})

//case - button worked also update price
document.getElementById("case-decrease").addEventListener("click", function () {
    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);
    const caseNewCount = caseCount - 1;
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById("case-total").innerText = '$' + caseTotal;
})

//case + button worked also update price
document.getElementById("case-increase").addEventListener("click", function () {
    handleProductChange(true);
})

//case - button worked also update price
document.getElementById("case-decrease").addEventListener("click", function () {
    handleProductChange(false);
});
*/

// adding function for case + & - button
function handleProductChange(isIncrease) {
    const caseInput = document.getElementById("case-count");
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if (isIncrease == true) {
        caseNewCount = caseCount + 1;
    }
    if (isIncrease == false && caseCount > 0) {
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById("case-total").innerText = '$' + caseTotal;
}