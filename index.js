var formisvalid = true;

function atError(message) {
  var errorBox = document.querySelector(".alert");
  var errorTxt = document.querySelector(".errorText");
  errorBox.classList.contains("d-none") && errorBox.classList.toggle("d-none");
  errorTxt.innerHTML += "<p>" + message + "</p>";
}

const validate = (e) => {
  e.preventDefault();
  var errorBox = document.querySelector(".alert");
  var errorTxt = document.querySelector(".errorText");
  !errorBox.classList.contains("d-none") && errorBox.classList.toggle("d-none");
  errorTxt.innerHTML = "";

  document.querySelectorAll("input").forEach(function (items) {
    items.classList.remove("is-invalid");
  });
  document.querySelector("#exampleState").classList.remove("is-invalid");

  var accField = document.querySelector("#exampleAccount");
  var ccvCode = document.querySelector("#exampleCcv");
  var amt = document.querySelector("#exampleAmount");
  var cit = document.querySelector("#exampleCity");
  var ste = document.querySelector("#exampleState");
  var zip = document.querySelector("#exampleZip");
  var firstN = document.querySelector("#exampleFirst");
  var lastN = document.querySelector("#exampleLast");

  if (accField.value.length < 16) {
    atError("Credit card number needs to be 16 digits");
    accField.classList.add("is-invalid");
    formisvalid = false;
  }
  if (ccvCode.value.length < 3) {
    atError("CCV should be at least three digits");
    ccvCode.classList.add("is-invalid");
    formisvalid = false;
  }
  if (amt.value <= 0) {
    atError("Put in amount");
    amt.classList.add("is-invalid");
    formisvalid = false;
  }
  if (cit.value.length < 2) {
    atError("Enter city");
    cit.classList.add("is-invalid");
    formisvalid = false;
  }
  if (ste.value === "Pick a state") {
    atError("Select state");
    ste.classList.add("is-invalid");
    formisvalid = false;
  }
  if (zip.value.length < 5) {
    atError("Postal code should be 5 digits");
    zip.classList.add("is-invalid");
    formisvalid = false;
  }
  if (firstN.value.length < 2) {
    atError("Enter first name");
    firstN.classList.add("is-invalid");
    formisvalid = false;
  }
  if (lastN.value.length < 2) {
    atError("Enter last name");
    lastN.classList.add("is-invalid");
    formisvalid = false;
  }
  if (formisvalid === true) {
    document.querySelectorAll("input").forEach(function (items) {
      items.value = "";
    });
    document.querySelector("#exampleState").value = "Pick a state";
  }
};
document.querySelector("#theForm").addEventListener("submit", validate);
