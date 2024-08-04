const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const input = document.getElementById("user-input");
const result = document.getElementById("results-div");

check.addEventListener("click", validatePhoneNumber);
clear.addEventListener("click", clearResults);

function validatePhoneNumber() {
  const phoneNumber = input.value;

  if (phoneNumber === "") {
    alert("Please provide a phone number.");
    return;
  }

  const isValid = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/.test(
    phoneNumber // this POS regex took me way to long to figure out
  );

  if (isValid) {
    result.textContent = "Valid US number: " + phoneNumber;
  } else {
    result.textContent = "Invalid US number: " + phoneNumber;
  }
}

function clearResults() {
  input.value = "";
  result.textContent = "";
}
