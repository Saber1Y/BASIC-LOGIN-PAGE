// const form = document.getElementById("my-form");
// const nameInput = document.getElementById("name");
// const emailInput = document.getElementById("email");
// const phoneNumberInput = document.getElementById("phoneNumber");
// const messageDiv = document.querySelector(".message");

// function handleSubmit(event) {
//   event.preventDefault();

//   // Get the values from input fields
//   const name = nameInput.value;
//   const email = emailInput.value;
//   const phoneNumber = phoneNumberInput.value;

//   // Perform basic validation
//   if (name.trim() === "") {
//     showMessage("Name is required");
//     return;
//   }

//   if (email.trim() === "") {
//     showMessage("Email is required");
//     return;
//   }

//   if (phoneNumber.trim() === "") {
//     showMessage("Phone Number is required");
//     return;
//   }

//   showMessage("Account created successfully!", "success");
// }

// function showMessage(text, messageType = "error") {
//   messageDiv.textContent = text;
//   messageDiv.className = messageType;
// }

// form.addEventListener("submit", handleSubmit);