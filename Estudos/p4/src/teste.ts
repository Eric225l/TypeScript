let num: NodeListOf<HTMLInputElement> = document.querySelectorAll('.number');//tipagem de lista e o tipo de coisas que tem dentro da lista indicado por <tipo especifico>
let buttonCalc: HTMLButtonElement | null = document.querySelector(".button-calc");
let result: HTMLElement | null = document.querySelector(".result");// | null servira para indicar caso não tenha valor, para indicar que ela está nula
let calc: number;


if(buttonCalc){ // verificar se está sendo passado um resultado para o botão
    buttonCalc.addEventListener("click", ()=>{
        let value1 = Number(num[0]?.value || 0); // o || 0 serve para deixar um valor de seguranç nesse caso 0
        let value2 = Number(num[1]?.value || 0);
        
        calc = value1 + value2;
        
        if(result){ // verificar se o resultado possui um valor
            result.textContent = String(calc);
        }
    })
}
