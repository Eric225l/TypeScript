let form = document.querySelector("#form-test");
if (form) {
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let formData = new FormData(form);
        let formObject = Object.fromEntries(formData);
        console.log(formObject);
    });
}
//# sourceMappingURL=p3.js.map