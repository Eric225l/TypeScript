let form: HTMLFormElement | null = document.querySelector(".invit");
let url: string = "http://localhost:3000";

async function GetMembers(): Promise<void>{
    try{
        let res: Response = await fetch(url);
        let data = await res.json();

        console.log(data);
        
    }catch(err){
        console.log(`ERRO da requisição get: ${err}`);
    }
}

GetMembers();

if(form){
    form.addEventListener("submit", (evt)=>{
        evt.preventDefault();

        let formData: FormData = new FormData(form);
        let formObj: object = Object.fromEntries(formData);

        async function PostMember(): Promise<void>{
            try{
                let res: Response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formObj),
                })
    
                let data = await res.json();
                console.log(data);

            }catch(err){
                console.log(`ERRO da requisição post: ${err}`)
            }
        }

        PostMember();
        
    })
}