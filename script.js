// Alert on Home page button
function showAlert() {
  alert("Welcome to Travel Explorer! 🌍");
}

// Gallery slideshow
 let images = [
  "images/001.jpg",
  "images/002.jpg",
  "images/003.jpg"
];

let index = 0;

function nextImage() {
  index = (index + 1) % images.length;
  document.getElementById("slide").src = images[index];
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("slide").src = images[index];
}


// Contact Form Validation
function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("⚠️ All fields are required!");
    return false;
  }

  alert("✅ Thank you for contacting us, " + name + "!");


  return true;
}
