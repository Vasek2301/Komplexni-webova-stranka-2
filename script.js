//HAMBURGER MENU
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});

// UP BUTTON
const scrollToTopButton = document.getElementById("scrollToTopButton");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTopButton.style.display = "flex";
    setTimeout(() => (scrollToTopButton.style.opacity = "1"), 0);
  } else {
    scrollToTopButton.style.opacity = "0";
    setTimeout(() => (scrollToTopButton.style.display = "none"), 300);
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// COUNTDOWN
// Set the date we're counting down to
const countDownDate = new Date("2024-12-31T23:59:59").getTime();

// Update the count down every 1 second
const x = setInterval(() => {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById(
    "countdown"
  ).innerHTML = `New album in ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Odpočet skončil";
  }
}, 1000);

// LOGIN
function validatePasswordMatch() {
  const pw1 = document.getElementById("pswd1").value;
  const pw2 = document.getElementById("pswd2").value;

  if (pw2 !== "" && pw1 !== pw2) {
    document.getElementById("message2").innerHTML =
      "**Passwords are not the same";
    document.getElementById("pswd2").classList.remove("valid");
    document.getElementById("pswd2").classList.add("invalid");
  } else if (pw2 !== "" && pw1 === pw2) {
    document.getElementById("message2").innerHTML = "";
    document.getElementById("pswd2").classList.remove("invalid");
    document.getElementById("pswd2").classList.add("valid");
  } else {
    document.getElementById("message2").innerHTML = "";
    document.getElementById("pswd2").classList.remove("invalid", "valid");
  }
}

function validateForm() {
  const nickname = document.getElementById("nickname").value;
  const pw1 = document.getElementById("pswd1").value;
  const pw2 = document.getElementById("pswd2").value;

  let isValid = true;

  if (nickname === "") {
    document.getElementById("nicknameMsg").innerHTML = "**Fill in the nickname";
    isValid = false;
  } else {
    document.getElementById("nicknameMsg").innerHTML = "";
  }

  if (pw1.length < 8) {
    document.getElementById("message1").innerHTML = "**Password is too short.";
    isValid = false;
  } else {
    document.getElementById("message1").innerHTML = "";
  }

  if (pw2 === "" || pw1 !== pw2) {
    if (pw2 === "") {
      document.getElementById("message2").innerHTML =
        "**Enter the password please!";
    } else {
      document.getElementById("message2").innerHTML =
        "**Passwords are not the same";
    }
    document.getElementById("pswd2").classList.remove("valid");
    document.getElementById("pswd2").classList.add("invalid");
    isValid = false;
  } else {
    document.getElementById("message2").innerHTML = "";
    document.getElementById("pswd2").classList.remove("invalid");
    document.getElementById("pswd2").classList.add("valid");
  }

  if (isValid) {
    document.getElementById("nickname").classList.add("valid");
    document.getElementById("pswd1").classList.add("valid");
    document.getElementById("pswd2").classList.add("valid");
    alert("All inputs are valid! Logging in...");
  } else {
    alert("Please fill the form correctly.");
  }

  return isValid;
}

function togglePasswordVisibility(id) {
  const passwordField = document.getElementById(id);
  passwordField.setAttribute(
    "type",
    passwordField.getAttribute("type") === "password" ? "text" : "password"
  );
}

document.getElementById("pswd1").addEventListener("input", function () {
  const pw1 = this.value;
  if (pw1.length < 8) {
    document.getElementById("message1").innerHTML = "**Password is too short.";
    document.getElementById("pswd1").classList.add("invalid");
  } else {
    document.getElementById("message1").innerHTML = "";
    document.getElementById("pswd1").classList.remove("invalid");
    document.getElementById("pswd1").classList.add("valid");
  }
});

document.getElementById("pswd2").addEventListener("input", function () {
  validatePasswordMatch();
});
