let num: NodeListOf<HTMLInputElement> = document.querySelectorAll('.number');
let buttonCalc: HTMLButtonElement | null = document.querySelector(".button-calc");
let result: HTMLElement | null = document.querySelector(".result");
let calc: number;


if(buttonCalc){
    buttonCalc.addEventListener("click", ()=>{
        let value1 = Number(num[0]?.value || 0);
        let value2 = Number(num[1]?.value || 0);
        
        calc = value1 + value2;

        console.log(calc);
        
        if(result){
            result.textContent = String(calc);
        }
    })
}
