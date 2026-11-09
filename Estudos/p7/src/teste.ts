let url: string = "http://localhost:3000/";
let form: HTMLFormElement | null = document.querySelector(".enviar");

if(form){
    form.addEventListener("submit", (evt)=>{
        evt.preventDefault();

        let formData: FormData = new FormData(form);
        let formObj: object = Object.fromEntries(formData);

        console.log(formObj);

        async function PostPerson(): Promise<void>{
            try{
                let res = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formObj),
                })

                let data = await res.json();
                console.log(data);

            } catch(err){
                console.log(`ERRO no post: ${err}`);
            }
        }

        PostPerson();
    })
}

