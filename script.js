document.getElementById("registration-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    var registrationSuccess = document.getElementById("registration-success");
    registrationSuccess.innerHTML = `Thanks for registration !!!! <Registration Successful!<br>Welcome  , ${name} (${email})`;
    this.reset();
  });
  