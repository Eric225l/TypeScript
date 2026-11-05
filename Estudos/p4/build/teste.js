let num = document.querySelectorAll('.number');
let buttonCalc = document.querySelector(".button-calc");
let result = document.querySelector(".result");
let calc;
if (buttonCalc) {
    buttonCalc.addEventListener("click", () => {
        let value1 = Number(num[0]?.value || 0);
        let value2 = Number(num[1]?.value || 0);
        calc = value1 + value2;
        console.log(calc);
        if (result) {
            result.textContent = String(calc);
        }
    });
}
//# sourceMappingURL=teste.js.map