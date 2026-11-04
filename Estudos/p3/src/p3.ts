let form: HTMLFormElement | null = document.querySelector("#form-test");

if(form){
    form.addEventListener("submit", (evt: SubmitEvent)=>{
        evt.preventDefault();

        let formData: FormData = new FormData(form);
        let formObject: {[key: string]: FormDataEntryValue}  = Object.fromEntries(formData);// a tipagem pode ser removida pois object.fromentries já retorna tipado

        console.log(formObject);
    })

}

