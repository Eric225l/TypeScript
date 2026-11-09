let url = "http://localhost:3000/";
let form = document.querySelector(".enviar");
if (form) {
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let formData = new FormData(form);
        let formObj = Object.fromEntries(formData);
        console.log(formObj);
        async function PostPerson() {
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
                console.log(`ERRO no post: ${err}`);
            }
        }
        PostPerson();
    });
}
//# sourceMappingURL=teste.js.map