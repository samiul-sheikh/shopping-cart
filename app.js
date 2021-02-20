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