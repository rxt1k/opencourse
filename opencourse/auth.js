function signup() {
    const u = document.getElementById("newUsername").value;
    const p = document.getElementById("newPassword").value;
    const msg = document.getElementById("message");
  
    if (!u || !p) {
      msg.textContent = "Please enter both username and password.";
      msg.style.color = "orange";
      return;
    }
  
    const user = {
      username: u,
      password: p
    };
  
    localStorage.setItem("user", JSON.stringify(user));
    msg.textContent = "Account created! Redirecting to login...";
    msg.style.color = "lightgreen";
  
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  }
  function login() {
    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;
    const msg = document.getElementById("message");
  
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
    if (storedUser && u === storedUser.username && p === storedUser.password) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "dashboard.html";
    } else {
      msg.textContent = "Invalid username or password!";
      msg.style.color = "red";
    }
  }
  