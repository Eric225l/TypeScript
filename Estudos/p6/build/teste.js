let form = document.querySelector(".invit");
let url = "http://localhost:3000";
async function GetMembers() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
    }
    catch (err) {
        console.log(`ERRO da requisição get: ${err}`);
    }
}
GetMembers();
if (form) {
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let formData = new FormData(form);
        let formObj = Object.fromEntries(formData);
        async function PostMember() {
            try {
                let res = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formObj),
                });
                let data = await res.json();
                console.log(data);
            }
            catch (err) {
                console.log(`ERRO da requisição post: ${err}`);
            }
        }
        PostMember();
    });
}
//# sourceMappingURL=teste.js.map