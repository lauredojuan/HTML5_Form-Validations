function atError(message){
    let errorBox = document.querySelector(".alert");
    errorBox.classList.contains("d-none") && errorBox.classList.toggle("d-none");

}



const validate = (e) => {
    e.preventDefault();
    let errorBox = document.querySelector("#exampleAccount");
    !errorBox.classList.contains("d-none") && errorBox.classList.toggle("d-none");
    errorBox.innerHTML = "";

    let accField = document.querySelector("#exampleAccount");
    let ccvField = document.querySelector("#exampleCvc");
    let amountField = document.querySelector("#exampleCvc");


    if (accField.value < 100000000000){
        atError("credit card number not valid")
        accField.classList.add("is invalid")
    }
    if (ccvField.value.length < 3){
        atError("credit card number not valid")
        ccvField.classList.add("is-invalid")
    }



};


document.querySelector("#theForm").addEventListener("click", validate);


